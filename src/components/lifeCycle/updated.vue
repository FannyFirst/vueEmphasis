<template>
    <div>
        <h3>update</h3>
        <b @click="changeMsg">{{msg}}</b>
    </div>
</template>

<script>
  export default {
    name: "update",
    data() {
      return {
        msg: `click this message to change this message and then update function will be called when DOM was rendered`
      }
    },
    beforeUpdate() {
      console.log(this.msg ,"\nthis.msg was replaced and rendered to DOM")
    },
    methods:{
      changeMsg(){
        this.msg = `the changed message and the updated function will be called after DOM rendered`
      }
    }

  }
</script>