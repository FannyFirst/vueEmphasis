<template>
    <div>
        <h3>props transport to children data</h3>
        <h4>{{data}}</h4>
    </div>
</template>

<script>
  export default {
    name: "parentToChildren",
    props:{
      data:{
        type:String,
        default:"default data"
      }
    }
  }
</script>

<style scoped>

</style>