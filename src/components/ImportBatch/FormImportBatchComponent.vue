<template>
    <form @submit="importBatch" enctype="multipart/form-data" class="card card-body">
        <div class="d-flex justify-content-between align-items-center">
        <div class="form-group">
            <label class="" for="brandName">Nombre</label>
            <input disabled v-model="brandName" type="text" name="name" id="brandName" class="form-control" placeholder="Nombre de marca">
        </div>
        <div class="form-group">
            <label class="" for="inputTags">Tags</label>
            <input disabled type="text" name="tags" class="form-control" id="inputTags" placeholder="Tags de marca" v-model="brandTags" v-on:change="onTagsChange"/>
        </div>
        </div>
        <div class="form-group">
            <div class="custom-file">
                <input type="file" name="filename" class="custom-file-input" id="inputFileUpload"  v-on:change="onFileChange"/>
                <label class="custom-file-label" for="inputFileUpload">Choose file</label>
            </div>
        </div>

        <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Importar Batch" />
        </div>
        <p v-if="filename" class="text-danger font-weight-bold">{{ filename }}</p>
    </form>
</template>
<script>
export default {
    props:['brand', 'submitFile', 'selectBrand'],
    data(){
        return{
            brandName: '',
            brandTags: '',
            filename: '',
            file: '',
            fileSettings: '',

        }
    },
    mounted(){
        console.log(`FormImportBatch mounted()`)
        //console.log(this.selectBrand[0])
        const { brand_name, brand_tags } = this.selectBrand[0]
        this.brandName = brand_name
        this.brandTags = brand_tags
    },
    methods:{
        importBatch(e){
            e.preventDefault();
            let currentObj = this;
            const config = {
                headers: {
                "content-type": "multipart/form-data",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content,
                },
            };
            // form data
            let formData = new FormData();
            formData.append("file", this.file);
            formData.append('brandTemplate', JSON.stringify(this.selectBrand[0]))

            // send upload request
            axios.post("importBatch/create", formData, config).then(function (response) {
                       // let { data } = response;
                        console.log(`Response axios.post(/importBrandBatch):`,response)
                        //currentObj.success = data.success;
                        //currentObj.filename = "";
                        //currentObj.brandName = e.target[0].value;
                        //currentObj.brandTags = e.target[1].value;
                       // currentObj.jsonDocument = JSON.parse(data.jsonDocument);
                        //currentObj.sendData(currentObj);
                    }).catch(function (error) {
                        //currentObj.output = error;
                        console.error(error)
                    });

        },
        sendData(object){
            const { filename, file, success, jsonDocument, brandName, brandTags, fileSettings } = object;
            console.log(jsonDocument)
            this.$emit('submitFile',{ file, success, jsonDocument, brandName, brandTags, fileSettings });
        },
        onFileChange(e){
            console.group("onFileChange")
            this.filename = "Selected File: " + e.target.files[0].name;
            this.file = e.target.files[0];
            this.fileSettings = {name: this.file.name, size: this.file.size, extension: this.file.name.split('.').pop().toUpperCase()};
            console.log(e);
            console.groupEnd();
        },
        onTagsChange(e){
            console.log(e)
        }
    }
}
</script>
