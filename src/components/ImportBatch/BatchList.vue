<template>
    <div>
        <h1>Lista de Batchs</h1>
        <BatchCard :allBatches="storeBatch"/>
    </div>
</template>
<script>
import { mapGetters, mapActions, createLogger } from "vuex";
import BatchCard from "./BatchCard.vue";
export default {
    components:{BatchCard},
    data(){
        return{
            allBatches: ""
        }
    },
    mounted(){
       // console.log('BatchList')
        this.GET_BATCHES();
    },
    computed:{
        ...mapGetters({
            storeBatch: "batches"
        })
    },
    methods:{
        ...mapActions(["GET_BATCH","GET_BATCHES"])
    }
}
</script>