<template>
  <v-main>
     <v-row no-gutters>
      <v-col
        md="6"
        offset-md="3"
      >
        <Header />
          <router-view v-if="isShow"></router-view>
        <Footer />
      </v-col>
    </v-row>
</v-main>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/footer.vue';

export default {
  components: {
    Footer,
    Header,
  },
  data: () => ({
    isShow: true,
  }),
  provide() {
    return {
      reload: this.reload,
    };
  },
  methods: {
    reload() {
      // 先隱藏
      this.isShow = false;
      // $nextTick() 將回調延遲到下次 DOM 更新循環之後執行
      this.$nextTick(() => {
        this.isShow = true;
      });
    },
  },
};
</script>

<style lang="scss">
  .scrollbarNone::-webkit-scrollbar {
    @media (min-width: 960px){
      display: none;
    }
}
</style>
