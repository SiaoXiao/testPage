<template>
  <v-sheet
    tile
    class='overflow-y-auto overflow-x-hidden'
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
          <v-card
            color="white"
            elevation="10"
            class="pa-3"
          >
            <v-card-title>
              <div id="qrcode" class="mx-auto"></div>
            </v-card-title>
          <v-card-subtitle
            class="pa-0 my-2 text-center text-subtitle-1"
          >我的 ID：{{qrCodeData.id}}</v-card-subtitle>
          <v-card-subtitle
          id="text"
            class="pa-0 my-2 text-center text-subtitle-1"
          >{{qrCodeData.url}}</v-card-subtitle>
          <v-card-actions>
            <v-btn
              block
              rounded
              depressed
              color="primary"
              ref="copyButton"
              @click="copy"
            >
              複製連結
            </v-btn>
          </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { apiPostRecommend } from '@/api';
import QRCode from 'qrcodejs2';

export default {
  data: () => ({
    isLoad: false,
    qrCodeData: {
      id: '',
      url: '',
    },
  }),

  created() {
    this.init();
  },

  methods: {
    init() {
      this.$store.dispatch('setToken', this.$Cookies.get('Token'));
      this.qrCodeData.id = sessionStorage.getItem('id');
      this.recommend();
    },
    backHistory() {
      this.$router.go(-1);
    },
    recommend() {
      const { token } = this.$store.getters;

      apiPostRecommend(token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.qrCodeData.url = res.data.reg_url;
          }
          this.$nextTick(() => {
            this.qrcode();
            this.isLoad = true;
          });
        }).catch((error) => {
          console.log(error);
        });
    },
    copy() {
      const str = document.querySelector('#text');
      window.getSelection().selectAllChildren(str);
      document.execCommand('Copy');
    },
    qrcode() {
      const qrcode = new QRCode('qrcode', {
        text: this.qrCodeData.url,
        width: 200,
        height: 200,
        colorDark: '#000',
        colorLight: '#fff',
        correctLevel: QRCode.CorrectLevel.H,
      });
      return qrcode;
    },
  },
};

</script>
