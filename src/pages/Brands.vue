<template>
    <BrandCardComponent :allBrands="brands" />
</template>
<script>
import BrandCardComponent from './BrandCardComponent.vue';
export default {
    components: { BrandCardComponent },
    data(){
        return {
            brands:'',
        }
    },
    mounted(){
        console.log(`BrandsComponnet`);
        let currentObj = this;
        axios.post('/brands', {all: true}).then(function (res){
            //console.log(res.data)
            currentObj.brands = res.data;
        }).catch(function (err){
            console.log(err)
        })
    }
}
</script>
