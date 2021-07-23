<template>
  <v-footer
    color="white"
    class="pa-0"
  >
    <v-bottom-navigation
    v-if="cardTitle !== '客服紀錄'"
    height="9vh"
    fixed
    grow
  >
    <v-btn @click="goToHome">
      <span>首頁</span>

      <v-icon>mdi-home-outline</v-icon>
    </v-btn>

    <v-btn @click="goToBonus">
      <span>獎金</span>

      <v-icon>mdi-currency-usd</v-icon>
    </v-btn>

    <v-btn @click="goToCalendar">
      <span>行事曆</span>

      <v-icon>mdi-calendar-month-outline</v-icon>
    </v-btn>

    <v-btn @click="goToService">
      <span>服務</span>

      <v-icon>mdi-handshake-outline</v-icon>
    </v-btn>

    <v-btn @click="goToUser">
      <span>我的</span>

      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
    </v-bottom-navigation>

    <v-bottom-navigation
      v-if="cardTitle == '客服紀錄'"
      height="9vh"
      fixed
      class="d-flex justify-space-between align-center py-2 px-3"
    >
      <input type="text" v-model="conversation" placeholder="請輸入訊息">
      <v-icon x-large class="ml-3" @click="talk">mdi-send-circle-outline</v-icon>
    </v-bottom-navigation>
  </v-footer>
</template>

<script>
import { apiPostServiceTalk } from '@/api';

export default {
  inject: [
    'reload',
  ],
  data: () => ({
    dialog: false,
    cardTitle: '',
    conversation: '',
    textContent: '',
  }),

  watch: {
    $route: {
      handler(to) {
        this.cardTitle = '';
        switch (to.name) {
          case 'CustomerServiceRecord_id':
            this.cardTitle = '客服紀錄';
            break;
          default:
        }
      },
      immediate: true,
    },
  },

  methods: {
    goToHome() {
      this.$router.push({ name: 'Homepage' });
    },
    goToBonus() {
      this.$router.push({ name: 'Bonus' });
    },
    goToCalendar() {
      this.$router.push({ name: 'Calendar' });
    },
    goToService() {
      this.$router.push({ name: 'Service' });
    },
    goToUser() {
      this.$router.push({ name: 'User' });
    },
    talk() {
      const token = this.$Cookies.get('Token');
      const params = new URLSearchParams();
      params.append('serviceId', this.$route.params.id);
      params.append('conversation', this.conversation);

      apiPostServiceTalk(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.conversation = '';
            this.reload();
          }
        }).catch((error) => {
          console.log(error);
        });
    },
  },
};

</script>

<style lang="scss" scoped>
  input {
    width: 100%;
    border-radius: 5px;
    padding: 10px 10px;
    background: #464649;
    color: white;
  }
</style>
