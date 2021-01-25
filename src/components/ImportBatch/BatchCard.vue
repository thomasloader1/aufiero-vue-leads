<template>
      <div class="container">
    <div class="row">
      <div class="col-6" v-for="batch in allBatches" :key="batch.id">
        <div class="card my-2">
          <div class="card-header ">
            {{ batch.name }}
          </div>
          <div class="card-body">
            <h5 class="card-title">
              Template:
              <span class="font-weight-bold">{{batch.template_file}}</span>
            </h5>
            <h6 class="my-2">File Format: {{batch.file_format}}</h6>
            <h6 class="my-2">Tags: <span class="bg-primary rounded-lg text-white p-1">{{batch.tags}}</span></h6>
          </div>
          <div class="card-footer mx-auto">
              <button class="btn btn-danger">Eliminar batch</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:["allBatches"],
    mounted(){
        console.log(`Batch:`,this.allBatches)
    }
}
</script>