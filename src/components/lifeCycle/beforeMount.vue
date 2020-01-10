<template>
    <div>
        <h3>before mount</h3>
        <b>{{msg}}</b>
    </div>
</template>

<script>
  export default {
    name: "beforeMount",
    data() {
      return {
        msg: `vm.$el not be created and el not be replaced`
      }
    },
    beforeMount() {
      console.log(this.$el,`this.$el was not created`)
    }
  }
</script>

<style scoped>

</style>