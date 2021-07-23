<template>
  <v-sheet
    tile
    class='overflow-y-auto overflow-x-hidden scrollbarNone'
    max-height="800px"
    shrink-on-scroll
  >
    <v-container>
      <v-row dense class="mx-auto">
        <v-col cols="12" class="my-5">
          <div class="d-flex justify-space-between mb-1">
            <span class="body-2">快速導覽</span>
          </div>
          <v-card
            color="white"
            elevation="10"
          >
            <v-card-actions class="px-2 py-5">
              <router-link :to="{name: 'CustomerList'}" class="text-decoration-none">
                <v-img height="45" contain src="~@/assets/img/clientList.png"></v-img>
                <p class="body-2 text-center mt-1 mb-0">客戶列表</p>
              </router-link>
              <router-link :to="{name: 'AddCustomer'}" class="text-decoration-none">
                <v-img height="45" contain src="~@/assets/img/addClient.png"></v-img>
                <p class="body-2 text-center mt-1 mb-0">新增客戶</p>
              </router-link>
              <router-link :to="{name: 'Calendar'}" class="text-decoration-none">
                <v-img height="45" contain src="~@/assets/img/calendar.png"></v-img>
                <p class="body-2 text-center mt-1 mb-0">行事曆</p>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" class="my-5">
          <div class="d-flex justify-space-between mb-1">
            <span class="body-2">{{objItemsText[0].title}}</span>
            <router-link
              to="calendar"
              class="text-decoration-none body-2"
            >{{objItemsText[0].link}} &gt;</router-link>
          </div>
          <v-card
            color="white"
            elevation="10"
          >
            <v-sheet
              tile
              class='overflow-y-auto overflow-x-hidden scrollbarNone'
              max-height="180px"
              shrink-on-scroll
            >
              <v-card-subtitle class="text-center px-2 py-5"
                v-if="userData.schedule.length === 0"
              >
                {{objItemsText[0].noContentText}}
              </v-card-subtitle>
              <v-card-subtitle class="text-center pa-0"
                v-if="userData.schedule.length > 0"
              >
                <v-expansion-panels accordion hover tile>
                  <v-expansion-panel
                    v-for="(item, index) in userData.schedule"
                    :key="index"
                  >
                    <v-expansion-panel-header class="px-3 py-1 d-flex flex-column align-start">
                      <div class="d-flex align-center">
                        <v-icon>mdi-calendar-month-outline</v-icon>
                        <v-card-subtitle class="pa-1">{{item.title}}</v-card-subtitle>
                      </div>
                      <v-card-subtitle class="pa-0">
                        {{timeReplace(item.day)}}
                      </v-card-subtitle>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      {{item.content}}
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-card-subtitle>
            </v-sheet>
          </v-card>
        </v-col>
        <v-col cols="12" class="my-5">
          <div class="d-flex justify-space-between mb-1">
            <span class="body-2">{{objItemsText[1].title}}</span>
            <router-link
              to="service/Announcement"
              class="text-decoration-none body-2"
            >{{objItemsText[1].link}} &gt;</router-link>
          </div>
          <v-card
            color="white"
            elevation="10"
          >
            <v-sheet
              tile
              class='overflow-y-auto overflow-x-hidden scrollbarNone'
              max-height="180px"
              shrink-on-scroll
            >
              <v-card-subtitle class="text-center px-2 py-5"
                v-if="userData.news_contents.length === 0"
              >
                {{objItemsText[1].noContentText}}
              </v-card-subtitle>
              <v-card-subtitle class="text-center pa-0"
                v-if="userData.news_contents.length > 0"
              >
                <v-expansion-panels accordion hover tile>
                  <v-expansion-panel
                    v-for="(item, index) in userData.news_contents"
                    :key="index"
                  >
                    <v-expansion-panel-header class="px-3 py-1 d-flex flex-column align-start">
                      <div class="d-flex align-center">
                        <v-icon>mdi-bullhorn-outline</v-icon>
                        <v-card-subtitle class="pa-1">{{item.title}}</v-card-subtitle>
                      </div>
                      <v-card-subtitle class="pa-0">
                        {{timeReplace(item.day)}}
                      </v-card-subtitle>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      {{item.content}}
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-card-subtitle>
            </v-sheet>
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
    objItemsText: [
      {
        title: '行程表',
        link: '查看所有行程',
        noContentText: '暫無行程',
      },
      {
        title: '公告',
        link: '查看所有公告',
        noContentText: '暫無公告',
      },
    ],
    userData: {},
  }),

  created() {
    this.init();
  },

  methods: {
    init() {
      this.userData = JSON.parse(sessionStorage.getItem('data'));
    },
    timeReplace(val) {
      const time = /T/gi;
      return val.replace(time, ' ');
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
</style>
