<template>
    <div>
        <h3>before create</h3>
        <b>{{msg}}</b>
    </div>
</template>

<script>
  export default {
    name: "beforeCreate",
    data() {
      return {
        msg: `this message was not defined when instance of vue not created!! see more in console`
      }
    },
    beforeCreate() {
      this.msg = "created this.msg in beforeCreate and then this.msg will be replaced by vue instance"
      console.log(this.msg)
    }
  }
</script>

<style scoped>

</style>