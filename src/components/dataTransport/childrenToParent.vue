<template>
    <div>
        <h3>customize event to transport data</h3>
        <div>
            <button @click="sendData(data)">send data</button>
        </div>
    </div>
</template>


<script>
  export default {
    name: "childrenToParent",
    data(){
      return{
        data:"children data"
      }
    },methods:{
      sendData(data){
        this.$emit("receive",data)
      }
    }
  }
</script>

<style scoped>

</style>