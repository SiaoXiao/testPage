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
        <v-col cols="12" class="my-5">
          <v-form
            class="px-3"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>客戶帳號</div>
            </div>
            <v-text-field
              v-model="addContractData.customerAccount"
              :rules="[rules.required]"
              label="請輸入客戶帳號"
              required
              readonly
              outlined
            ></v-text-field>
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>乙方公司名稱</div>
            </div>
            <v-text-field
              v-model="addContractData.companyName"
              :rules="[rules.required]"
              label="請輸入乙方公司名稱"
              required
              outlined
            ></v-text-field>
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>統一編號</div>
            </div>
            <v-text-field
              v-model="addContractData.taxIDnumber"
              :rules="[rules.required]"
              label="請輸入統一編號(若無填身分證)"
              required
              outlined
            ></v-text-field>
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>地址</div>
            </div>
            <v-col cols="12" class="d-flex pa-0">
              <v-col sm="6" class="py-0 px-2">
                  <v-select
                  v-model="addContractData.city"
                  :items="cityItems"
                  label="請選擇"
                  no-data-text="請選擇縣市"
                  single-line
                  required
                  solo
                  @change="getAreaIngo(addContractData.city)"
                ></v-select>
              </v-col>
              <v-col sm="6" class="py-0 px-2">
                <v-select
                  v-model="addContractData.area"
                  :items="areaItems"
                  label="請選擇"
                  no-data-text="請先選擇縣市"
                  single-line
                  solo
                ></v-select>
              </v-col>
            </v-col>
            <v-text-field
              v-model="addContractData.address"
              :rules="[rules.required]"
              label="請輸入地址"
              required
              outlined
            ></v-text-field>
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>聯絡人電話</div>
            </div>
            <v-text-field
              v-model="addContractData.phone"
              :rules="[rules.required, rules.moblie]"
              label="請輸入聯絡人電話"
              required
              outlined
            ></v-text-field>
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>銀行名稱</div>
            </div>
            <v-select
              v-model="addContractData.bank"
              :items="banksData"
              item-text="name"
              item-value="bank_code"
              label="請選擇銀行"
              return-object
              single-line
              solo
              @change="getBankInfoBranchCode(addContractData.bank.bank_code)"
            ></v-select>
              <div class="d-flex justify-space-between mb-1">
                <div class="my-1 text-body-2"><span>*</span>銀行分行名稱</div>
              </div>
              <v-select
                v-model="addContractData.bankInfoBranch"
                :items="bankBranchData"
                item-text="name"
                label="請選擇分行"
                no-data-text="請先選擇銀行"
                return-object
                single-line
                solo
              ></v-select>
              <div class="d-flex justify-space-between mb-1">
                <div class="my-1 text-body-2"><span>*</span>銀行帳號</div>
              </div>
                <v-text-field
                  v-model="addContractData.balanceId"
                  :rules="[rules.required]"
                  required
                ></v-text-field>
              <div class="d-flex justify-space-between mb-1">
                <div class="my-1 text-body-2"><span>*</span>銀行戶名</div>
              </div>
                <v-text-field
                  v-model="addContractData.name"
                  :rules="[rules.required]"
                  required
                ></v-text-field>
            <v-btn
              rounded
              block
              color="primary"
              class="my-4"
              :disabled="!valid"
              @click="modifyContract"
            >
              修改
            </v-btn>
          </v-form>
        </v-col>
        <v-col cols="12">
          <div style="height: 100px"></div>
        </v-col>
      </v-row>
    </v-container>
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
  apiPostGetTaiwanAreaInfo,
  apiPostGetBankInfo,
  apiPostGetBankInfoBranchCode,
  apiPostGetMyReport,
  apiPostAlterContract,
} from '@/api';

export default {
  data: () => ({
    isLoad: false,
    valid: true,
    token: '',
    dialog: false,
    dialogText: '',
    addContractData: {
      customerAccount: '',
      companyName: '',
      taxIDnumber: '',
      city: '',
      area: '',
      address: '',
      phone: '',
      bank: {},
      bankInfoBranch: '',
      balanceId: '',
      name: '',
      contractNo: '',
    },
    rules: {
      required: (v) => !!v || '請輸入文字。',
      nameCheck: (v) => (v && v.length <= 5) || '名字不得超過5個字。',
      moblie: (v) => /^09[0-9]{8}$/.test(v) || '請輸入正確的手機號碼。',
    },
    resData: {},
    cityItems: [],
    areaItems: [],
    banksData: [],
    bankBranchData: [],
    timer: null,
  }),

  created() {
    this.inin();
  },

  methods: {
    async inin() {
      this.token = this.$Cookies.get('Token');
      await this.getMyReport();
      await this.getTaiwanAreaInfo();
      await this.getAreaIngo(this.addContractData.city);
      await this.getBankInfo();
      await this.getBankInfoBranchCode(this.addContractData.bank.bank_code);
    },
    backHistory() {
      this.$router.go(-1);
    },
    getTaiwanAreaInfo() {
      return apiPostGetTaiwanAreaInfo(this.token)
        .then((res) => {
          if (res.status === 200) {
            this.resData = res.data;
            this.resData.forEach((item) => {
              this.cityItems.push(item.city);
            });
          }
        }).catch((error) => {
          console.log(error);
        });
    },
    getAreaIngo(val) {
      return new Promise((resolve) => {
        this.areaItems = [];
        this.resData.forEach((item) => {
          if (item.city === val) {
            item.area_data.forEach((items) => {
              this.areaItems.push(items.area);
            });
          }
        });
        resolve();
      });
    },
    getBankInfo() {
      return apiPostGetBankInfo(this.token)
        .then((res) => {
          if (res.status === 200 && res.data.length !== 0) {
            this.banksData = res.data;
          }
          return res;
        }).catch((error) => {
          console.log(error);
        });
    },
    getBankInfoBranchCode(val) {
      const params = new URLSearchParams();
      params.append('code', val);
      return apiPostGetBankInfoBranchCode(params, this.token)
        .then((res) => {
          if (res.status === 200 && res.data.length !== 0) {
            this.bankBranchData = res.data;
          }
          this.$nextTick(() => {
            this.isLoad = true;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMyReport() {
      const params = new URLSearchParams();
      params.append('contractno', this.$route.params.id);

      return apiPostGetMyReport(params, this.token)
        .then((res) => {
          this.addContractData.customerAccount = res.data.customer_id;
          this.addContractData.companyName = res.data.user_name;
          this.addContractData.taxIDnumber = res.data.number_no;
          this.addContractData.city = res.data.city;
          this.addContractData.area = res.data.area;
          this.addContractData.address = res.data.address;
          this.addContractData.phone = res.data.phone_no;
          this.addContractData.bank.name = res.data.account_name;
          this.addContractData.bank.bank_code = res.data.account_no;
          this.addContractData.bankInfoBranch = res.data.account_home;
          this.addContractData.balanceId = res.data.account_id;
          this.addContractData.name = res.data.account_username;
          this.addContractData.contractNo = res.data.contract_no;
        }).catch((error) => {
          console.log(error);
        });
    },
    modifyContract() {
      if (this.$refs.form.validate()) {
        const params = new URLSearchParams();
        params.append('contractNo', this.addContractData.contractNo);
        params.append('phone', this.addContractData.phone);
        params.append('username', this.addContractData.companyName);
        params.append('acname', this.addContractData.bank.name);
        params.append('acnum', this.addContractData.bank.bank_code);
        params.append('achome', this.addContractData.bankInfoBranch.name);
        params.append('acusername', this.addContractData.name);
        params.append('accountid', this.addContractData.balanceId);
        params.append('numberno', this.addContractData.taxIDnumber);
        params.append('city', this.addContractData.city);
        params.append('area', this.addContractData.area);
        params.append('address', this.addContractData.address);

        apiPostAlterContract(params, this.token)
          .then((res) => {
            if (res.status === 200 && res.data.status_code === 'SUCCESS') {
              this.dialog = true;
              this.dialogText = '修改合約成功';
              this.timer = setTimeout(() => {
                this.$router.go(-1);
              }, 2000);
            } else {
              this.dialog = true;
              this.dialogText = res.data.status_code;
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
