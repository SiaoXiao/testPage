<template>
  <v-container>
    <v-icon large @click="backHistory">mdi-chevron-left</v-icon>
    <v-form
      class="px-3"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <div class="my-1 text-body-2"><span>*</span>舊登入密碼</div>
      <v-text-field
        v-model="data.oldPWD"
        :rules="[rules.counter, rules.password,rules.required]"
        type="password"
        :counter="textLength"
        label="請輸入舊登入密碼"
        outlined
        clearable
        class="input-group--focused"
      ></v-text-field>
      <div class="my-1 text-body-2"><span>*</span>新登入密碼</div>
      <v-text-field
        v-model="data.newPWD"
        :rules="[rules.required, rules.counter, rules.password]"
        :type="showPWD ? 'text' : 'password'"
        :counter="textLength"
        label="請輸入新登入密碼"
        outlined
        clearable
        class="input-group--focused"
        @click:append="showPWD = !showPWD"
      ></v-text-field>
      <div class="my-1 text-body-2"><span>*</span>確認新登入密碼</div>
      <v-text-field
        v-model="data.checkNewPWD"
        :rules="[rules.required, rules.counter, rules.password]"
        :type="showPWD ? 'text' : 'password'"
        :counter="textLength"
        label="請再次輸入新登入密碼"
        outlined
        clearable
        class="input-group--focused"
        @click:append="showPWD = !showPWD"
      ></v-text-field>
      <v-checkbox
        v-model="showPWD"
        :label="`顯示密碼`"
      ></v-checkbox>
      <v-btn
        rounded
        block
        color="primary"
        class="my-4"
        :disabled="!valid"
        @click="resetMyPassword"
      >
        送出
      </v-btn>
    </v-form>
    <v-dialog
      v-model="dialog"
      width="500"
    >
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
    </v-dialog>
  </v-container>
</template>

<script>
import { apiPostSaveMyPassword } from '@/api';

export default {
  data: () => ({
    valid: true,
    dialog: false,
    dialogText: '',
    showPWD: false,
    textLength: 10,
    data: {
      oldPWD: '',
      newPWD: '',
      checkNewPWD: '',
    },
    rules: {
      required: (v) => !!v || '* 必須輸入。',
      counter: (v) => (v && v.length >= 6 && v.length <= 10) || '密碼必須為6-10位英文+數字。',
      password: (v) => {
        const pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
        return pattern.test(v) || '請填寫正確格式的密碼。';
      },
    },
    timer: null,
  }),

  methods: {
    backHistory() {
      this.$router.go(-1);
    },
    resetMyPassword() {
      if (this.$refs.form.validate()) {
        const token = this.$Cookies.get('Token');
        const params = new URLSearchParams();
        params.append('oriPwd', this.data.oldPWD);
        params.append('newPwd', this.data.newPWD);
        params.append('chkPwd', this.data.checkNewPWD);

        apiPostSaveMyPassword(params, token)
          .then((res) => {
            if (res.status === 200 && res.data.status_code === 'SUCCESS') {
              this.data.oldPWD = '';
              this.data.newPWD = '';
              this.data.checkNewPWD = '';
              this.dialogText = '修改密碼成功';
              this.dialog = true;
              this.timer = setTimeout(() => {
                this.$router.go(-1);
              }, 3000);
            } else {
              this.dialogText = res.data.status_code;
              this.dialog = true;
            }
          }).catch((error) => {
            console.log(error);
          });
      }
    },
    destroyed() {
      clearTimeout(this.timer);
    },
  },
};

</script>

<style lang="scss" scoped>
    span {
    color: #F44336;
    padding-right: 5px;
  }
</style>
