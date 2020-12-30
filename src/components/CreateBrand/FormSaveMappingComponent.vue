<template>

    <form @submit.prevent="submitForm" >
        <InputBrandComponent v-on:valueChange="onValueChange" :jsonDocument='jsonDocument'/>

        <div class="form-group">
            <input type="submit" class="btn btn-success" value="Save Template Mapping">
        </div>
    </form>

</template>
<script>
import InputBrandComponent  from "./InputBrandComponent.vue";
export default {
    props: ['jsonDocument', 'brandGroup', 'fileOptions'],
    components:{ InputBrandComponent },
    data(){
        return {
            mapping: new Array(),
            brand: new Array(this.brandGroup),
        }
    },
    mounted(){
        console.log('FormSaveMapping mounted')

    },
    updated(){
        },
    methods:{
        onValueChange(e){
            this.mapping.push(e);
        },
        submitForm(e){
            let formData = new FormData();
            formData.append("mappingTemplate",JSON.stringify(this.mapping));
            formData.append("brandGroup",this.brand);
            this.fileOptions.hasSheets = this.jsonDocument.has_sheets
            formData.append("fileOptions",JSON.stringify(this.fileOptions));
            const config = {
                headers: {
                "content-type": "multipart/form-data",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content,
                },
            };
            axios.post("/save_brand_template", formData, config).then(function (response) {
                        let { data } = response;
                        console.log(response)
                    }).catch(function (error) {
                        console.error(error)
                    });

            this.$router.push('/brands');
        }
    }
}
</script>
