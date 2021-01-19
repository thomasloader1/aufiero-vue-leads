"use strict";
import axios from "axios";

const URI = "http://localhost:5000/users"

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
        .get(`${URI}/${id}`)
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
