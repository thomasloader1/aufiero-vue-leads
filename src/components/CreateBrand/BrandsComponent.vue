<template>
  <BrandCard :allBrands="storeBrand" />
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import BrandCard from "../CreateBrand/BrandCardComponent.vue";
export default {
  components: { BrandCard },
  data() {
    return {
      brands: ""
    };
  },
  mounted() {
    console.log(`BrandsComponnet`);
    // let currentObj = this;
    // axios.get("http://localhost:3000/brands/1").then(function(res) {
    //   console.log(typeof res.data);
    //   currentObj.brands = res.data;
    // });
    // console.log(this.brands);
    this.GET_BRAND(1);
    console.log(this.storeBrand);
  },
  computed: {
    ...mapGetters({
      storeBrand: "brand"
    })
  },
  methods: {
    ...mapActions(["GET_BRAND"])
  }
};
</script>
