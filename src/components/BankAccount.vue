<template>
  <v-sheet
    tile
    class='overflow-y-auto overflow-x-hidden px-3'
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
        <v-col cols="12" class="my-5" v-if="NoContent">
          <div
            class="d-flex text-h4 blue-grey--text flex-column align-center"
          >
            <v-icon x-large class="mb-3">mdi-clipboard-text-search-outline</v-icon>
            尚無銀行帳戶資料
          </div>
            <v-btn
              rounded
              block
              color="primary"
              class="mt-10"
              @click="goToAddBankAccount"
            >
              新增銀行帳戶
            </v-btn>
        </v-col>
        <v-col cols="12" class="my-5" v-if="!NoContent">
          <div class="d-flex justify-space-between mb-1">
            <v-card-title>銀行資料狀態:
              <div
                class="ml-1"
                :class="bankData.colorState === 1? 'grey--text'
                : bankData.colorState === 2? 'green--text'
                : 'red--text'"
              >{{bankData.statusText}}</div>
            </v-card-title>
          </div>
          <v-card
            color="white"
            elevation="10"
            class="mx-auto pa-3"
          >
            <v-img
              contain
              max-height="300"
              max-width="100%"
              class="white--text mx-auto"
              :src="bankData.img"
              alt="bank"
            ></v-img>
            <v-card-subtitle class="pb-0">
              <p class="text-h6 text--primary">
                銀行名稱: {{bankData.bankName}}
              </p>
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>銀行代號: {{bankData.bankNo}}</div>
              <div>銀行分行名稱: {{bankData.bankHome}}</div>
              <div>銀行分行代號: {{bankData.bankHomeNo}}</div>
              <div>銀行戶名: {{bankData.name}}</div>
              <div>銀行帳號: {{bankData.account}}</div>
            </v-card-text>
            <v-card-actions v-if="bankData.colorState === 2">
              <v-btn
                tile
                color="success"
                @click="goTomodifyBankAccount"
              >
                <v-icon left>
                  mdi-pencil
                </v-icon>
                修改銀行資料
              </v-btn>
            </v-card-actions>
            <v-card-actions v-else-if="bankData.colorState === 3">
              <v-btn
                tile
                color="success"
                @click="goTomodifyBankAccount"
              >
                <v-icon left>
                  mdi-pencil
                </v-icon>
                修改銀行資料
              </v-btn>
            </v-card-actions>
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
import { apiPostGetConsultantBalance } from '@/api';

export default {
  data: () => ({
    isLoad: false,
    NoContent: true,
    bankData: {
      statusText: '',
      bankName: '',
      bankNo: '',
      bankHome: '',
      bankHomeNo: '',
      name: '',
      account: '',
      colorState: '',
      img: null,
    },
  }),
  created() {
    this.init();
  },
  methods: {
    init() {
      sessionStorage.removeItem('modifyBank');
      this.getConsultantBalance();
    },
    backHistory() {
      this.$router.go(-1);
    },
    getConsultantBalance() {
      const token = this.$Cookies.get('Token');

      apiPostGetConsultantBalance(token)
        .then((res) => {
          if (res.status === 200 && res.data.status_balance === 0) {
            this.NoContent = true;
          } else if (res.status === 200 && res.data.status_balance !== 0) {
            this.NoContent = false;
            this.bankData.bankName = res.data.account_name;
            this.bankData.bankNo = res.data.account_no;
            this.bankData.bankHome = res.data.account_home;
            this.bankData.bankHomeNo = res.data.account_home_id;
            this.bankData.name = res.data.username_balance;
            this.bankData.account = res.data.account_id;
            this.bankData.img = res.data.img_balance;
            this.bankData.colorState = res.data.status_balance;
            switch (res.data.status_balance) {
              case 0:
                this.bankData.statusText = '未新增';
                break;
              case 1:
                this.bankData.statusText = '審核中';
                break;
              case 2:
                this.bankData.statusText = '審核通過';
                break;
              case 3:
                this.bankData.statusText = '審核失敗';
                break;

              default:
                break;
            }
          }
          this.$nextTick(() => {
            this.isLoad = true;
          });
        }).catch((error) => {
          console.log(error);
        });
    },
    goToAddBankAccount() {
      this.$router.push({ path: 'bankAccount/addBankAccount' });
    },
    goTomodifyBankAccount() {
      sessionStorage.setItem('modifyBank', false);
      this.$router.push({ path: 'bankAccount/addBankAccount' });
    },
  },
};

</script>
