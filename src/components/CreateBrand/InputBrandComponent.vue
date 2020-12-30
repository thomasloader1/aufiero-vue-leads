<template>
    <div>
        <div class="input-group mb-3 " v-for='primaryInput in primaryHeaders' :key="primaryInput">
            <div class="input-group-prepend">
                <label class="input-group-text" >{{ primaryInput }}</label>
            </div>
            <select class="custom-select" @change="sendValue" :id="primaryInput">
                <option selected>Choose...</option>
                <option v-for="jd in jsonDocMapping" :key="jd.column" :value="jd.column">{{jd.key}} => {{jd.value}}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    props: ["jsonDocument", "valueChange"],
    data(){
        return {
            primaryHeaders:["Name", "Email", "Country", "Creation Date", "Phone Number"],
            jsonDoc: Object.assign({}, this.jsonDocument),
            jsonDocMapping: new Array(),
        }
    },
    mounted(){
        console.group(`InputBrand Mounted - mounted()`);
            this.mappingDocument(this.jsonDoc);
        console.groupEnd();

    },
    beforeUpdate(){
        console.log('beforeUpdate');
    },
    updated(){
        console.log('updated')
    },
    methods:{
        mappingDocument(jsonDoc){
            jsonDoc.headers.forEach(header => {
                //console.log(header);
                jsonDoc.values.forEach(value =>{
                    if(header.column === value.column && header.value != null){
                        let mappingValue = { column: header.column, row: value.row, key: header.value, value: value.value }
                        this.jsonDocMapping.push(mappingValue);
                    }

                        return;
                });
                //console.log(this.jsonDocMapping);
            });
            this.jsonDocMapping.push({ column: "null", row: 0, key:"Null", value: "null" })
        console.log(`Mapping Finished:`, this.jsonDocMapping);
        },
        sendValue(e){
            let { target } = e;
            //console.log(e)
            this.$emit('valueChange', { key:target.id ,value:target.value });
        }
    }
}
</script>
