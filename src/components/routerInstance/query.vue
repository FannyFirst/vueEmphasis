<template>
    <div>
        <h2>query</h2>
        <div>
            <h3>
                query content(key,value)
            </h3>
            <div>
                <h1 v-for="(value,key) of query">{{key}} -> {{value}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "query",
    data() {
      return {
        query: this.$route.query,
      }
    }
  }
</script>

<style scoped>

</style>