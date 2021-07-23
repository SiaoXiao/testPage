<template>
  <v-sheet
    tile
    class='overflow-y-auto overflow-x-hidden scrollbarNone'
    max-height="800px"
    shrink-on-scroll
  >
    <v-icon large class="mb-3" @click="backHistory">mdi-chevron-left</v-icon>
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
        <v-col cols="12" class="my-5">
          <div class="d-flex justify-space-between mb-1">
            <span class="body-2">{{listData.title}}</span>
          </div>
          <v-card
            color="white"
            elevation="10"
            outlined
            class="d-flex justify-space-between px-3 py-3 mb-6"
            v-for="list in listData.data"
            :key="list.time_create"
          >
          <div>
            <v-card-title class="text-subtitle-1 px-1 py-1">
              領取人：{{list.consultant_name}}
            </v-card-title>
            <v-card-subtitle class="pa-0 mt-0">提領金額：{{list.balance}}</v-card-subtitle>
            <v-card-subtitle class="pa-0 mt-0">手續費：{{list.hand_balance}}</v-card-subtitle>
            <v-card-subtitle class="pa-0 mt-0">實際提領：{{list.real_balance}}</v-card-subtitle>
            <v-card-subtitle class="pa-0 mt-0">{{timeReplace(list.time_create)}}</v-card-subtitle>
            <v-card-subtitle class="pa-0">備註：{{list.memo}}</v-card-subtitle>
          </div>
          </v-card>
        </v-col>

        <v-col cols="12" class="my-5" v-if="listData.data.length == undefined">
          <div
            class="d-flex text-h4 blue-grey--text flex-column align-center"
          >
            <v-icon x-large class="mb-3">mdi-clipboard-text-search-outline</v-icon>
            尚無提領紀錄
          </div>
        </v-col>
        <v-col cols="12">
          <div class="text-center">
            <v-container>
              <v-row justify="center">
                <v-col cols="8">
                  <v-container class="max-width">
                    <v-pagination
                      v-model="listData.page"
                      class="my-4"
                      :length="listData.totalPage"
                      :total-visible="5"
                      @input="changePage"
                    ></v-pagination>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
        <v-col cols="12" class="my-5">
          <div style="height: 100px"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { apiPostGetConsultWithdrawList } from '@/api';

export default {
  data: () => ({
    isLoad: false,
    listData: {
      title: '提領紀錄列表',
      page: 1,
      size: 10,
      totalPage: 1,
      data: {},
    },
  }),
  created() {
    this.init();
  },

  methods: {
    init() {
      this.$store.dispatch('setToken', this.$Cookies.get('Token'));
      this.getBonusData();
    },
    timeReplace(val) {
      const time = /T/gi;
      return val.replace(time, ' ').split('.')[0];
    },
    backHistory() {
      this.$router.go(-1);
    },
    getBonusData() {
      const { token } = this.$store.getters;
      const params = new URLSearchParams();
      params.append('pageNo', this.listData.page);
      params.append('pageSize', this.listData.size);

      apiPostGetConsultWithdrawList(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.listData.data = res.data.datas;
            this.listData.page = res.data.page_no;
            this.listData.totalPage = res.data.total_page;
          }
          this.$nextTick(() => {
            this.isLoad = true;
          });
        }).catch((error) => {
          console.log(error);
        });
    },
    changePage(page) {
      this.isLoad = !this.isLoad;
      const { token } = this.$store.getters;
      const params = new URLSearchParams();
      params.append('pageNo', page);
      params.append('pageSize', this.listData.size);

      apiPostGetConsultWithdrawList(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.listData.data = res.data.datas;
            this.listData.page = res.data.page_no;
            this.listData.totalPage = res.data.total_page;
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
