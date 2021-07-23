<template>
  <v-sheet
    tile
    class='overflow-y-auto overflow-x-hidden scrollbarNone'
    max-height="800px"
    shrink-on-scroll
  >
    <v-container>
      <v-row dense class="ma-auto">
        <v-col cols="12" class="my-5">
          <div class="d-flex justify-space-between mb-1">
            <span class="body-2">個人相關</span>
          </div>
          <v-card
            style="height: 180px"
            color="white"
            elevation="10"
            class=""
          >
              <router-link
                to="user/userInfo"
                class="text-decoration-none text-center d-flex justify-space-between px-3"
                style="width:100%; height:45px"
              >
              <div class="d-flex">
                <v-icon>mdi-account-circle-outline</v-icon>
                <p class="body-2 ma-0 ml-2 textLine">個人資料</p>
              </div>
                <v-icon>mdi-chevron-right</v-icon>
              </router-link>
            <v-divider></v-divider>
              <router-link
                to="user/bankAccount"
                class="text-decoration-none text-center d-flex justify-space-between px-3"
                style="width:100%; height:45px"
              >
              <div class="d-flex">
                <v-icon>mdi-wallet-outline</v-icon>
                <p class="body-2 ma-0 ml-2 textLine">銀行帳戶</p>
              </div>
                <v-icon>mdi-chevron-right</v-icon>
              </router-link>
            <v-divider></v-divider>
              <router-link
                to="user/resetPWD"
                class="text-decoration-none text-center d-flex justify-space-between px-3"
                style="width:100%; height:45px"
              >
              <div class="d-flex">
                <v-icon>mdi-shield-key-outline</v-icon>
                <p class="body-2 ma-0 ml-2 textLine">修改密碼</p>
              </div>
                <v-icon>mdi-chevron-right</v-icon>
              </router-link>
            <v-divider></v-divider>
              <v-btn
                class="text-decoration-none text-center d-flex justify-space-between px-3"
                style="width:100%; height:45px"
                @click="bindLine"
              >
              <div class="d-flex">
                <v-icon>mdi-link-variant</v-icon>
                <p class="body-2 ma-0 ml-2 textLine">LINE ID綁定</p>
              </div>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
          </v-card>
        </v-col>
        <v-col cols="12" class="my-5">
          <div class="d-flex justify-space-between mb-1">
            <span class="body-2">團隊相關</span>
          </div>
          <v-card
            style="height: 90px"
            color="white"
            elevation="10"
          >
              <router-link
                to="user/team"
                class="text-decoration-none text-center d-flex justify-space-between px-3"
                style="width:100%; height:45px"
              >
              <div class="d-flex">
                <v-icon>mdi-account-group-outline</v-icon>
                <p class="body-2 ma-0 ml-2 textLine">合作顧問群</p>
              </div>
                <v-icon>mdi-chevron-right</v-icon>
              </router-link>
            <v-divider></v-divider>
              <router-link
                to="user/invitationCode"
                class="text-decoration-none text-center d-flex justify-space-between px-3"
                style="width:100%; height:45px"
              >
              <div class="d-flex">
                <v-icon>mdi-share-variant-outline</v-icon>
                <p class="body-2 ma-0 ml-2 textLine">邀請加入</p>
              </div>
                <v-icon>mdi-chevron-right</v-icon>
              </router-link>
          </v-card>
        </v-col>
        <v-col cols="12" class="my-5">
          <div class="d-flex justify-space-between mb-1">
            <span class="body-2">APP相關</span>
          </div>
          <v-card
            style="height: 90px"
            color="white"
            elevation="10"
          >
              <router-link
                to="user/setting"
                class="text-decoration-none text-center d-flex justify-space-between px-3"
                style="width:100%; height:45px"
              >
              <div class="d-flex">
                <v-icon>mdi-cog-outline</v-icon>
                <p class="body-2 ma-0 ml-2 textLine">設置</p>
              </div>
                <v-icon>mdi-chevron-right</v-icon>
              </router-link>
            <v-divider></v-divider>
              <v-btn
                light
                class="text-decoration-none text-center d-flex justify-space-between px-3 white"
                style="width:100%; height:45px"
                @click.stop="dialog = true"
              >
              <div class="d-flex">
                <v-icon>mdi-logout</v-icon>
                <p class="body-2 ma-0 ml-2 textLine">登出</p>
              </div>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
          </v-card>
        </v-col>
        <v-col cols="12" class="my-5">
          <div class="d-flex justify-center">
            <span class="body-2 text-center">Copyright &copy; iFAlink All rights reserved<br>
              版權所有 秒創意科技股份有限公司<br>
              勤律法律事務所
            </span>
          </div>
        </v-col>
        <v-col cols="12">
          <div style="height: 100px"></div>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-subtitle-1">
          是否要登出？
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="black"
            text
            @click="dialog = false"
          >
            取消
          </v-btn>
          <v-btn
            text
            @click="logout"
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
  apiPostLogout,
  apiPostGetLineLoginUrlBindLine,
} from '@/api';

export default {
  data: () => ({
    dialog: false,
  }),

  methods: {
    bindLine() {
      apiPostGetLineLoginUrlBindLine()
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.$store.dispatch('setLineUrl', res.data.url);
            window.location.href = this.$store.getters.lineUrl;
          }
        }).catch((error) => {
          console.log(error);
        });
    },
    logout() {
      const token = this.$Cookies.get('Token');

      apiPostLogout(token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.$cookies.remove('Token');
            sessionStorage.clear();
            this.dialog = false;
            this.$router.push({ path: '/' });
          }
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
    font-size: 1rem;
  }
  .textLine {
    line-height: 45px;
  }
</style>
