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
        <v-row dense  v-show="isLoad" class="ma-auto">
          <v-col cols="12"  class="ma-0 px-0 d-flex justify-space-between">
            <v-icon large @click="backHistory">mdi-chevron-left</v-icon>
            <v-icon large @click="gotoAddCustomer">mdi-account-plus</v-icon>
          </v-col>
          <v-col cols="12"  class="my-5">
            <v-card
              class="mb-3"
              color="white"
              elevation="10"
              v-for="list in customerListData.data"
              :key="list.customer_id"
            >
              <v-card-subtitle>
                <div class="contentTag mr-2">{{list.city}}</div>
                <div class="contentTag">{{list.area}}</div>
              </v-card-subtitle>
              <v-card-title class="pt-0 pb-1">{{list.customer_name}}</v-card-title>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn
                  depressed
                  dark
                  color="cyan darken-1"
                  @click="gotoCustomerInfo(list.customer_id)"
                >
                  <v-icon dense class="mr-1">mdi-magnify-plus-outline</v-icon>
                  客戶資料
                </v-btn>
                <v-btn
                  depressed
                  dark
                  color="green"
                  @click="gotoAddContract(list.customer_id)"
                  v-if="list.status === 'F1011'"
                >
                  <v-icon dense class="mr-1">mdi-clipboard-edit</v-icon>
                  新增合約
                </v-btn>
                <v-btn
                  depressed
                  dark
                  color="green"
                  v-if="list.status == 'F1012'"
                  @click="gotoEditContract(list.contract_no)"
                >
                  <v-icon dark class="mr-1">mdi-lead-pencil</v-icon>
                  編輯合約
                </v-btn>
                <v-btn
                  depressed
                  dark
                  color="green"
                  v-else-if="list.status == 'F1013'"
                  @click="gotoEditContract(list.contract_no)"
                >
                  <v-icon dark class="mr-1">mdi-lead-pencil</v-icon>
                  編輯合約
                </v-btn>
                <v-btn
                  depressed
                  dark
                  color="green"
                  v-if="list.status == 'F1012'"
                  @click="gotoViewContract(list)"
                >
                  <v-icon dark class="mr-1">mdi-lead-pencil</v-icon>
                  查看合約
                </v-btn>
                <v-btn
                  depressed
                  dark
                  color="green"
                  v-else-if="list.status == 'F1013'"
                  @click="gotoViewContract(list)"
                >
                  <v-icon dark class="mr-1">mdi-lead-pencil</v-icon>
                  查看合約
                </v-btn>
              </v-card-actions>
              <v-card-subtitle class="d-flex">
                <div class="mr-3 fz-c">廣告機合約</div>
                <div>
                  <v-card-text class="pa-0">
                    <div class="d-flex">狀態：{{stateReplace(list.status)}}
                      <v-icon
                        dense
                        class="ml-1"
                        color="blue accent-4"
                        v-if="list.status === 'F1014'"
                        @click="gotoViewContract(list)"
                      >
                        mdi-magnify-plus-outline
                      </v-icon>
                    </div>
                    <div>店家分類：{{list.label}}</div>
                  </v-card-text>
                </div>
              </v-card-subtitle>
            </v-card>
          </v-col>

          <v-col cols="12">
            <div class="text-center">
              <v-container>
                <v-row justify="center">
                  <v-col cols="8">
                    <v-container class="max-width">
                      <v-pagination
                        v-model="customerListData.page"
                        class="my-4"
                        :length="customerListData.totalPage"
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
import { apiPostListCustomer } from '@/api';

export default {
  data: () => ({
    isLoad: false,
    token: '',
    page: 1,
    customerListData: {
      page: 1,
      size: 10,
      totalPage: 1,
      data: {},
    },
    contractData: {
      customerId: '',
      contractNo: '',
      address: '',
    },
  }),
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getListCustomer();
    },
    backHistory() {
      this.$router.go(-1);
    },
    gotoAddCustomer() {
      this.$router.push({ path: 'addCustomer' });
    },
    gotoCustomerInfo(id) {
      this.$router.push({ path: `customerList/customerInfo${id}` });
    },
    gotoAddContract(id) {
      this.$router.push({ path: `customerList/addContract${id}` });
    },
    gotoEditContract(id) {
      this.$router.push({ path: `customerList/editContract${id}` });
    },
    gotoViewContract(data) {
      sessionStorage.setItem('Cdata', JSON.stringify(data));
      this.$router.push({ path: 'customerList/viewContract' });
    },

    getListCustomer() {
      const { token } = this.$store.getters;
      const params = new URLSearchParams();
      params.append('pageNo', this.customerListData.page);
      params.append('pageSize', this.customerListData.size);
      apiPostListCustomer(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.customerListData.data = res.data.datas;
            this.customerListData.page = res.data.page_no;
            this.customerListData.totalPage = res.data.total_page;
          }
          this.$nextTick(() => {
            this.isLoad = true;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    stateReplace(val) {
      let statusText = '';

      if (val === 'F1011') {
        statusText = '未新增合約';
      } else if (val === 'F1012') {
        statusText = '未簽名';
      } else if (val === 'F1013') {
        statusText = '審核中';
      } else if (val === 'F1014') {
        statusText = '審核通過';
      }

      return statusText;
    },
    changePage(page) {
      this.isLoad = false;
      const token = this.$Cookies.get('Token');
      const params = new URLSearchParams();
      params.append('pageNo', page);
      params.append('pageSize', this.customerListData.size);

      apiPostListCustomer(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.customerListData.data = res.data.datas;
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
    .contentTag{
    display: inline-block;
    padding: 2.5px 5px;
    color: #0d4182;
    border: 1px solid #0d4182;
    text-align: center;
    border-radius: 5px;
  }

  .fz-c{
    color: rgb(13, 65, 130);
  }

</style>
