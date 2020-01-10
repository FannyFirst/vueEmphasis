<template>
    <div>
        <h3>beforeUpdate</h3>
        <b @click="changeMsg">{{msg}}</b>
    </div>
</template>

<script>
  export default {
    name: "beforeUpdate",
    data() {
      return {
        msg: `click this message to change this message and then beforeUpdate function will be called and see more in console`
      }
    },
    updated() {
      console.log(this.msg ,"\nthis.msg was replaced but not render to DOM")
    },
    methods:{
      changeMsg(){
        this.msg = `changed message and the beforeUpdate function will be called `
      }
    }

  }
</script>