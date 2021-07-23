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
        <v-card>
          <div class="d-flex justify-space-between">
            <div class="pa-4">
              <v-img height="60" width="200" contain src="../assets/img/logo.png"></v-img>
            </div>
            <v-card-text>
              <p class="mb-0 text-right body-2 fz-c">{{contractData.companyName}}</p>
              <p class="mb-0 text-right body-2 fz-c">{{contractData.address}}</p>
              <p
                class="mb-0 text-right body-2 fz-c"
              >Tel:{{contractData.tel}}&emsp;Fax:{{contractData.fax}}</p>
            </v-card-text>
          </div>
          <v-card-title class="justify-center pb-0">廣告機租借合約</v-card-title>
          <v-card-title
            class="justify-center pa-0 body-1"
          >{{contractData.companyName}}</v-card-title>
            <v-card-text>
              <div>立合約人：</div>
              <div>租借方:{{contractData.companyName}}(以下簡稱甲方)</div>
              <div>借用方:
                <input type="text" :value="contractData.lessee" readonly>
                 (以下簡稱乙方)</div>
              <br>
              <div>茲就乙方成為甲方授權之IFALINK共享商圈店家，雙方簽署【共享商圈點協議書】後，
                乙方須向甲方租用甲方指定或同意且顯示「IFALINK」字樣之廣告用機台(如平板電腦、廣告機等，
                依甲方提供之機台為準，以下簡稱為「機台」)等事宜，雙方特議定此租借合約 以資共同遵守。
              </div>
              <br>
              <div>雙方合意約定事項:</div>
              <div>1.雙方首次簽約後，乙方須待甲方 1個月的機台準備期，準備期間乙方有權隨時終止合約。</div>
              <div>2.機台押金為新台幣$ {{contractData.money}}元整。</div>
              <div>3.雙方簽約後，乙方應於3日內將押金匯入甲方指定帳號。</div>
              <div>4.前項之甲方指定帳號為:</div>
              <div>銀行：{{contractData.bankName}}</div>
              <div>銀行代號：{{contractData.bankNo}}</div>
              <div>分行：{{contractData.bankHome}}</div>
              <div>戶名：{{contractData.companyName}}</div>
              <div>帳戶：{{contractData.account}}</div>
              <div>手機 :{{contractData.phone}}</div>
              <div>5.機台使用之電費、網路費等相關費用由乙方負擔。</div>
              <div>6.除本協議另有約定外，於合約期間屆滿日前 60 日，若雙方均未以書面向他方提出終止本協議與共享商圈點協議書或要求另訂新約，
                雙方同意依本協議內容自動續約一年，不另訂新約，嗣後亦同。
              </div>
              <div>7.若機台有遺失、損毀，視情況從押金中扣除</div>
              <div>8.乙方不得將機台做甲方指定以外之其他用途使用。</div>
              <div>9.若雙方簽署之共享商圈店家協議書終止，此合約將一併終止。</div>
              <div>10.若雙方提前終止合約，甲方於3日內將押金退還予乙方。</div>
              <div>11.如有涉訴 雙方約定以台北地方法院為第一審管轄法院</div>
              <br>
              <div>立合約人:</div>
              <div>出借人(甲方)：{{contractData.companyName}}</div>
              <div>負責人：{{contractData.principal}}</div>
              <div>地址：{{contractData.address}}</div>
              <div>統一編號：{{contractData.taxIDnumber}}</div>
              <br>
              <div>借用人(乙方)：{{contractData.lessee}}</div>
              <div v-if="contractData.img === ''">負責人(簽名)：
                <router-link to="signature">簽名</router-link>
              </div>
              <div v-if="contractData.img !== ''">負責人(簽名)：
                <img
                  height="200"
                  :src="contractData.img"
                  alt="signature"
                >
              </div>
              <div>地址：{{contractData.lesseeAddress}}</div>
              <div>統一編號：{{contractData.lesseeTaxIDnumber}}</div>
            </v-card-text>
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
import { apiPostGetMyReport } from '@/api';

export default {
  data: () => ({
    isLoad: true,
    contractData: {
      companyName: '秒創易科技股份有限公司',
      principal: '劉育翔',
      address: '台北市中山區中山北路二段8號4F',
      account: '200540261808',
      bankName: '中國信託銀行',
      bankNo: '822',
      bankHome: '南京東路分行',
      phone: '0912345678',
      taxIDnumber: '83095761',
      tel: '02-2511-1068',
      fax: '02-2511-1176',
      money: '8000',
      lessee: '',
      lesseeAddress: '',
      lesseeTaxIDnumber: '',
      contractNo: '',
      img: '',
    },
    getData: {},
  }),

  created() {
    this.init();
  },

  methods: {
    init() {
      this.getData = JSON.parse(sessionStorage.getItem('Cdata'));
      this.contractData.lessee = this.getData.contact_window;
      this.contractData.lesseeAddress = `${this.getData.city}${this.getData.area}${this.getData.address}`;
      this.contractData.lesseeTaxIDnumber = this.getData.uniform_number;
      this.contractData.contractNo = this.getData.contract_no;
      this.getMyReport(this.getData.contract_no);
    },
    backHistory() {
      this.$router.go(-1);
    },
    getMyReport(id) {
      const token = this.$Cookies.get('Token');
      const params = new URLSearchParams();
      params.append('contractno', id);

      return apiPostGetMyReport(params, token)
        .then((res) => {
          this.contractData.img = res.data.singature_img;
        }).catch((error) => {
          console.log(error);
        });
    },
  },
};

</script>

<style lang="scss" scoped>
  .fz-c{
    color: rgb(13, 65, 130);
  }
</style>
