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
        <v-col cols="12" class="mb-3">
          <v-card
            class="d-flex justify-space-around"
            color="white"
            elevation="10"
          >
          <div>
            <v-card-title
              class="body-2 d-flex justify-center pb-1">{{bonusTitle.title}}</v-card-title>
            <p class="text-center">{{ bonuSdata.extraBonus }}</p>
          </div>
          <div>
            <v-card-title
              class="body-2 d-flex justify-center pb-1">{{bonusTitle.title_2}}</v-card-title>
            <p class="text-center">{{ bonuSdata.advertiseBonus }}</p>
          </div>
          <div>
            <v-card-title
              class="body-2 d-flex justify-center pb-1">{{bonusTitle.title_3}}</v-card-title>
            <p class="text-center">{{ bonuSdata.onlineBonus }}</p>
          </div>
          </v-card>
        </v-col>
        <v-col cols="12">
          <div class="d-flex justify-space-between mb-1">
              <v-container bg fill-height grid-list-md text-xs-center>
              <v-layout row wrap align-center>
                <v-flex>
                  {{objItemsText[1].title}}
                </v-flex>
              </v-layout>
            </v-container>
            <div class="d-flex">
              <v-select
                class="mr-2"
                v-model="bonuSdata.bonusKind"
                :items="bonusKind"
                item-text="state"
                item-value="code"
                label="請選擇分類"
                return-object
                single-line
                solo
                @change="getBonusDetailFilterList"
              ></v-select>
              <v-select
                v-model="bonuSdata.seachTime"
                :items="sheachDate"
                label="請選擇時間"
                single-line
                solo
                @change="getBonusDetailFilterList"
              ></v-select>
            </div>
          </div>
          <v-card
            color="white"
            elevation="10"
            outlined
            class="d-flex justify-space-between px-3 py-3 mb-6"
            v-for="list in bonuSdata.list"
            :key="list.time_create"
          >
          <div>
            <div class="contentTag d-inline-block px-2">{{stateReplace(list.bonus_kind)}}</div>
            <v-card-title class="text-subtitle-1 px-1 py-1">{{list.customer_name}}</v-card-title>
            <v-card-subtitle class="pa-0 mt-0">{{timeReplace(list.time_create)}}</v-card-subtitle>
            <v-card-subtitle class="pa-0">備註：{{list.momo}}</v-card-subtitle>
          </div>
          <div>
            <v-card-title
              class="text-subtitle-1 pa-0"
              :class="Math.sign(list.balance) === 1 ?'green--text' : 'red--text'"
            >
              {{list.balance}}
            </v-card-title>
          </div>
          </v-card>

        </v-col>
        <v-col cols="12" class="my-5" v-if="bonuSdata.list.length == undefined">
          <div
            class="d-flex text-h4 blue-grey--text flex-column align-center"
          >
            <v-icon x-large class="mb-3">mdi-clipboard-text-search-outline</v-icon>
            尚無獎金資料
          </div>
        </v-col>
        <v-col cols="12" class="my-5" v-if="bonuSdata.list.length == 0">
          <div
            class="d-flex text-h4 blue-grey--text flex-column align-center"
          >
            <v-icon x-large class="mb-3">mdi-clipboard-text-search-outline</v-icon>
            尚無獎金資料
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
import {
  apiPostGetBonusDetailList,
  apiPostGetBonusDetailFilterList,
} from '@/api';

export default {
  data: () => ({
    isLoad: false,
    bonusTitle: {
      title: '額外獎勵',
      title_2: '導購獎金',
      title_3: '徵員分紅',
    },
    objItemsText: [
      {
        title: '行程表',
        link: '查看所有行程',
        noContentText: '暫無行程',
      },
      {
        title: '獎金紀錄',
        link: '查看所有公告',
        noContentText: '暫無公告',
      },
    ],
    token: '',
    bonuSdata: {
      extraBonus: 0,
      advertiseBonus: 0,
      onlineBonus: 0,
      list: {},
      bonusKind: '',
      seachTime: '',
    },
    bonusKind: [
      { state: '選擇分類', code: '' },
      { state: '廣告機抽成', code: 'ST01' },
      { state: '上限抽成', code: 'ST02' },
      { state: '提領扣錢', code: 'ST03' },
      { state: '取消提領加回去', code: 'ST04' },
    ],
    sheachDate: [],
  }),

  created() {
    this.init();
  },

  methods: {
    init() {
      this.$store.dispatch('setToken', this.$Cookies.get('Token'));
      this.getBonusData();
    },
    timeReplace(val) {
      const time = /T/gi;
      return val.replace(time, ' ').split('.')[0];
    },
    stateReplace(val) {
      let bonusKind = '';
      if (val === 'ST01') {
        bonusKind = '廣告機抽成';
      } else if (val === 'ST02') {
        bonusKind = '上限抽成';
      } else if (val === 'ST03') {
        bonusKind = '提領扣錢';
      } else if (val === 'ST04') {
        bonusKind = '取消提領加回去';
      } else {
        bonusKind = '其它';
      }
      return bonusKind;
    },
    getBonusData() {
      const { token } = this.$store.getters;
      apiPostGetBonusDetailList(token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            sessionStorage.setItem('bonus', res.data.withdraw_bonus);
            this.bonuSdata.extraBonus = res.data.extra_bonus;
            this.bonuSdata.advertiseBonus = res.data.advertise_bonus;
            this.bonuSdata.onlineBonus = res.data.online_bonus;
            this.bonuSdata.list = res.data.datas;
            res.data.datas.forEach((item) => {
              this.sheachDate.push(item.time_create.slice(0, 7));
            });
            this.sheachDate = Array.from(new Set([...this.sheachDate]));
            this.sheachDate.sort((a, b) => {
              const time1 = new Date(Date.parse(a.replace(/-/g, '/')));
              const time2 = new Date(Date.parse(b.replace(/-/g, '/')));

              return time1.getTime() - time2.getTime();
            });
          }
          this.$nextTick(() => {
            this.isLoad = true;
          });
        }).catch((error) => {
          console.log(error);
        });
    },
    getBonusDetailFilterList() {
      this.isLoad = false;
      const { token } = this.$store.getters;
      const params = new URLSearchParams();

      if (this.bonuSdata.bonusKind.code !== undefined
        && this.bonuSdata.seachTime !== ''
        && this.bonuSdata.seachTime !== null) {
        params.append('kind', this.bonuSdata.bonusKind.code);
      }

      if (this.bonuSdata.seachTime !== undefined
        && this.bonuSdata.seachTime !== ''
        && this.bonuSdata.seachTime !== null) {
        params.append('time', this.bonuSdata.seachTime);
      }

      apiPostGetBonusDetailFilterList(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.bonuSdata.list = {};
            this.bonuSdata.list = res.data.datas;
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
  p {
    color: #000;
  }
  .router-link-active {
    color: #9a9a9a;
  }
  .contentTag{
    color: #0d4182;
    border: 1px solid #0d4182;
    text-align: center;
    border-radius: 5px;
  }
</style>
