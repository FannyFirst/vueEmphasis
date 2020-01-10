<template>
    <div>
        <h3>created</h3>
        <b>{{msg}}</b>
    </div>
</template>

<script>
  export default {
    name: "created",
    data() {
      return {
        msg: `this message will be replaced by created function`
      }
    },
    created() {
      this.msg = "created this.msg in created function and replaced original this.msg"
      console.log(this.msg)
    }
  }
</script>