<template>
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
      <v-col cols="12" class="my-5">
        <div class="d-flex justify-space-between mb-1">
          <span class="body-2">我的團隊總人數</span>
        </div>
        <v-card
          color="white"
          elevation="10"
        >
          <v-card-title class="body-2 d-flex justify-center">總人數</v-card-title>
          <v-card-subtitle
            class="headline text-center"
          >
            {{teamData.total}}
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" class="my-5">
        <div class="d-flex justify-space-between mb-1">
          <span class="body-2">團隊</span>
        </div>
        <v-card
          color="white"
          elevation="10"
          v-if="teamData.total === 0"
        >
          <v-card-text class="text-center px-2 py-5">
            {{teamData.itemText}}
          </v-card-text>
        </v-card>
        <v-card
          color="white"
          elevation="10"
          v-if="teamData.total > 0"
        >
          <v-sheet
            tile
            class='overflow-y-auto overflow-x-hidden px-3'
            max-height="400px"
            shrink-on-scroll
          >
            <v-card-subtitle
              class="pa-0"
              v-for="item in teamData.teamList"
              :key="item.consultant_id"
            >
              <div class="my-2 text-subtitle-1">
                姓名:&ensp;{{item.user_name}}
              </div>
              <div class="my-2 text-subtitle-1">
                總客戶:&ensp;{{item.customer_count}}
              </div>
              <v-divider></v-divider>
            </v-card-subtitle>
          </v-sheet>
        </v-card>
      </v-col>
      <v-col cols="12">
        <div style="height: 100px"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { apiPostMyTeam } from '@/api';

export default {
  data: () => ({
    isLoad: false,
    teamData: {
      total: 0,
      itemText: '暫無團隊',
      teamList: {},
    },
    page: 0,
    size: 0,
  }),
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$store.dispatch('setToken', this.$Cookies.get('Token'));
      this.getMyTeamList();
    },
    backHistory() {
      this.$router.go(-1);
    },
    getMyTeamList() {
      const { token } = this.$store.getters;
      const params = new URLSearchParams();
      params.append('pageNo', this.page);
      params.append('pageSize', this.size);

      apiPostMyTeam(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.teamData.teamList = res.data.my_teams;
            this.teamData.total = res.data.total;
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
