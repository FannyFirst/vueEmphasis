<template>
    <div>
        <h2>vuex</h2>
        <getters/>
        <div>
            <h3 v-for="(value,key) in userInformation">{{key}} --> {{value}}</h3>
        </div>
    </div>
</template>

<script>
  import getters from "./getters";

  export default {
    name: "vuex",
    components: {
      getters
    }, computed: {
      userInformation() {
        return this.$store.getters.userInformation
      }
    }


  }
</script>

<style scoped>
    div {
        margin: 20px;
    }
</style>