import { createStore } from 'vuex';

export default createStore({
  state: { 
    locale: ' ',
    lang: ' ',
  },
  mutations: { // synchronous, commit
    changeLang(state, payload) {
      state.lang = payload;
    }
  }, 
  actions: {}, // async, dispatch
  modules: {},
  getters: {
    getLocale(state) {
      return state.locale
    }
  }
});
