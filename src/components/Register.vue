<template>
    <v-sheet
      tile
      class='overflow-y-auto overflow-x-hidden scrollbarNone'
      max-height="600px"
    >
      <v-icon large class="mb-3" @click="backHistory">mdi-chevron-left</v-icon>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <div class="my-1 text-body-2"><span>*</span>推薦碼</div>
        <v-text-field
          v-model="data.promotionCode"
          label="請輸入推薦碼"
          required
          :rules="[rules.required]"
          outlined
          clearable
        ></v-text-field>
        <div class="my-1 text-body-2"><span>*</span>姓名</div>
        <v-text-field
          v-model="data.userName"
          :rules="[rules.required, rules.nameCheck]"
          label="請輸入姓名"
          required
          outlined
          clearable
        ></v-text-field>
        <div class="my-1 text-body-2"><span>*</span>電話號碼</div>
          <v-text-field
              v-model="data.phoneNumber"
              :counter="10"
              :rules="[rules.required, rules.moblie]"
              label="請輸入手機號碼"
              required
              outlined
              clearable
            ></v-text-field>
        <div class="my-1 text-body-2"><span>*</span>E-mail</div>
        <v-text-field
          v-model="data.email"
          :rules="[rules.required, rules.emailValidCheck]"
          label="請輸入E-mail"
          required
          outlined
          clearable
        ></v-text-field>
        <div class="my-1 text-body-2"><span>*</span>身分證字號</div>
          <v-text-field
          v-model="data.IDnumber"
          :rules="[rules.required, rules.IDnumberCheck]"
          label="請輸入身分證字號"
          required
          outlined
          clearable
        ></v-text-field>
        <div class="my-1 text-body-2"><span>*</span>密碼</div>
          <v-text-field
          v-model="data.password"
          :rules="[rules.required, rules.counter, rules.password]"
          label="請輸入密碼"
          required
          outlined
          clearable
        ></v-text-field>
        <div class="my-1 text-body-2"><span>*</span>再輸入一次密碼</div>
          <v-text-field
          v-model="data.checkPassword"
          :rules="[rules.required, rules.counter, rules.password]"
          label="請再輸入一次密碼"
          required
          outlined
          clearable
        ></v-text-field>
        <div class="my-1 text-body-2"><span>*</span>Line ID</div>
          <v-text-field
          v-model="data.LineID"
          label="請輸入Line ID"
          outlined
          :rules="[rules.required]"
          required
          clearable
        ></v-text-field>
        <div class="my-1 text-body-2"><span>*</span>名片 (含輔銷工具及加盟金)</div>
          <v-radio-group
          v-model="data.bussinessCard"
          mandatory
          row
        >
          <v-radio
            label="2000元，印製名片"
            value="U"
          ></v-radio>
          <v-radio
            label="2000元，不印製名片，並將名片費用轉到輔銷工具"
            value="I"
          ></v-radio>
        </v-radio-group>
        <div class="my-1 text-body-2"><span>*</span>付款方式</div>
          <v-radio-group
          v-model="data.payment"
          mandatory
          row
        >
          <v-radio
            label="信用卡"
            value="C"
          ></v-radio>
          <v-radio
            label="轉帳"
            value="T"
          ></v-radio>
        </v-radio-group>
        <v-file-input
          v-model="data.transferPic"
          accept="image/png, image/jpeg, image/bmp"
          label="請選擇檔案"
          :rules="[rules.imageSize]"
          outlined
          dense
          show-size
          prepend-icon="mdi-camera"
        ></v-file-input>
        <v-checkbox
          :rules="[v => !!v || '您必須同意業務服務合同']"
          label="同意業務服務合約"
          required
          class="checkBoxColor"
        ></v-checkbox>

        <v-btn
          rounded
          block
          color="primary"
          class="my-4"
          :disabled="!valid"
          @click="registered"
        >
          下一步
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
      <div class="d-none" v-html="payPageData"></div>
    </v-sheet>
</template>

<script>
import { apiPostAddConsultant } from '@/api';

export default {
  data() {
    return {
      data: {
        promotionCode: 'Xcoi3mns',
        userName: '123',
        phoneNumber: '0912345678',
        email: '123@gmail.com',
        IDnumber: 'a123456789',
        password: 'a123456',
        checkPassword: 'a123456',
        LineID: '123',
        bussinessCard: null,
        payment: null,
        transferPic: null,
      },
      valid: true,
      dialog: false,
      dialogText: '',
      payPageData: '',
      timer: null,
      rules: {
        required: (v) => !!v || '* 必須輸入。',
        nameCheck: (v) => (v && v.length <= 5) || '名字不得超過5個字。',
        emailValidCheck: (v) => /.+@.+\..+/.test(v) || 'E-mail 必須是有效的。',
        moblie: (v) => /^09[0-9]{8}$/.test(v) || '請輸入正確的手機號碼。',
        IDnumberCheck: (v) => /^[A-Za-z][12]\d{8}$/.test(v) || '請輸入身分證字號。',
        counter: (v) => (v && v.length >= 6 && v.length <= 10) || '密碼必須為6-10位英文+數字。',
        password: (v) => {
          const pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
          return pattern.test(v) || '請填寫正確格式的密碼。';
        },
        imageSize: (v) => !v || v.size < 3000000 || '照片檔案請小於 3 MB!',
      },
    };
  },
  methods: {
    backHistory() {
      this.$router.go(-1);
    },
    registered() {
      console.log(this.payPageData);
      if (this.$refs.form.validate()) {
        const formdata = new FormData();
        formdata.append('promotionCode', this.data.promotionCode);
        formdata.append('userName', this.data.userName);
        formdata.append('phoneNo', this.data.phoneNumber);
        formdata.append('email', this.data.email);
        formdata.append('realidNb', this.data.IDnumber);
        formdata.append('pwd', this.data.password);
        formdata.append('checkPwd', this.data.checkPassword);
        formdata.append('lineId', this.data.LineID);
        formdata.append('bussinessCard', this.data.bussinessCard);
        formdata.append('payment', this.data.payment);
        formdata.append('transferPic', this.data.transferPic);

        apiPostAddConsultant(formdata)
          .then((res) => {
            if (res.status === 200 && res.data.status_code === 'SUCCESS') {
              this.data.promotionCode = '';
              this.data.userName = '';
              this.data.phoneNumber = '';
              this.data.email = '';
              this.data.IDnumber = '';
              this.data.password = '';
              this.data.checkPassword = '';
              this.data.LineID = '';
              this.data.bussinessCard = null;
              this.data.payment = null;
              this.data.transferPic = null;
              this.payPageData = res.data.form;
            } else {
              if (res.data.status_code === 'T046') {
                this.dialogText = '輸入字元數量不正確';
              } else if (res.data.status_code === 'T057') {
                this.dialogText = '註冊兩次密碼不相同';
              } else if (res.data.status_code === 'T006') {
                this.dialogText = '推廣代碼錯誤';
              } else if (res.data.status_code === 'T010') {
                this.dialogText = '手機號碼已被註冊';
              } else {
                this.dialogText = res.data.status_code;
              }
              this.dialog = true;
            }
          }).then(() => {
            if (this.payPageData !== '') {
              const formSubmit = document.getElementById('_form_aiochk');
              this.timer = setTimeout(() => {
                formSubmit.submit();
              }, 300);
            }
          }).catch((error) => {
            console.log(error);
          });
      }
    },
  },
  destroyed() {
    clearTimeout(this.timer);
  },
};
</script>

<style lang="scss" scoped>
    span {
    color: #F44336;
  }
  .checkBoxColor{
    .v-input__control{
      .v-input__slot{
        label{
          color: #F44336;
          &:hover{color:#a71d2a;}
        }
      }
    }
  }
</style>
