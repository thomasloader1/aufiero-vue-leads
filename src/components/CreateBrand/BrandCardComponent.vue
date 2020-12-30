<template>
  <div class="container">
    <div class="row">
      <div class="col-6" v-for="brand in allBrands.data" :key="brand.id">
        <div class="card my-2">
          <div class="card-header">
            {{ brand.brand_name }}
          </div>
          <div class="card-body">
            <h5 class="card-title">Templates:</h5>
            <p class="card-text">{{ brand.brand_tags }}</p>
            <router-link class="btn btn-success" to="/importBatch"
              >Importar Batch</router-link
            >
            <pre>{{ brand }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["allBrands"],
  data() {
    return {
      brands: new Array()
    };
  },
  mounted() {
    console.log(`BrandCard`);
    console.log(this.allBrands);
  },
  methods: {}
};
</script>
