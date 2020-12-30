<template>
  <div class="container" style="margin-top: 50px">
    <div class="text-center">
      <div style="max-width: 500px; margin: 0 auto">
        <div v-if="success !== ''" class="alert alert-success" role="alert">
          {{ success }}
        </div>

        <FormBrandComponent v-on:submitFile="onSubmitFile" />

        <div class="card card-body mt-3" v-if="jsonDocument">
           <FormSaveMapping :jsonDocument="jsonDocument" :brandGroup="brandGroup" :fileOptions="fileOptions" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import FormBrandComponent  from "./FormBrandComponent.vue";
import FormSaveMapping from './FormSaveMappingComponent.vue';
export default {
  components: { FormBrandComponent, FormSaveMapping },
  mounted() {
    console.log("CreateBrandComponent mounted.");
  },
  data() {
    return {
      filename: '',
      file: "",
      success: "",
      jsonDocument: '',
      brandName: '',
      brandTags: '',
      brandGroup: '',
      fileOptions: '',
    };
  },
  methods: {
    onSubmitFile(data){

      let { file, success, jsonDocument, brandName, brandTags, fileSettings } = data;

      this.file = file;
      this.success = success;
      this.jsonDocument = jsonDocument;
      this.brandName = brandName;
      this.brandTags = brandTags;
      this.brandGroup = [brandName, brandTags];
      this.fileOptions = fileSettings;
    }
  },

  };
</script>
