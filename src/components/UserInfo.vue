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
        <v-col cols="12">
          <v-form
            class="px-3"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-icon large @click="backHistory">mdi-chevron-left</v-icon>
            <v-col cols="12" class="d-flex justify-center">
              <v-avatar
                size="80"
                class="avatarbd"
              >
                <img
                  :src="data.img"
                  alt="Photo"
                >
              </v-avatar>
            </v-col>
            <v-col cols="12">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>ID</v-list-item-title>
                  <v-list-item-subtitle>{{data.id}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>身分</v-list-item-title>
                  <v-list-item-subtitle>{{data.type}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="12">
              <div class="d-flex justify-space-between mb-1">
                <div class="my-1 text-body-2"><span>*</span>姓名</div>
              </div>
                <v-text-field
                  v-model="data.name"
                  :rules="[rules.required, rules.nameCheck]"
                  required
                  outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12" >
              <div class="d-flex justify-space-between mb-1">
                <div class="my-1 text-body-2"><span>*</span>電話號碼</div>
              </div>
              <v-col cols="12" class="d-flex pa-0">
              <v-col sm="3" class="py-0 px-2">
                <v-select
                  v-model="data.phoneCountryCode"
                  :items="countryCode"
                  label="請選擇"
                  readonly
                  return-object
                  single-line
                  solo
                ></v-select>
              </v-col>
              <v-col sm="9" class="py-0 px-2">

                <v-text-field
                  v-model="data.phoneNo"
                  :rules="[rules.required, rules.moblie]"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              </v-col>
            </v-col>
            <v-col cols="12">
              <div class="d-flex justify-space-between mb-1">
                <div class="my-1 text-body-2"><span>*</span>E-mail</div>
              </div>
                <v-text-field
                  v-model="data.email"
                  :rules="[rules.required, rules.emailValidCheck]"
                  required
                  outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12">
              <div class="d-flex justify-space-between mb-1">
                <div class="my-1 text-body-2">身份證字號</div>
              </div>
                <v-text-field
                  v-model="data.IDnumber"
                  required
                  outlined
                  readonly
                ></v-text-field>
            </v-col>
            <v-col cols="12" >
              <div class="d-flex justify-space-between mb-1">
                <div class="my-1 text-body-2"><span>*</span>地址</div>
              </div>
              <v-col cols="12" class="d-flex pa-0">

              <v-col sm="6" class="py-0 px-2">
                <v-select
                  v-model="data.city"
                  :items="cityItems"
                  label="請選擇"
                  no-data-text="請選擇縣市"
                  single-line
                  required
                  solo
                  @change="getAreaIngo(data.city)"
                ></v-select>
              </v-col>
              <v-col sm="6" class="py-0 px-2">
                <v-select
                v-model="data.area"
                :items="areaItems"
                label="請選擇"
                no-data-text="請先選擇縣市"
                single-line
                solo
                @change="getPostalCode(data.area)"
              ></v-select>
              </v-col>
              </v-col>
              <v-col cols="12" class="d-flex pa-0">

              <v-col sm="3" class="py-0 px-2">
                <v-text-field
                  v-model="data.postalCode"
                  required
                  outlined
                  readonly
                ></v-text-field>
              </v-col>
              <v-col sm="9" class="py-0 px-2">
                <v-text-field
                  v-model="data.address"
                  :rules="[rules.required]"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              </v-col>
            </v-col>
            <v-col cols="12" >
            <v-file-input
              v-model="data.userPic"
              accept="image/png, image/jpeg, image/bmp"
              label="請選擇檔案"
              :rules="[rules.imageSize]"
              outlined
              dense
              show-size
              prepend-icon="mdi-camera"
            ></v-file-input>
            </v-col>
              <v-btn
                rounded
                block
                color="primary"
                class="my-4"
                :disabled="!valid"
                @click="modifyPersonalInfo"
              >
                送出修改
              </v-btn>
          </v-form>
          <v-col cols="12">
            <div style="height: 100px"></div>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
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
  </v-sheet>
</template>

<script>
import {
  apiPostPersonalInfo,
  apiPostGetTaiwanAreaInfo,
  apiPostSavePersonalInfo,
} from '@/api';

export default {
  inject: [
    'reload',
  ],
  data: () => ({
    isLoad: false,
    dialog: false,
    dialogText: '',
    valid: true,
    data: {
      id: '',
      type: '',
      name: '',
      phoneCountryCode: '+886',
      phoneNo: '',
      email: '',
      IDnumber: '',
      city: '',
      area: '',
      address: '',
      postalCode: '',
      userPic: null,
      img: '',
    },
    items: [],
    countryCode: ['+886'],
    resData: {},
    cityItems: [],
    areaItems: [],
    rules: {
      required: (v) => !!v || '* 必須輸入。',
      nameCheck: (v) => (v && v.length <= 5) || '名字不得超過5個字。',
      emailValidCheck: (v) => /.+@.+\..+/.test(v) || 'E-mail 必須是有效的。',
      moblie: (v) => /^09[0-9]{8}$/.test(v) || '請輸入正確的手機號碼。',
      imageSize: (v) => !v || v.size < 3000000 || '照片檔案請小於 3 MB!',
    },
    token: '',
    timer: null,
  }),
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.data.img = sessionStorage.getItem('pic');
      this.token = this.$Cookies.get('Token');
      await this.getPersonalInfo();
      await this.getTaiwanAreaInfo();
      await this.getAreaIngo(this.data.city);
    },
    backHistory() {
      this.$router.go(-1);
    },
    getPersonalInfo() {
      return apiPostPersonalInfo(this.token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.data.id = res.data.id;
            this.data.type = res.data.type;
            this.data.name = res.data.name;
            this.data.phoneNo = res.data.phone_no;
            this.data.email = res.data.email;
            this.data.IDnumber = res.data.realid_nb;
            this.data.city = res.data.city;
            this.data.area = res.data.area;
            this.data.address = res.data.address;
            this.data.postalCode = res.data.postal_code;
            sessionStorage.setItem('pic', res.data.img);
          }
        }).catch((error) => {
          console.log(error);
        });
    },
    getTaiwanAreaInfo() {
      return apiPostGetTaiwanAreaInfo(this.token)
        .then((res) => {
          if (res.status === 200) {
            this.resData = res.data;
            this.resData.forEach((item) => {
              this.cityItems.push(item.city);
            });
          }
        }).catch((error) => {
          console.log(error);
        });
    },
    getAreaIngo(val) {
      return new Promise(() => {
        this.areaItems = [];
        this.resData.forEach((item) => {
          if (item.city === val) {
            item.area_data.forEach((items) => {
              this.areaItems.push(items.area);
            });
          }
        });
        this.$nextTick(() => {
          this.isLoad = true;
        });
      });
    },
    getPostalCode(val) {
      this.postalCode = '';
      this.resData.forEach((item) => {
        item.area_data.forEach((items) => {
          if (items.area === val) {
            this.data.postalCode = items.postal_code;
          }
        });
      });
    },
    modifyPersonalInfo() {
      if (this.$refs.form.validate()) {
        const params = new FormData();
        params.append('name', this.data.name);
        params.append('phoneCountryCode', this.data.phoneCountryCode);
        params.append('phoneNo', this.data.phoneNo);
        params.append('email', this.data.email);
        params.append('city', this.data.city);
        params.append('area', this.data.area);
        params.append('postalCode', this.data.postalCode);
        params.append('address', this.data.address);
        params.append('userPic', this.data.userPic);

        apiPostSavePersonalInfo(params, this.token)
          .then(() => {
            sessionStorage.setItem('name', this.data.name);
            this.dialog = true;
            this.dialogText = '修改成功';
            this.timer = setTimeout(() => {
              this.reload();
            }, 3000);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    destroyed() {
      clearTimeout(this.timer);
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

    span {
    color: #F44336;
    padding-right: 5px;
  }
</style>
