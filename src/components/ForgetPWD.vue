<template>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-icon large class="mb-3" @click="backHistory">mdi-chevron-left</v-icon>
      <v-text-field
        v-model="data.phoneNumber"
        :counter="10"
        :rules="[rules.required, rules.moblie]"
        label="請輸入手機號碼"
        required
        outlined
        clearable
      ></v-text-field>
      <v-btn
        rounded
        block
        color="primary"
        class="my-4"
        :disabled="!valid"
        @click="resetPWD"
      >
        繼續
      </v-btn>
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
    </v-form>
</template>

<script>
import { myPassword } from '@/api';

export default {
  data() {
    return {
      valid: true,
      dialog: false,
      dialogText: '',
      data: {
        phoneNumber: '',
      },
      rules: {
        required: (v) => !!v || '* 必須輸入。',
        moblie: (v) => /^09[0-9]{8}$/.test(v) || '請輸入正確的手機號碼。',
      },
    };
  },

  methods: {
    backHistory() {
      this.$router.go(-1);
    },
    resetPWD() {
      if (this.$refs.form.validate()) {
        const params = new URLSearchParams();
        params.append('phoneNo', this.data.phoneNumber);

        myPassword(params).then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.data.phoneNumber = '';
            this.dialogText = '已發送至手機。';
            this.dialog = true;
          } else {
            this.dialogText = res.data.status_code;
            this.dialog = true;
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    },
  },
};
</script>
