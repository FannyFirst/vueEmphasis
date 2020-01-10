<template>
    <div>
        <h3>destroy</h3>
        <b @click="destroyNode">{{msg}}</b>
    </div>
</template>

<script>
  export default {
    name: `destroy`,
    data(){
      return{
        msg:`click this message to destroy this node and then destroy function will be called`
      }
    },
    methods:{
      destroyNode(){
        this.$destroy()
      }
    },destroyed() {
      console.log(`this node was destroy from vue instance and it can't listening this node `)
    }
  }
</script>

<style scoped>

</style>