<template>
  <v-container>
    <v-row dense class="ma-auto">
      <v-icon large @click="backHistory">mdi-chevron-left</v-icon>
      <v-col cols="12" class="my-5">
        <div class="d-flex justify-space-between mb-1">
          <span class="body-2">語系選擇</span>
        </div>
          <v-select
            v-model="languageData.language"
            class="mr-2"
            :items="languageArr"
            item-text="state"
            item-value="value"
            label="請選擇分類"
            solo
            return-object
            @change="setSaveLanguage"
          ></v-select>
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
import {
  apiPostConfigLanguage,
  apiPostSaveLanguage,
} from '@/api';

export default {
  data: () => ({
    dialog: false,
    dialogText: '',
    languageData: {
      language: {},
    },
    languageArr: [
      { state: '繁體中文', value: 'zh-Hant-TW' },
      { state: '简体中文', value: 'zh-Hans-CN' },
    ],
  }),

  created() {
    this.init();
  },

  methods: {
    init() {
      this.$store.dispatch('setToken', this.$Cookies.get('Token'));
    },
    backHistory() {
      this.$router.go(-1);
    },
    getconfigLanguage() {
      const { token } = this.$store.getters;

      apiPostConfigLanguage(token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            if (res.data.language === 'zh-Hant-TW') {
              this.languageData.language.state = '繁體中文';
              this.languageData.language.value = 'zh-Hant-TW';
            } else {
              this.languageData.language.state = '简体中文';
              this.languageData.language.value = 'zh-Hans-CN';
            }
          }
        }).catch((error) => {
          console.log(error);
        });
    },
    setSaveLanguage() {
      const { token } = this.$store.getters;
      const params = new URLSearchParams();
      params.append('language', this.languageData.language.value);

      apiPostSaveLanguage(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.dialog = true;
            this.dialogText = '語系修改成功';
          }
        }).catch((error) => {
          console.log(error);
        });
    },
  },
};

</script>
