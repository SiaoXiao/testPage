// 官方文件
import Vue from 'vue';
import VueRouter from 'vue-router';
// 登入頁
import LoginMain from '../views/loginMain.vue';
import Home from '../views/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: LoginMain,
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('../components/login.vue'),
      },
      {
        path: 'forgetPWD',
        name: 'ForgetPWD',
        component: () => import('../components/ForgetPWD.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('../components/Register.vue'),
      },
    ],
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Homepage',
        component: () => import('../components/HomePage.vue'),
      },
      {
        path: 'customerList',
        name: 'CustomerList',
        component: () => import('../components/CustomerList.vue'),
      },
      {
        path: 'customerList/addContract:id',
        name: 'AddContract_id',
        component: () => import('../components/AddContract.vue'),
      },
      {
        path: 'customerList/editContract:id',
        name: 'EditContract_id',
        component: () => import('../components/EditContract.vue'),
      },
      {
        path: 'customerList/viewContract',
        name: 'ViewContract',
        component: () => import('../components/ViewContract.vue'),
      },
      {
        path: 'customerList/signature',
        name: 'Signature',
        component: () => import('../components/Signature.vue'),
      },
      {
        path: 'customerList/customerInfo:id',
        name: 'CustomerInfo_id',
        component: () => import('../components/_CustomerInfo.vue'),
      },
      {
        path: 'addCustomer',
        name: 'AddCustomer',
        component: () => import('../components/AddCustomer.vue'),
      },
      {
        path: 'bonus',
        name: 'Bonus',
        component: () => import('../components/Bonus.vue'),
      },
      {
        path: 'bonus/ConsultWithdrawList',
        name: 'ConsultWithdrawList',
        component: () => import('../components/ConsultWithdrawList.vue'),
      },
      {
        path: 'calendar',
        name: 'Calendar',
        component: () => import('../components/Calendar.vue'),
      },
      {
        path: 'service',
        name: 'Service',
        component: () => import('../components/Service.vue'),
      },
      {
        path: 'service/ContactCustomerService',
        name: 'ContactCustomerService',
        component: () => import('../components/ContactCustomerService.vue'),
      },
      {
        path: 'service/CustomerServiceRecord',
        name: 'CustomerServiceRecord',
        component: () => import('../components/CustomerServiceRecord.vue'),
      },
      {
        path: 'service/CustomerServiceRecord/:id',
        name: 'CustomerServiceRecord_id',
        component: () => import('../components/_ RecordContent.vue'),
      },
      {
        path: 'service/Announcement',
        name: 'Announcement',
        component: () => import('../components/Announcement.vue'),
      },
      {
        path: 'service/AnnouncementContent/:id',
        name: 'AnnouncementContent_id',
        component: () => import('../components/_ AnnouncementContent.vue'),
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('../components/User.vue'),
      },
      {
        path: 'user/setting',
        name: 'Setting',
        component: () => import('../components/Setting.vue'),
      },
      {
        path: 'user/invitationCode',
        name: 'InvitationCode',
        component: () => import('../components/invitationCode.vue'),
      },
      {
        path: 'user/team',
        name: 'Team',
        component: () => import('../components/team.vue'),
      },
      {
        path: 'user/resetPWD',
        name: 'ResetPWD',
        component: () => import('../components/resetPWD.vue'),
      },
      {
        path: 'user/bankAccount',
        name: 'BankAccount',
        component: () => import('../components/BankAccount.vue'),
      },
      {
        path: 'user/bankAccount/addBankAccount',
        name: 'AddBankAccount',
        component: () => import('../components/AddBankAccount.vue'),
      },
      {
        path: 'user/userInfo',
        name: 'UserInfo',
        component: () => import('../components/UserInfo.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  // mode: 'hash',  有預設
  base: process.env.BASE_URL,
  routes,
});

export default router;
