<template>
  <v-sheet
    tile
    class='overflow-y-auto overflow-x-hidden px-3'
    max-height="800px"
    shrink-on-scroll
  >
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-container>
        <v-row dense>
          <v-icon large @click="backHistory">mdi-chevron-left</v-icon>
          <v-col cols="12">
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>銀行名稱</div>
            </div>
            <v-select
              v-model="data.bank"
              :items="banksData"
              item-text="name"
              item-value="bank_code"
              label="請選擇銀行"
              return-object
              single-line
              solo
              @change="getBankInfoBranchCode(data.bank.bank_code)"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>銀行分行名稱</div>
            </div>
            <v-select
              v-model="data.bankInfoBranch"
              :items="bankBranchData"
              item-text="name"
              item-value="bank_branch_code"
              label="請選擇分行"
              no-data-text="請先選擇銀行"
              return-object
              single-line
              solo
            ></v-select>
          </v-col>
          <v-col cols="12">
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>銀行帳號</div>
            </div>
              <v-text-field
                v-model="data.BalanceId"
                :rules="[rules.required]"
                required
              ></v-text-field>
          </v-col>
          <v-col cols="12">
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>銀行戶名</div>
            </div>
              <v-text-field
                v-model="data.name"
                :rules="[rules.required]"
                required
              ></v-text-field>
          </v-col>
          <v-col cols="12">
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>銀行存摺</div>
            </div>
            <form>
              <div class="form-group">
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/bmp"
                  @change="previewImage"
                  class="form-control-file"
                >
                <div class="pa-2 mt-3">
                  <template v-if="preview">
                    <img :src="preview" class="img-fluid" />
                  </template>
                </div>
              </div>
            </form>
          </v-col>
          <v-btn
            rounded
            block
            color="primary"
            class="my-4"
            :disabled="!valid"
            @click="addConsultantBalance"
            v-if="!modifyBank"
          >
            送出
          </v-btn>
          <v-btn
            rounded
            block
            color="primary"
            class="my-4"
            :disabled="!valid"
            @click="updateConsultantBalance"
            v-if="modifyBank"
          >
            修改
          </v-btn>
          <v-col cols="12">
            <div class="" style="height: 100px"></div>
          </v-col>
        </v-row>
      </v-container>
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
  </v-sheet>
</template>

<script>
import {
  apiPostGetBankInfo,
  apiPostGetBankInfoBranchCode,
  apiPostAddConsultantBalance,
  apiPostUpdateConsultantBalance,
} from '@/api';

export default {
  data: () => ({
    valid: true,
    dialog: false,
    dialogText: '',
    data: {
      bank: {},
      bankInfoBranch: {},
      BalanceId: '',
      name: '',
      image: null,
    },
    banksData: [],
    bankBranchData: [],
    rules: {
      required: (v) => !!v || '* 必須輸入。',
      imageSize: (v) => !v || v.size < 3000000 || '照片檔案請小於 3 MB!',
    },
    preview: null,
    modifyBank: null,
    token: '',
    timer: null,
    timer2: null,
  }),
  created() {
    this.init();
  },
  methods: {
    init() {
      if (sessionStorage.getItem('modifyBank') !== null) {
        this.modifyBank = true;
      }

      this.token = this.$Cookies.get('Token');
      this.getBankInfo();
    },
    backHistory() {
      this.$router.go(-1);
    },
    getBankInfo() {
      apiPostGetBankInfo(this.token)
        .then((res) => {
          if (res.status === 200 && res.data.length !== 0) {
            this.banksData = res.data;
          }
        }).catch((error) => {
          console.log(error);
        });
    },
    getBankInfoBranchCode(val) {
      const params = new URLSearchParams();
      params.append('code', val);
      apiPostGetBankInfoBranchCode(params, this.token)
        .then((res) => {
          if (res.status === 200 && res.data.length !== 0) {
            this.bankBranchData = res.data;
          }
        }).catch((error) => {
          console.log(error);
        });
    },
    addConsultantBalance() {
      if (this.$refs.form.validate()) {
        const params = new FormData();
        params.append('BalanceName', this.data.bank.name);
        params.append('BalanceNo', this.data.bank.bank_code);
        params.append('BalanceHome', this.data.bankInfoBranch.name);
        params.append('BalanceHomeId', this.data.bankInfoBranch.bank_branch_code);
        params.append('BalanceId', this.data.BalanceId);
        params.append('UsernameBalance', this.data.name);
        params.append('ImgBalance', this.data.image);

        apiPostAddConsultantBalance(params, this.token)
          .then((res) => {
            if (res.status === 200 && res.data.status_code === 'SUCCESS') {
              this.dialogText = '資料已送出';
              this.dialog = true;
              this.timer = setTimeout(() => {
                this.$router.push({ name: 'BankAccount' });
              }, 3000);
            } else if (res.status === 200 && res.data.status_code === '圖片沒接到') {
              this.dialogText = '請上傳存摺照片';
              this.dialog = true;
            } else {
              this.dialogText = res.data.status_code;
              this.dialog = true;
            }
          }).catch((error) => {
            console.log(error);
          });
      }
    },
    updateConsultantBalance() {
      if (this.$refs.form.validate()) {
        const params = new FormData();
        params.append('BalanceName', this.data.bank.name);
        params.append('BalanceNo', this.data.bank.bank_code);
        params.append('BalanceHome', this.data.bankInfoBranch.name);
        params.append('BalanceHomeId', this.data.bankInfoBranch.bank_branch_code);
        params.append('BalanceId', this.data.BalanceId);
        params.append('UsernameBalance', this.data.name);
        params.append('ImgBalance', this.data.image);

        apiPostUpdateConsultantBalance(params, this.token)
          .then((res) => {
            if (res.status === 200 && res.data.status_code === 'SUCCESS') {
              this.dialogText = '資料已送出';
              this.dialog = true;
              this.timer2 = setTimeout(() => {
                this.$router.push({ name: 'BankAccount' });
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
    previewImage(event) {
      const input = event.target;
      if (input.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        // eslint-disable-next-line prefer-destructuring
        this.data.image = input.files[0];
        reader.readAsDataURL(this.data.image);
      }
    },
    destroyed() {
      clearTimeout(this.timer);
      clearTimeout(this.timer2);
    },
  },

};

</script>

<style lang="scss" scoped>
    span {
    color: #F44336;
    padding-right: 5px;
  }
  .img-fluid {
    @media (max-width: 1264px) {
      max-width: 400px;
    }
    @media (max-width: 960) {
      max-width: 300px;
    }
    @media (max-width: 600px) {
      max-width: 200px;
    }
  }
</style>
