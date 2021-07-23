<template>
  <v-container>
    <v-row dense class="ma-auto">
      <v-icon large @click="backHistory">mdi-chevron-left</v-icon>
      <v-col cols="12" class="my-5">
        <sign-canvas class="sign-canvas" ref="SignCanvas" :options="options" v-model="value" />
        <img class="view-image d-none" :src="value" width="150" height="150" />
      </v-col>
      <v-col cols="12" class="my-5 d-flex justify-center">
        <v-btn class="mr-15" @click="canvasClear">清空</v-btn>
        <v-btn @click="saveAsImg" color="primary">
          送出
        </v-btn>
      </v-col>
      <v-col cols="12">
        <div style="height: 100px"></div>
      </v-col>
    </v-row>
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
import { apiPostSingatureMyReportasync } from '@/api';

export default {
  data: () => ({
    value: null,
    dialog: false,
    dialogText: '',
    options: {
      isDpr: false,
      lastWriteSpeed: 1,
      lastWriteWidth: 2,
      lineCap: 'round',
      lineJoin: 'bevel',
      canvasWidth: 350,
      canvasHeight: 500,
      isShowBorder: false,
      bgColor: '#cccccc',
      borderWidth: 1,
      borderColor: '#000000',
      writeWidth: 5,
      maxWriteWidth: 30,
      minWriteWidth: 5,
      writeColor: '#101010',
      isSign: true,
      imgType: 'png',
    },
    contractNo: '',
    timer: null,
  }),

  created() {
    this.init();
  },

  methods: {
    init() {
      this.getData = JSON.parse(sessionStorage.getItem('Cdata'));
      this.contractNo = this.getData.contract_no;
    },
    backHistory() {
      this.$router.go(-1);
    },
    canvasClear() {
      this.$refs.SignCanvas.canvasClear();
    },
    saveAsImg() {
      const img = this.$refs.SignCanvas.saveAsImg();
      const base64ImageContent = img.replace(/^data:image\/(png|jpg);base64,/, '');
      const blob = this.base64ToBlob(base64ImageContent, 'image/png');
      const token = this.$Cookies.get('Token');
      const params = new FormData();
      params.append('attachPic', blob, 'signaturePad.png');
      params.append('contractno', this.contractNo);

      apiPostSingatureMyReportasync(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.dialog = true;
            this.dialogText = '新增簽名成功';
            this.timer = setTimeout(() => {
              this.$router.go(-1);
            }, 3000);
          } else {
            this.dialog = true;
            this.dialogText = res.data.status_code;
            this.timer = setTimeout(() => {
              this.$router.go(-1);
            }, 3000);
          }
        }).catch((error) => {
          console.log(error);
        });
    },

    base64ToBlob(base64, mime) {
      mime = mime || '';
      const sliceSize = 1024;
      const byteChars = window.atob(base64);
      const byteArrays = [];

      for (let offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
        const slice = byteChars.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i += 1) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
      }

      return new Blob(byteArrays, { type: mime });
    },
  },

  destroyed() {
    clearTimeout(this.timer);
  },
};
</script>

<style lang="scss" scoped>
    .sign-canvas {
        display: block;
        margin: 20px auto;
    }
</style>
