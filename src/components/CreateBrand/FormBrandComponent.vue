<template>

    <form @submit="submitForm" enctype="multipart/form-data" class="card card-body">
        <div class="d-flex justify-content-between align-items-center">
        <div class="form-group">
            <label class="" for="brandName">Nombre</label>
            <input type="text" name="name" id="brandName" class="form-control" placeholder="Nombre de marca">
        </div>
        <div class="form-group">
            <label class="" for="inputTags">Tags</label>
            <input type="text" name="tags" class="form-control" id="inputTags" placeholder="Tags de marca" v-model="brandTags" v-on:change="onTagsChange"/>
        </div>
        </div>
        <div class="form-group">
            <div class="custom-file">
                <input type="file" name="filename" class="custom-file-input" id="inputFileUpload"  v-on:change="onFileChange"/>
                <label class="custom-file-label" for="inputFileUpload">Choose file</label>
            </div>
        </div>

        <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Validate Mapping" />
        </div>
        <p v-if="filename" class="text-danger font-weight-bold">{{ filename }}</p>
    </form>

</template>

<script>
export default {
    props: ['submitFile'],
    data(){
        return{
            brandName: '',
            brandTags: '',
            filename: '',
            file: "",
            fileSettings: '',
            success: "",
            jsonDocument: undefined,
        }
    },
    updated(){
        console.group('FormBrandComponent updated()');
            console.log(this.brandTags)
        console.groupEnd();
    },
    methods:{
        onFileChange(e) {
            this.filename = "Selected File: " + e.target.files[0].name;
            this.file = e.target.files[0];
            this.fileSettings = {name: this.file.name, size: this.file.size, extension: this.file.name.split('.').pop().toUpperCase()};
        },
        onTagsChange(e){
            let { target } = e;
            let trimValue = target.value.trim();
            this.brandTags = trimValue.split(',');
        },
        submitForm(e) {
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

            // send upload request
            axios.post("/store_file", formData, config).then(function (response) {
                        let { data } = response;
                        console.log(`Response axios.post(/store_file):`,response)
                        currentObj.success = data.success;
                        currentObj.filename = "";
                        currentObj.brandName = e.target[0].value;
                        currentObj.brandTags = e.target[1].value;
                        currentObj.jsonDocument = JSON.parse(data.jsonDocument);
                        currentObj.sendData(currentObj);
                    }).catch(function (error) {
                        currentObj.output = error;
                        console.error(error)
                    });
        },
        sendData(object){
            const { filename, file, success, jsonDocument, brandName, brandTags, fileSettings } = object;
            console.log(jsonDocument)
            this.$emit('submitFile',{ file, success, jsonDocument, brandName, brandTags, fileSettings });
        }
    }
}
</script>
