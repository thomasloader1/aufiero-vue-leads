"use strict";
import axios from "axios";

export default {
  state: {
    brand: {
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
      date_Brand_field_id: ""
    }
  },
  actions: {
    GET_BRAND({ commit }, id) {
      axios
        .get(`http://localhost:3000/brands/${id}`)
        .then(res => commit("SET_BRAND", res.data.brand));
    }
  },
  mutations: {
    SET_BRAND(state, brand) {
      state.brand = brand;
    }
  },
  getters: {
    brand: state => state.brand
  }
};
