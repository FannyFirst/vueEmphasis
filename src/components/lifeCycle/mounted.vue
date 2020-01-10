<template>
    <div>
        <h3>mounted</h3>
        <b>{{msg}}</b>
    </div>
</template>

<script>
  export default {
    name: "mounted",
    data() {
      return {
        msg: `vm.$el was created and el was replaced at now`
      }
    },
    mounted() {
      console.log(this.$el,`this.$el was created`)
    }
  }
</script>

<style scoped>

</style>