import Vue from "vue";
import Vuex from "vuex";
import userStore from "./User";
import brandStore from "./Brand";
import batchStore from "./Batch";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Aufiero Leads"
  },
  getters: {
    title: state => state.title
  },
  modules: {
    user: userStore,
    brand: brandStore,
    batch: batchStore
  }
});
