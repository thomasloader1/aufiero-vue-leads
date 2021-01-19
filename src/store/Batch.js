"use strict";
import axios from "axios";

const URI = "http://localhost:5000/batches"

export default {
  state: {
    batches: {
        id: "",
        name: "",
        tags: "",
        commercial_campaign: "",
        edu_campaign: "",
        home_campaign_name: "",
        template_file: "",
        needs_country_conversion: "",
        file_format: "",
        has_sheets: "",
        phone_Brand_field_id: "",
        email_Brand_field_id: "",
        country_Brand_field_id: "",
        date_Brand_field_id: "",
        colE: "",
        colF: "",
        colG: "",
        colH: "",
    }
  },
  actions: {
    GET_BATCH({ commit }, id) {
      axios
        .get(`${URI}/${id}`)
        .then(res => commit("SET_BRAND", res.data.brand));
    },
    GET_BATCHES({ commit }, id) {
      axios
        .get(`${URI}`)
        .then(res => commit("SET_BRAND", res.data.brand));
    }
  },
  mutations: {
    SET_BATCH(state, brand) {
      state.brand = brand;
    }
  },
  getters: {
    batches: state => state.batches
  }
};
