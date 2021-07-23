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
        <v-col cols="12" class="my-5" v-if="data.length === 0">
          <div
            class="d-flex text-h4 blue-grey--text flex-column align-center"
          >
            <v-icon x-large class="mb-3">mdi-clipboard-text-search-outline</v-icon>
            尚無客服紀錄
          </div>
        </v-col>
        <v-col cols="12" class="my-5">
          <ul class="pa-0">
            <li class="my-2" v-for="list in data" :key="list.service_id">
              <a
                @click="gotoContent(list.service_id)"
                class="d-flex justify-space-between align-center"
              >
                <div class="d-flex flex-column">
                  <div class="titleColor">{{list.subject}}</div>
                  <p class="textContent">{{list.service_text}}</p>
                  <p>
                    <v-icon small class="mr-1">mdi-clock-outline</v-icon>
                    {{timeReplace(list.time_create)}}
                  </p>
                </div>
                <p style="white-space:nowrap">{{stateReplace(list.service_status)}}</p>
              </a>
            <v-divider></v-divider>
            </li>
          </ul>
        </v-col>
        <v-col cols="12">
          <div class="text-center">
            <v-container>
              <v-row justify="center">
                <v-col cols="8">
                  <v-container class="max-width">
                    <v-pagination
                      v-model="page"
                      class="my-4"
                      :length="totalPage"
                      :total-visible="5"
                      @input="changePage"
                    ></v-pagination>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
        <v-col cols="12">
          <div style="height: 100px"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { apiPostConsultantLogServices } from '@/api';

export default {
  data: () => ({
    isLoad: false,
    page: 1,
    size: 10,
    totalPage: 1,
    data: [],
  }),

  created() {
    this.init();
  },

  methods: {
    init() {
      this.getList();
    },
    stateReplace(text) {
      if (text === '已提交') {
        return '已送出';
      }
      return text;
    },
    timeReplace(val) {
      const time = /T/gi;
      return val.replace(time, ' ');
    },
    backHistory() {
      this.$router.go(-1);
    },
    gotoContent(id) {
      this.$router.push({ path: `CustomerServiceRecord/${id}` });
    },
    getList() {
      const token = this.$Cookies.get('Token');
      const params = new URLSearchParams();
      params.append('pageNo', this.page);
      params.append('pageSize', this.size);

      apiPostConsultantLogServices(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.data = res.data.datas;
            this.page = res.data.page_no;
            this.totalPage = res.data.total_page;
          }
          this.$nextTick(() => {
            this.isLoad = true;
          });
        }).catch((error) => {
          console.log(error);
        });
    },
    changePage(page) {
      this.isLoad = false;
      const token = this.$Cookies.get('Token');
      const params = new URLSearchParams();
      params.append('pageNo', page);
      params.append('pageSize', this.size);

      apiPostConsultantLogServices(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.data = res.data.datas;
            this.page = res.data.page_no;
            this.totalPage = res.data.total_page;
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

<style lang="scss" scoped>
  p {
    margin: 0;
    color: #969696;
    font-size: 0.9rem;
    line-height: 2;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  .titleColor{
    color: #000;
  }
  .textContent{
    max-width: 550px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    @media (max-width: 1264px) {
      max-width: 400px;
    }
    @media (max-width: 600px) {
      max-width: 200px;
    }
  }
</style>
