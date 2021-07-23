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
      <v-row dense v-show="isLoad" class="ma-auto">
        <v-icon large @click="backHistory">mdi-chevron-left</v-icon>
        <v-col cols="12">
          <div
            class="d-flex text-h4 blue-grey--text flex-column align-center"
            v-if="dataLength === 0"
          >
            <v-icon x-large class="mb-3">mdi-clipboard-text-search-outline</v-icon>
            尚無客服紀錄
          </div>
          <ul class="pa-0 d-flex flex-column-reverse">
            <li :class="userclass(datas.ManagerName)" v-for="datas in data" :key="datas.Id">
              <v-avatar
                size="40"
                class="avatarbd"
              >
                <img
                  :src="ConsultantPic"
                  alt="User"
                  v-if="datas.ConsultantName !== ''"
                >
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="User"
                  v-if="datas.ManagerName !== ''"
                >
              </v-avatar>
              <div class="d-flex flex-column ml-3" v-if="datas.ManagerName !== ''">
                <div class="nameStyle">
                  {{datas.ManagerName}}
                </div>
                <p class="mb-0 py-2 px-2 messageStyle">{{datas.Conversation}}</p>
                <p class="mb-0 timeStyle">
                  <v-icon small class="mr-1">mdi-clock-outline</v-icon>
                  {{timeReplace(datas.TimeCreate)}}
                </p>
              </div>
              <div class="d-flex flex-column mr-3" v-if="datas.ConsultantName !== ''">
                <div class="nameStyle">
                  {{datas.ConsultantName}}
                </div>
                <p class="mb-0 py-2 px-2 messageStyle">{{datas.Conversation}}</p>
                <p class="mb-0 timeStyle">
                  <v-icon small class="mr-1">mdi-clock-outline</v-icon>
                  {{timeReplace(datas.TimeCreate)}}
                </p>
              </div>
            </li>
          </ul>
        </v-col>
        <v-col cols="12">
          <div style="height: 100px"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { apiPostGetServiceLog } from '@/api';

export default {
  data: () => ({
    isLoad: false,
    data: [],
    dataLength: 0,
    ConsultantPic: '',
  }),
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getContent();
      this.ConsultantPic = sessionStorage.getItem('pic');
    },
    timeReplace(val) {
      const time = /T/gi;
      return val.replace(time, ' ').split('.')[0];
    },
    backHistory() {
      this.$router.go(-1);
    },
    getContent() {
      this.$store.dispatch('setReLoadTalk', false);
      const token = this.$Cookies.get('Token');
      const params = new URLSearchParams();
      params.append('serviceId', this.$route.params.id);
      params.append('pageNo', 0);
      params.append('pageSize', 0);

      apiPostGetServiceLog(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.data = res.data.datas;
            this.dataLength = res.data.datas.length;
          }
          this.$nextTick(() => {
            this.isLoad = true;
          });
        }).catch((error) => {
          console.log(error);
        });
    },
    userclass(user) {
      const name = user;

      if (name !== '') {
        return 'my-2 d-flex';
      }
      return 'my-2 d-flex flex-row-reverse text-right';
    },
  },

};

</script>

<style lang="scss" scoped>
  .timeStyle {
    font-size: 0.8rem;
    color: #969696;
  }
  .messageStyle{
    background-color: #666;
    color: #ffffff;
    border-radius: 7px;
  }
  .nameStyle{
    color: #555;
  }
</style>
