<template>
    <div>
        <h2>params</h2>
        <div>
            <h3>
                params content(key,value)
            </h3>
            <div>
                <h1 v-for="(value,key) of params">{{key}} -> {{value}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "params",
    data() {
      return {
        params: this.$route.params,
      }
    }
  }
</script>

<style scoped>

</style>