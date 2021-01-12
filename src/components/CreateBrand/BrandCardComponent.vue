<template>
  <div class="container">
    <div class="row">
      <div class="col-6" v-for="brand in allBrands" :key="brand.id">
        <div class="card my-2">
          <div class="card-header">
            {{ brand.name }}
          </div>
          <div class="card-body">
            <h5 class="card-title">
              Template:
              <span class="font-weight-bold">{{ brand.template_file }}</span>
            </h5>
            <p class="my-2">Tags:</p>
            <div id="tags-brand" class="pb-3 d-inline-flex flex-wrap">
              <span
                v-for="(tag, index) in brand.tags.split(',')"
                :key="index"
                class="card-text font-weight-bold bg-primary rounded-lg px-2 py-1 text-white m-1"
                >{{ tag }}</span
              >
            </div>

            <router-link class="btn btn-success d-block" to="/importBatch"
              >Importar Batch</router-link
            >
            <!--<pre>{{ brand }}</pre> -->
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
