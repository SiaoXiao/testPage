<template>
  <v-sheet
    tile
    class='overflow-y-auto overflow-x-hidden scrollbarNone'
    max-height="800px"
    shrink-on-scroll
  >
    <v-container>
      <v-row dense v-show="!isLoad" class="ma-auto">
        <v-col cols="12" class="my-16 text-center">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-col>
      </v-row>
      <v-row v-show="isLoad" class="ma-auto">
        <v-icon large @click="backHistory">mdi-chevron-left</v-icon>
        <v-col cols="12" class="my-5">
          <div class="mb-1">
            <p class="text-center text-h6">{{NewsData.title}}</p>
          </div>
          <v-card
            style="height: 150px"
            color="white"
            elevation="10"
            class="d-flex"
          >
            <v-card-text>
              <div>
                <v-icon small class="mr-1">mdi-clock-outline</v-icon>
                {{timeReplace(NewsData.time)}}
              </div>
              <div class="text--primary mt-2">{{NewsData.context}}</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <div style="height: 100px"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { apiPostGetNewsContext } from '@/api';

export default {
  data: () => ({
    isLoad: false,
    NewsData: {
      title: '',
      context: '',
      time: '',
    },
  }),
  created() {
    this.init();
  },
  methods: {
    init() {
      this.GetNewsContext();
    },
    timeReplace(val) {
      const time = /T/gi;
      return val.replace(time, ' ');
    },
    backHistory() {
      this.$router.go(-1);
    },
    GetNewsContext() {
      const token = this.$Cookies.get('Token');
      const params = new URLSearchParams();
      params.append('newsId', this.$route.params.id);

      apiPostGetNewsContext(params, token).then((res) => {
        if (res.status === 200 && res.data.status_code === 'SUCCESS') {
          this.NewsData.title = res.data.title;
          this.NewsData.context = res.data.context;
          this.NewsData.time = res.data.create_time;
        }
        this.$nextTick(() => {
          this.isLoad = true;
        });
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};

</script>
