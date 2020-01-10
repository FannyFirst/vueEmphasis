<template>
    <div>
        <h3>before destroy</h3>
        <b @click="destroyNode">{{msg}}</b>
    </div>
</template>

<script>
  export default {
    name: `beforeDestroy`,
    data(){
      return{
        msg:`click this message to destroy this node and then beforeDestroy function will be called`
      }
    },
    methods:{
      destroyNode(){
        this.$destroy()
      }
    },beforeDestroy() {
      console.log(`beforeDestroy was called and then all of bind,children and eventListener will be remove,
                    which this node was not be listened by vue instance`)
    }
  }
</script>

<style scoped>

</style>