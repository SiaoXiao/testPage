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
            <span class="body-2">客服</span>
          </div>
          <v-card
            style="height: 90px"
            color="white"
            elevation="10"
            class="d-flex"
          >
            <router-link
              to="service/ContactCustomerService"
              class="text-decoration-none text-center d-flex flex-column justify-center"
              style="width:100%"
            >
              <v-icon>mdi-comment-edit-outline</v-icon>
              <p class="body-2 text-center mt-1 mb-0">聯繫客服</p>
            </router-link>
            <v-divider
              inset
              vertical
            ></v-divider>
            <router-link
              to="service/CustomerServiceRecord"
              class="text-decoration-none text-center d-flex flex-column justify-center"
              style="width:100%"
            >
              <v-icon>mdi-comment-text-multiple-outline</v-icon>
              <p class="body-2 text-center mt-1 mb-0">客服紀錄</p>
            </router-link>
          </v-card>
        </v-col>
        <v-col cols="12" class="my-5">
          <div class="d-flex justify-space-between mb-1">
            <span class="body-2">真人客服</span>
          </div>
          <v-card
            style="height: 90px"
            color="white"
            elevation="10"
            class="d-flex justify-center"
          >
            <a
              href="https://line.me/R/ti/p/%40211ailbs"
              class="text-decoration-none text-center d-flex flex-column justify-center py-3"
              style="width:100%"
            >

              <v-img height="45" contain src="~@/assets/img/LINE_Brand_icon.png"></v-img>
              <p class="body-2 text-center mt-1 mb-0">Line @ 真人客服</p>
            </a>
          </v-card>
        </v-col>
        <v-col cols="12" class="my-5">
          <div class="d-flex justify-space-between mb-1">
            <span class="body-2">消息</span>
          </div>
          <v-card
            style="height: 90px"
            color="white"
            elevation="10"
            class="d-flex justify-center"
          >
            <router-link
                to="service/Announcement"
                class="text-decoration-none text-center d-flex flex-column justify-center"
                style="width:100%"
              >
                <v-icon>mdi-bullhorn-outline</v-icon>
                <p class="body-2 text-center mt-1 mb-0">消息公告</p>
            </router-link>
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
export default {
  data: () => ({
  }),
};

</script>

<style lang="scss" scoped>
  p {
    color: #000;
  }
</style>
