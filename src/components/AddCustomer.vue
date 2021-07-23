<template>
  <v-sheet
    tile
    class='overflow-y-auto overflow-x-hidden scrollbarNone'
    max-height="800px"
    shrink-on-scroll
  >
    <v-container>
      <v-row dense>
        <v-icon large @click="backHistory">mdi-chevron-left</v-icon>
        <v-col cols="12" class="my-5">
          <v-form
            class="px-3"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>客戶 (店名) 名稱</div>
            </div>
            <v-text-field
              v-model="AddCustomerData.shopName"
              :rules="[rules.required]"
              type="text"
              label="請輸入客戶名稱"
              required
              outlined
            ></v-text-field>
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>聯繫電話(手機)</div>
            </div>
            <v-text-field
              v-model="AddCustomerData.phone"
              :rules="[rules.required, rules.moblie]"
              label="請輸入聯繫電話"
              required
              outlined
            ></v-text-field>
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>窗口姓名</div>
            </div>
            <v-text-field
              v-model="AddCustomerData.contactPerson"
              :rules="[rules.required, rules.nameCheck]"
              label="請輸入窗口姓名"
              required
              outlined
            ></v-text-field>
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>地址</div>
            </div>
            <v-col cols="12" class="d-flex pa-0">
              <v-col sm="6" class="py-0 px-2">
                  <v-select
                  v-model="AddCustomerData.city"
                  :items="cityItems"
                  label="請選擇"
                  no-data-text="請選擇縣市"
                  single-line
                  required
                  solo
                  @change="getAreaIngo(AddCustomerData.city)"
                ></v-select>
              </v-col>
              <v-col sm="6" class="py-0 px-2">
                <v-select
                  v-model="AddCustomerData.area"
                  :items="areaItems"
                  label="請選擇"
                  no-data-text="請先選擇縣市"
                  single-line
                  solo
                ></v-select>
              </v-col>
            </v-col>
            <v-text-field
              v-model="AddCustomerData.address"
              :rules="[rules.required]"
              label="請輸入地址"
              required
              outlined
            ></v-text-field>
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>統一編號</div>
            </div>
            <v-text-field
              v-model="AddCustomerData.taxIDnumber"
              :rules="[rules.required]"
              label="請輸入統一編號(若無填身分證)"
              required
              outlined
            ></v-text-field>
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>店家分類</div>
            </div>
            <v-select
              v-model="AddCustomerData.label"
              :items="StoreItems"
              item-text="state"
              label="請選擇店家分類"
              required
              single-line
              solo
            ></v-select>
            <div class="d-flex justify-space-between mb-1">
              <div class="my-1 text-body-2"><span>*</span>客戶 Line ID</div>
            </div>
            <v-text-field
              v-model="AddCustomerData.lineID"
              :rules="[rules.required]"
              label="請輸入客戶 Line ID"
              required
              outlined
            ></v-text-field>
            <v-btn
              rounded
              block
              color="primary"
              class="my-4"
              :disabled="!valid"
              @click="getAllProductLabel"
            >
              送出
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
  apiPostAddCustomer,
  apiPostGetTaiwanAreaInfo,
} from '@/api';

export default {
  data: () => ({
    valid: true,
    token: '',
    dialog: false,
    dialogText: '',
    AddCustomerData: {
      shopName: '',
      phone: '',
      contactPerson: '',
      city: '',
      area: '',
      address: '',
      taxIDnumber: '',
      label: '',
      lineID: '',
    },
    rules: {
      required: (v) => !!v || '請輸入文字。',
      nameCheck: (v) => (v && v.length <= 5) || '名字不得超過5個字。',
      moblie: (v) => /^09[0-9]{8}$/.test(v) || '請輸入正確的手機號碼。',
    },
    resData: {},
    cityItems: [],
    areaItems: [],
    StoreItems: [
      { state: '食' },
      { state: '衣' },
      { state: '住' },
      { state: '行' },
      { state: '娛樂' },
    ],
    timer: null,
  }),
  created() {
    this.init();
  },
  methods: {
    init() {
      this.token = this.$Cookies.get('Token');
      this.getTaiwanAreaInfo();
    },
    backHistory() {
      this.$router.go(-1);
    },
    getTaiwanAreaInfo() {
      apiPostGetTaiwanAreaInfo(this.token)
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
      this.areaItems = [];
      this.resData.forEach((item) => {
        if (item.city === val) {
          item.area_data.forEach((items) => {
            this.areaItems.push(items.area);
          });
        }
      });
    },
    getAllProductLabel() {
      if (this.$refs.form.validate()) {
        const params = new URLSearchParams();
        params.append('name', this.AddCustomerData.shopName);
        params.append('phoneNo', this.AddCustomerData.phone);
        params.append('contactWindow', this.AddCustomerData.contactPerson);
        params.append('city', this.AddCustomerData.city);
        params.append('area', this.AddCustomerData.area);
        params.append('address', this.AddCustomerData.address);
        params.append('uniformNumber', this.AddCustomerData.taxIDnumber);
        params.append('label', this.AddCustomerData.label);
        params.append('lineId', this.AddCustomerData.lineID);
        apiPostAddCustomer(params, this.token)
          .then((res) => {
            if (res.status === 200 && res.data.status_code === 'SUCCESS') {
              this.dialog = true;
              this.dialogText = '新增客戶成功';
              this.timer = setTimeout(() => {
                this.$router.push({ name: 'Homepage' });
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
