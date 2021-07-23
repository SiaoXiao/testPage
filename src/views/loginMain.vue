<template>
  <v-row align="center" justify="center" class="mt-3">
    <v-col cols="12" lg="3" sm="6" md="4">
      <v-card flat  tile class="elevation-8 pt-12 pb-12 pl-6 pr-6">
        <v-img height="60" contain src="../assets/img/logo.png"></v-img>
        <v-card-title
          v-text="this.cardTitle"
          class="font-weight-black justify-center"
        >
        </v-card-title>
        <router-view></router-view>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      cardTitle: '',
    };
  },
  watch: {
    $route: {
      handler(to) {
        this.cardTitle = '';
        switch (to.name) {
          case 'Login':
            this.cardTitle = '品牌顧問登入';
            break;
          case 'ForgetPWD':
            this.cardTitle = '忘記密碼';
            break;
          case 'Register':
            this.cardTitle = '註冊';
            break;
          default:
        }
      },
      immediate: true,
    },
  },
};

</script>
