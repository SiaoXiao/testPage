<template>
  <v-form ref="form">
    <v-text-field
      v-model="data.accountId"
      label="輸入您的帳號"
      type="text"
      :rules="[rules.required, rules.min]"
      :counter="textLength"
      outlined
      clearable
      class="input-group--focused"
    ></v-text-field>
    <v-text-field
      v-model="data.password"
      :rules="[rules.required, rules.counter, rules.password]"
      :type="showPWD ? 'text' : 'password'"
      :counter="textLength"
      label="輸入您的密碼"
      outlined
      clearable
      class="input-group--focused"
      @click:append="showPWD = !showPWD"
    ></v-text-field>
    <div class="loginToolBox">
      <v-checkbox
        v-model="showPWD"
        :label="`顯示密碼`"
      ></v-checkbox>
      <label @click="goToForgetPWD">{{ items.text }}</label>
    </div>
    <div class="text-center">
      <div class="my-4">
        <v-btn
          rounded
          block
          color="primary"
          dark
          @click="login"
        >
          登入
        </v-btn>
      </div>
      <div class="my-4">
        <v-btn
          rounded
          block
          color="green accent-4"
          dark
          @click="lineLogin"
        >
          使用 LINE 登入
        </v-btn>
      </div>
    </div>
    <div class="registerBox">
      <p>還沒有帳號？<label @click="goToRegister">{{ items.registerText }}</label></p>
    </div>
      <v-dialog
      v-model="dialog"
      width="500"
      >
      <v-card>
        <v-card-title class="text-h5 d-flex justify-center">
          {{errorText}}
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
      </v-dialog>
  </v-form>
</template>

<script>
import {
  apiPostLogin,
  apiPostConsultantInfo,
  apiPostLineLoginUrl,
  apiPostLineLogin,
} from '@/api';

export default {
  data() {
    return {
      dialog: false,
      card: {
        cardTitle: '品牌顧問登入',
      },
      textLength: 10,
      showPWD: false,
      data: {
        accountId: '',
        password: '',
      },
      rules: {
        required: (v) => !!v || '請輸入文字。',
        min: (v) => (v && v.length <= this.textLength) || '最多10碼',
        counter: (v) => (v && v.length >= 6 && v.length <= 10) || '密碼必須為6-10位英文+數字。',
        password: (v) => {
          const pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
          return pattern.test(v) || '請填寫正確格式的密碼。';
        },
      },
      items: {
        text: '忘記密碼？',
        registerText: '立即申請',
      },
      errorText: '',
      switchopen: false,
      tableData: {},
      token: '',
    };
  },
  created() {
    this.init();
  },
  methods: {
    goToForgetPWD() {
      this.$router.push({ name: 'ForgetPWD' });
    },
    goToRegister() {
      this.$router.push({ name: 'Register' });
    },
    init() {
      this.urlCheck();
    },
    lineLogin() {
      apiPostLineLoginUrl()
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.$store.dispatch('setLineUrl', res.data.url);
            window.location.href = this.$store.getters.lineUrl;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    login() {
      this.switchopen = false;
      const params = new URLSearchParams();
      params.append('id', this.data.accountId);
      params.append('password', this.data.password);

      apiPostLogin(params)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.switchopen = true;
            this.data.accountId = '';
            this.data.password = '';
            this.$Cookies.set('Token', res.data.auth_token);
            sessionStorage.setItem('refreshToken', res.data.refresh_token);
          } else if (res.data.status_code === 'T013') {
            this.dialog = true;
            this.errorText = '登入資訊錯誤';
          } else if (res.data.status_code === 'T014') {
            this.dialog = true;
            this.errorText = '帳號凍結';
          }
        })
        .then(() => {
          if (!this.switchopen) {
            // empty
          } else {
            this.consultantInfo();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    consultantInfo() {
      this.switchopen = false;
      this.token = this.$Cookies.get('Token');
      apiPostConsultantInfo(this.token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            sessionStorage.setItem('name', res.data.datas.name);
            sessionStorage.setItem('id', res.data.datas.id);
            sessionStorage.setItem('pic', res.data.datas.pic);
            sessionStorage.setItem('data', JSON.stringify(res.data));
          }
        })
        .then(() => {
          this.$router.push({ path: '/home' });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    urlCheck() {
      if (this.$route.query.error !== undefined) {
        this.dialog = true;
        this.errorText = this.$route.query.error_info;
      } else if (this.$route.query.code !== undefined && this.$route.query.state !== undefined) {
        this.$store.dispatch('setLineLoginCode', this.$route.query.code);
        this.$store.dispatch('setLineLoginState', this.$route.query.state);
        const params = new URLSearchParams();
        params.append('state', this.$store.getters.lineLoginCode);
        params.append('code', this.$store.getters.lineLoginState);

        apiPostLineLogin(params)
          .then((res) => {
            if (res.status === 200 && res.data.status_code === 'SUCCESS') {
              this.switchopen = true;
              this.$store.dispatch('setLineLoginCode', '');
              this.$store.dispatch('setLineLoginState', '');
              this.$Cookies.set('Token', res.data.auth_token);
            } else if (res.data.status_code === '未綁定line') {
              this.dialog = true;
              this.errorText = '未綁定 Line';
            }
          })
          .then(() => {
            if (!this.switchopen) {
              // empty
            } else {
              this.consultantInfo();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};

</script>

<style lang="scss" scoped>
  .loginToolBox {
    display: flex;
    justify-content: space-between;
    label {
      color: #249dad;
      cursor: pointer;
    }
  }
  .registerBox {
    display: flex;
    justify-content: center;
    font-size: 0.9rem;
      label {
        color: #dc3545;
        cursor: pointer;
        &:hover{color:#a71d2a;}
      }
  }
</style>
