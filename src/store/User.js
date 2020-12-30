"use strict";
import axios from "axios";

export default {
  state: {
    user: {
      id: "",
      username: "",
      apikey: "",
      password_hash: ""
    }
  },
  actions: {
    GET_USER({ commit }, id) {
      axios
        .get(`http://localhost:3000/users/${id}`)
        .then(res => commit("SET_USER", res.data.user));
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  getters: {
    user: state => state.user
  }
};
