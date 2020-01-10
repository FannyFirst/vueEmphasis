<template>
    <div>
        <h3>getter</h3>
        <h3>request and set data in store of vuex</h3>
        <h4>get user login status:{{data}}</h4>
        <button @click="login">login</button>
        <button @click="logout">logout</button>

    </div>
</template>

<script>
  export default {
    name: "getters",
    computed: {
      data() {
        return this.$store.getters.userLogin
      }
    },
    methods: {

      login() {
        this.$store.dispatch("requestToken", 1)
        this.$store.dispatch("requestUserInformation")
      },
      logout() {
        console.log(this.$store.getters.userLogin);
        this.$store.commit("logout")
      }
    }

  }
</script>

<style scoped>

</style>