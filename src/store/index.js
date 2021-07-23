import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    lineUrl: '',
    lineLoginCode: '',
    lineLoginState: '',
    withdrawBonus: '',
    reLoadTalk: false,
    token: '',
  },
  actions: {
    setLineUrl({ commit }, url) {
      commit('setLineUrl', url);
    },
    setLineLoginCode({ commit }, code) {
      commit('setLineLoginCode', code);
    },
    setLineLoginState({ commit }, state) {
      commit('setLineLoginState', state);
    },
    setWithdrawBonus({ commit }, state) {
      commit('setWithdrawBonus', state);
    },
    setReLoadTalk({ commit }, bool) {
      commit('setReLoadTalk', bool);
    },
    setToken({ commit }, token) {
      commit('setToken', token);
    },
  },
  mutations: {
    setLineUrl(state, payload) {
      state.lineUrl = payload;
    },
    setLineLoginCode(state, payload) {
      state.lineLoginCode = payload;
    },
    setLineLoginState(state, payload) {
      state.lineLoginState = payload;
    },
    setWithdrawBonus(state, bonus) {
      state.withdrawBonus = bonus;
    },
    setReLoadTalk(state, payload) {
      state.reLoadTalk = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  getters: {
    lineUrl(state) {
      return state.lineUrl;
    },
    lineLoginCode(state) {
      return state.lineLoginCode;
    },
    lineLoginState(state) {
      return state.lineLoginState;
    },
    withdrawBonus(state) {
      return state.withdrawBonus;
    },
    reLoadTalk(state) {
      return state.reLoadTalk;
    },
    token(state) {
      return state.token;
    },
  },
});

export default store;
