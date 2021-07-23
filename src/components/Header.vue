<template>
  <v-card color="blue darken-4">
    <div class="d-flex justify-center">
      <img
          v-show="cardTitle == ''
          || cardTitle === 'home'
          || cardTitle === 'Bonus'
          || cardTitle === 'User'"
          height="40"
          src="../assets/img/logo_white.png"
          alt="ifalinkLogo"
          class="mt-3"
      >
      <v-card-text
          class="mb-0 ml-3 pColorSize text-center"
          v-if="cardTitle !== ''
          && cardTitle !== 'home'
          && cardTitle !== 'Bonus'
          && cardTitle !== 'User'"
          v-text="cardTitle"></v-card-text>
    </div>
    <v-card-text
      class="d-flex justify-space-between"
      v-if="cardTitle !== '行事曆'
      && cardTitle !== '服務'
      && cardTitle !== '設定'
      && cardTitle !== '邀請碼'
      && cardTitle !== '合作顧問群'
      && cardTitle !== '修改密碼'
      && cardTitle !== '銀行帳戶'
      && cardTitle !== '個人資料'
      && cardTitle !== '聯繫客服'
      && cardTitle !== '客服紀錄'
      && cardTitle !== '消息公告'
      && cardTitle !== '消息公告'
      && cardTitle !== '客戶列表'
      && cardTitle !== '新建合約'
      && cardTitle !== '編輯合約'
      && cardTitle !== '查看合約'
      && cardTitle !== '客戶資料'
      && cardTitle !== '新增客戶資料'
      && cardTitle !== '新增/修改銀行帳戶'
      && cardTitle !== '提領列表'
      && cardTitle !== '簽名檔'
      && cardTitle !== '負責人簽名'
      "
    >
      <div class="mx-3 d-flex align-center" :class="cardTitle === 'home'? '' : 'flex-column'">
        <v-avatar
          size="80"
          class="avatarbd"
        >
        <img
          :src="data.pic"
          alt="User"
        >
        </v-avatar>
        <div v-show="cardTitle === 'home'">
          <p class="mb-0 ml-3 pColorSize" >
            {{data.user}} 您好!
          </p>
        </div>
        <div v-show="cardTitle !== 'home'">
          <p class="ma-0 mt-1 pColorSize" >
            {{data.user}}
          </p>
        </div>
      </div>
      <div class="d-flex flex-column mx-3" v-if="cardTitle === 'Bonus'">
        <v-card-title class="pa-0 colorWhite justify-center">{{items.title}}</v-card-title>
          <v-card-subtitle class="pa-0 ma-0 text-center">{{withdrawBonus}}</v-card-subtitle>

          <v-card-actions>
            <v-btn
              class="pa-1 mr-1"
              color="error"
              @click.stop="dialog = true, bonusData.switchOpen = true"
            >
              立即提領
            </v-btn>
            <v-btn
              class="pa-1"
              color="error"
              @click="gotoConsultWithdrawList"
            >
              查詢提領
            </v-btn>
          </v-card-actions>
      </div>
      <div class="d-flex flex-column align-center" v-if="cardTitle === 'User'">
        <v-card-title class="pa-0 colorWhite">
          <v-icon color="white">mdi-human-handsup</v-icon>
          顧問編號
        </v-card-title>
        <v-card-subtitle class="pa-0 my-1">{{data.id}}</v-card-subtitle>
        <v-card-actions class="pa-0">
          <v-btn
            class="ma-2"
            outlined
            color="white"
            @click="goToinvitationCode"
          >
          <v-icon color="white">mdi-share-variant-outline</v-icon>
            邀請碼
          </v-btn>
        </v-card-actions>
      </div>
    </v-card-text>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card v-show="bonusData.switchOpen">
        <v-card-title class="text-h5">
          立即提領
        </v-card-title>
          <v-text-field
            class="px-6"
              v-model="bonusData.money"
              :rules="[rules.required, rules.numberCheck]"
              label="請輸入提領金額"
              required
              outlined
            ></v-text-field>
        <v-card-text class="pb-0">
          <p class="text-subtitle-1 text--primary">{{bonusData.receiveText}}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="black"
            text
            @click="dialog = false"
          >
            取消
          </v-btn>
          <v-btn
            text
            @click="addConsultWithdraw"
          >
            確定
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-show="!bonusData.switchOpen">
        <v-card>
          <v-card-title class="text-h5 d-flex justify-center">
            {{dialogText}}
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="dialog = false"
            >
              確定
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { apiPostAddConsultWithdraw } from '@/api';

export default {
  inject: [
    'reload',
  ],

  data: () => ({
    dialog: false,
    dialogText: '',
    cardTitle: '',
    bonusData: {
      switchOpen: true,
      money: 0,
      receiveText: '提領作業需 7個工作天，並扣除手續費 5%，不足 1000元則扣除 50元手續費，點確定送出申請。',
    },
    items: {
      title: '可提領獎金',
      money: 0,
    },
    data: {
      user: '使用者',
      message: '您好!',
      id: '',
      pic: null,
    },
    rules: {
      required: (v) => !!v || '請輸入金額。',
      numberCheck: (v) => /[0-9]/.test(v) || '請輸入數字。',
    },
    consultantInfo: {},
    withdrawBonus: 0,
    timer: null,
    timer2: null,
  }),

  watch: {
    $route: {
      handler(to) {
        this.cardTitle = '';
        switch (to.name) {
          case 'Homepage':
            this.cardTitle = 'home';
            break;
          case 'Calendar':
            this.cardTitle = '行事曆';
            break;
          case 'Service':
            this.cardTitle = '服務';
            break;
          case 'Bonus':
            this.cardTitle = 'Bonus';
            this.withdrawBonus = sessionStorage.getItem('bonus');
            break;
          case 'ConsultWithdrawList':
            this.cardTitle = '提領列表';
            break;
          case 'User':
            this.cardTitle = 'User';
            break;
          case 'Setting':
            this.cardTitle = '設定';
            break;
          case 'InvitationCode':
            this.cardTitle = '邀請碼';
            break;
          case 'Team':
            this.cardTitle = '合作顧問群';
            break;
          case 'ResetPWD':
            this.cardTitle = '修改密碼';
            break;
          case 'BankAccount':
            this.cardTitle = '銀行帳戶';
            break;
          case 'AddBankAccount':
            this.cardTitle = '新增/修改銀行帳戶';
            break;
          case 'UserInfo':
            this.cardTitle = '個人資料';
            break;
          case 'ContactCustomerService':
            this.cardTitle = '聯繫客服';
            break;
          case 'CustomerServiceRecord':
            this.cardTitle = '客服紀錄';
            break;
          case 'CustomerServiceRecord_id':
            this.cardTitle = '客服紀錄';
            break;
          case 'Announcement':
            this.cardTitle = '消息公告';
            break;
          case 'AnnouncementContent_id':
            this.cardTitle = '消息公告';
            break;
          case 'CustomerList':
            this.cardTitle = '客戶列表';
            break;
          case 'AddContract_id':
            this.cardTitle = '新建合約';
            break;
          case 'EditContract_id':
            this.cardTitle = '編輯合約';
            break;
          case 'AddSignatureFile_id':
            this.cardTitle = '簽名檔';
            break;
          case 'AddCustomer':
            this.cardTitle = '新增客戶資料';
            break;
          case 'CustomerInfo_id':
            this.cardTitle = '客戶資料';
            break;
          case 'ViewContract':
            this.cardTitle = '查看合約';
            break;
          case 'Signature':
            this.cardTitle = '負責人簽名';
            break;
          default:
        }
      },
      immediate: true,
    },
  },

  created() {
    this.init();
    this.getBonus();
  },

  updated() {
    this.data.user = sessionStorage.getItem('name');
    this.withdrawBonus = sessionStorage.getItem('bonus');
  },

  methods: {
    init() {
      this.$store.dispatch('setToken', this.$Cookies.get('Token'));
      this.data.user = sessionStorage.getItem('name');
      this.data.id = sessionStorage.getItem('id');
      this.data.pic = sessionStorage.getItem('pic');
      this.withdrawBonus = sessionStorage.getItem('bonus');
    },
    goToinvitationCode() {
      this.$router.push({ path: 'user/invitationCode' });
    },
    gotoConsultWithdrawList() {
      this.$router.push({ name: 'ConsultWithdrawList' });
    },
    addConsultWithdraw() {
      this.dialogText = '';
      const { token } = this.$store.getters;
      const params = new URLSearchParams();
      params.append('amount', this.bonusData.money);
      apiPostAddConsultWithdraw(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.bonusData.switchOpen = false;
            this.dialogText = '已送出提領申請。';
            this.timer = setTimeout(() => {
              this.dialog = false;
              this.$router.go({ name: 'Bonus' });
            }, 2000);
          } else {
            this.bonusData.switchOpen = false;
            this.dialogText = res.data.status_code;
          }
        }).catch((error) => {
          console.log(error);
        });
    },
    getBonus() {
      this.timer2 = setTimeout(() => {
        this.withdrawBonus = sessionStorage.getItem('bonus');
      }, 2000);
    },
  },

  destroyed() {
    clearTimeout(this.timer);
    clearTimeout(this.timer2);
  },
};
</script>

<style lang="scss" scoped>
  .avatarbd{
    border: 1px solid #ffffff;
  }
  .pColorSize {
    font-size: 1.5rem;
    color: #ffffff;
  }
  .colorWhite{
    color: white;
    font-size: 1rem;
    letter-spacing: 0;
  }
  .theme--light.v-card > .v-card__text, .theme--light.v-card .v-card__subtitle{
    color: white;
    font-size: 1.3rem;
    letter-spacing: 0;
  }
  p {
    color: white;
  }
  .textLine{
    line-height: 24px;
  }
</style>
