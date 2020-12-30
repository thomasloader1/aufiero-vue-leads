<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelectBrand">Marca</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelectBrand" v-on:change="onChangeBrand">
                        <option selected>Seleccione una marca</option>
                        <option v-for="b in brands" :key="b.id" :value="b.id">{{b.brand_name}}</option>
                    </select>
                </div>
                <FormImportBatch v-if="selectedBrand" :selectBrand="selectedBrand" v-on:submitFile="onSubmitFile"/>
            </div>
        </div>
    </div>
</template>
<script>
import FormImportBatch from './FormImportBatchComponent';

export default {
    components: { FormImportBatch },
    data(){
        return{
            brands: '',
            selectedBrand: ''
        }
    },
    mounted(){
        console.log('ImportBatchComponent monted()');
        let currentObj = this;
            axios.post('/brands').then(function(res){
                let { data } = res.data;
                currentObj.brands = data;
                //console.log(res.data.data);
            }).catch(function(err){
                console.log(err);
            });
        console.log(this.brands)
    },
    updated(){
        console.group("updated()")
        console.log(this.brands)
        console.groupEnd()
    },
    methods:{
        onSubmitFile(e){
            console.log(e)

        },
        onChangeBrand(e){
            console.log(`onChangeBrand():`)
            let idBrand = e.target.value;
            let selectBrand = this.brands.filter( b => b.id == idBrand);
            this.selectedBrand = selectBrand;
        },
    }
}
</script>
