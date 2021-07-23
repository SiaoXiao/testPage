<template>
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
      <v-col cols="12"  class="ma-0 px-0 d-flex justify-space-between">
        <v-icon large @click="backHistory">mdi-chevron-left</v-icon>
          <v-btn
            class="mx-2"
            fab
            dark
            color="indigo"
            @click="dialog = true"
          >
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
      </v-col>

      <v-col cols="12">
        <v-sheet height="64">
          <v-toolbar flat color="white">
            <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
              今天
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  outlined
                  color="grey darken-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>天</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>週</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>月</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="events"
            :event-color="getEventColor"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @change="getSchedule"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card
              color="grey lighten-4"
              min-width="350px"
              flat
            >
              <v-toolbar
                :color="selectedEvent.color"
                dark
              >
                <v-btn icon>
                  <v-icon @click="setSchedule">mdi-pencil</v-icon>
                </v-btn>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.content"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="secondary"
                  @click="selectedOpen = false"
                >
                  關閉
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>

      <v-col cols="12">
        <div style="height: 100px"></div>
      </v-col>

      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title class="pa-0 ma-0">
            <v-toolbar dense class="primary" dark>
              <v-toolbar-title>新增行程</v-toolbar-title>
            </v-toolbar>
          </v-card-title>

          <v-row class="ma-0 pa-3">
            <v-menu
              v-model="startDateSW"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="startDate"
                  label="請選擇開始日期"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="startDate"
                @input="startDateSW = false"
              ></v-date-picker>
            </v-menu>
            <v-menu
            ref="menu"
            v-model="startTimeSW"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="startTime"
                label="請選擇開始時間"
                prepend-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="startTimeSW"
              v-model="startTime"
              full-width
              @click:minute="$refs.menu.save(startTime)"
            ></v-time-picker>
          </v-menu>
          </v-row>

          <v-row class="ma-0 pa-3">
            <v-menu
              v-model="endDateSW"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="endDate"
                  label="請選擇結束日期"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="endDate"
                @input="endDateSW = false"
              ></v-date-picker>
            </v-menu>
            <v-menu
              ref="menu"
              v-model="endTimeSW"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="endTime"
                  label="請選擇結束時間"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="endTimeSW"
                v-model="endTime"
                full-width
                @click:minute="$refs.menu.save(endTime)"
              ></v-time-picker>
            </v-menu>
          </v-row>
          <v-col cols="12">
            <v-radio-group
              v-model="scheduleType"
              mandatory
              row
            >
              <v-radio
                label="客戶"
                value="c"
              ></v-radio>
              <v-radio
                label="顧問"
                value="p"
              ></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="title"
              type="text"
              label="請輸入標題"
            ></v-text-field>
            <v-text-field
              v-model="content"
              type="text"
              label="請輸入內容"
            ></v-text-field>
          </v-col>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              depressed
              color="error"
              @click="cleanAddData"
            >
              清除
            </v-btn>
            <v-btn
              depressed
              color="primary"
              @click="addStroke"
            >
              新增
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="editDialog"
        width="500"
      >
        <v-card>
          <v-card-title class="pa-0 ma-0">
            <v-toolbar dense class="primary" dark>
              <v-toolbar-title>編輯行程</v-toolbar-title>
            </v-toolbar>
          </v-card-title>

          <v-row class="ma-0 pa-3">
            <v-menu
              v-model="startDateSW"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="startDate"
                  label="請選擇開始日期"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="startDate"
                @input="startDateSW = false"
              ></v-date-picker>
            </v-menu>
            <v-menu
            ref="menu"
            v-model="startTimeSW"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="startTime"
                label="請選擇開始時間"
                prepend-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="startTimeSW"
              v-model="startTime"
              full-width
              @click:minute="$refs.menu.save(startTime)"
            ></v-time-picker>
          </v-menu>
          </v-row>

          <v-row class="ma-0 pa-3">
            <v-menu
              v-model="endDateSW"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="endDate"
                  label="請選擇結束日期"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="endDate"
                @input="endDateSW = false"
              ></v-date-picker>
            </v-menu>
            <v-menu
              ref="menu"
              v-model="endTimeSW"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="endTime"
                  label="請選擇結束時間"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="endTimeSW"
                v-model="endTime"
                full-width
                @click:minute="$refs.menu.save(endTime)"
              ></v-time-picker>
            </v-menu>
          </v-row>
          <v-col cols="12">
            <v-radio-group
              v-model="scheduleType"
              mandatory
              row
            >
              <v-radio
                label="客戶"
                value="c"
              ></v-radio>
              <v-radio
                label="顧問"
                value="p"
              ></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="title"
              type="text"
              label="請輸入標題"
            ></v-text-field>
            <v-text-field
              v-model="content"
              type="text"
              label="請輸入內容"
            ></v-text-field>
          </v-col>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              depressed
              color="primary"
              @click="editSchedule"
            >
              新增
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialogMsg"
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
              @click="dialogMsg = false"
            >
              確定
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import {
  apiPostAddMySchedule,
  apiPostGetSchedule,
  apiPostModifyMySchedule,
} from '@/api';

export default {
  inject: [
    'reload',
  ],
  data: () => ({
    isLoad: false,
    dialog: false,
    dialogMsg: false,
    editDialog: false,
    dialogText: '',
    focus: '',
    type: 'month',
    typeToLabel: {
      month: '月',
      week: '週',
      day: '天',
    },

    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,

    events: [],
    calEvents: [],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    startDateSW: false,
    endDateSW: false,
    startDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
      .toISOString().substr(0, 10),
    endDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
      .toISOString().substr(0, 10),
    startTimeSW: false,
    endTimeSW: false,
    startTime: null,
    endTime: null,
    title: '',
    scheduleId: '',
    content: '',
    scheduleType: null,
    timer: null,
  }),
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    backHistory() {
      this.$router.go(-1);
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = 'day';
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = '';
    },
    prev() {
      this.$refs.calendar.prev();
      console.log(this.$refs.calendar);
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        // eslint-disable-next-line no-return-assign
        setTimeout(() => this.selectedOpen = true, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i += 1) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: '',
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    addStroke() {
      if (new Date(this.startDate) > new Date(this.endDate)) {
        this.dialogMsg = true;
        this.dialogText = '結束日期不可以早於開始日期';
        return;
      }

      if ((this.startTime && this.endTime) === null) {
        this.dialogMsg = true;
        this.dialogText = '請輸入正確時間';
        return;
      }
      if ((this.title && this.content) === '') {
        this.dialogMsg = true;
        this.dialogText = '請輸入標題及內容';
        return;
      }

      const token = this.$Cookies.get('Token');
      const params = new URLSearchParams();
      params.append('ScheduleStart', `${this.startDate} ${this.startTime}`);
      params.append('ScheduleEnd', `${this.endDate} ${this.endTime}`);
      params.append('type', this.scheduleType);
      params.append('subject', this.title);
      params.append('body', this.content);

      apiPostAddMySchedule(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.dialogMsg = true;
            this.dialogText = '新增行程成功';
            this.timer = setTimeout(() => {
              this.dialog = false;
              this.reload();
            }, 3000);
          }
        }).catch((error) => {
          console.log(error);
        });
    },
    cleanAddData() {
      this.startDate = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
        .toISOString().substr(0, 10);
      this.endDate = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
        .toISOString().substr(0, 10);
      this.startTime = null;
      this.endTime = null;
      this.title = '';
      this.content = '';
      this.scheduleType = null;
    },
    getSchedule({ start, end }) {
      this.events = [];
      this.isLoad = false;
      const token = this.$Cookies.get('Token');
      const params = new URLSearchParams();
      params.append('dateStar', start.date);
      params.append('dateEnd', end.date);

      apiPostGetSchedule(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            res.data.schedules.forEach((item) => {
              this.events.push({
                name: item.subject,
                start: item.schedule_start,
                end: item.schedule_end,
                content: item.body,
                scheduleId: item.schedule_id,
                color: item.type === '客戶' ? 'indigo' : 'green',
              });
            });
          }
          this.$nextTick(() => {
            this.isLoad = true;
          });
        }).catch((error) => {
          console.log(error);
        });
    },
    setSchedule() {
      const type = this.selectedEvent.color;
      const startArr = this.selectedEvent.start.split('T');
      const endArr = this.selectedEvent.end.split('T');

      // eslint-disable-next-line prefer-destructuring
      this.startDate = startArr[0];
      // eslint-disable-next-line prefer-destructuring
      this.endDate = endArr[0];
      // eslint-disable-next-line prefer-destructuring
      this.startTime = startArr[1];
      // eslint-disable-next-line prefer-destructuring
      this.endTime = endArr[1];
      this.editDialog = true;
      this.title = this.selectedEvent.name;
      this.content = this.selectedEvent.content;
      this.scheduleType = type === 'indigo' ? 'c' : 'p';
      this.scheduleId = this.selectedEvent.scheduleId;
    },
    editSchedule() {
      if (new Date(this.startDate) > new Date(this.endDate)) {
        this.dialogMsg = true;
        this.dialogText = '結束日期不可以早於開始日期';
        return;
      }
      if ((this.startTime && this.endTime) === null) {
        this.dialogMsg = true;
        this.dialogText = '請輸入正確時間';
        return;
      }
      if ((this.title && this.content) === '') {
        this.dialogMsg = true;
        this.dialogText = '請輸入標題及內容';
        return;
      }

      const token = this.$Cookies.get('Token');
      const params = new URLSearchParams();
      params.append('scheduleId', this.scheduleId);
      params.append('ScheduleStart', `${this.startDate} ${this.startTime}`);
      params.append('ScheduleEnd', `${this.endDate} ${this.endTime}`);
      params.append('type', this.scheduleType);
      params.append('subject', this.title);
      params.append('body', this.content);

      apiPostModifyMySchedule(params, token)
        .then((res) => {
          if (res.status === 200 && res.data.status_code === 'SUCCESS') {
            this.dialogMsg = true;
            this.dialogText = '修改成功';
            this.timer = setTimeout(() => {
              this.dialog = false;
              this.reload();
            }, 3000);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    destroyed() {
      clearTimeout(this.timer);
    },
  },
};
</script>
