<template>
  <v-sheet
    tile
    class='overflow-y-auto overflow-x-hidden scrollbarNone'
    max-height="800px"
    shrink-on-scroll
  >
    <v-container>
      <v-row dense class="ma-auto">
        <v-icon large @click="backHistory">mdi-chevron-left</v-icon>
        <v-col cols="12" class="my-5">
          <v-form
            class="px-3"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <div class="my-1 text-body-2">標題</div>
            <v-text-field
              v-model="data.title"
              :rules="[rules.required]"
              type="text"
              label="請輸入標題"
              outlined
              required
              class="input-group--focused"
            ></v-text-field>
            <v-textarea
              v-model="data.content"
              outlined
              name="input-7-4"
              label="說明您遇到的問題。"
            ></v-textarea>
            <v-btn
              rounded
              block
              color="primary"
              class="my-4"
              :disabled="!valid"
              @click="submitQuestion"
            >
              送出
            </v-btn>
          </v-form>
        </v-col>

        <v-col cols="12">
          <div style="height: 100px"></div>
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
import { apiPostAddCustomerService } from '@/api';

export default {
  data: () => ({
    dialog: false,
    dialogText: '',
    valid: true,
    data: {
      title: '',
      content: '',
    },
    rules: {
      required: (v) => !!v || '* 必須輸入。',
    },
    timer: null,
  }),

  methods: {
    backHistory() {
      this.$router.go(-1);
    },
    submitQuestion() {
      if (this.$refs.form.validate()) {
        const token = this.$Cookies.get('Token');
        const params = new URLSearchParams();
        params.append('subject', this.data.title);
        params.append('body', this.data.content);
        apiPostAddCustomerService(params, token).then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.data.title = '';
            this.data.content = '';
            this.dialogText = '已將問題發送給客服中心';
            this.dialog = true;
            this.timer = setTimeout(() => {
              this.$router.go(-1);
            }, 3000);
          }
        }).catch((error) => {
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
