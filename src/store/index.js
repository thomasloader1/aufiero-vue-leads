import Vue from "vue";
import Vuex from "vuex";
import userStore from "./User";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Aufiero Leads"
  },
  getters: {
    title: state => state.title
  },
  modules: {
    user: userStore
  }
});
