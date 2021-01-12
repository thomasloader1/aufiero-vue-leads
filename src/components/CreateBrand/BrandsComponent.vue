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
    this.GET_BRANDS();
    console.log(this.storeBrand);
  },
  computed: {
    ...mapGetters({
      storeBrand: "brand"
    })
  },
  methods: {
    ...mapActions(["GET_BRAND", "GET_BRANDS"])
  }
};
</script>
