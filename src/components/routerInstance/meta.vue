<template>
    <div>
        <h2>metaV</h2>
        <div>
            <h3>
                meta content(key,value)
            </h3>
            <div>
                <h1 v-for="(value,key) in meta">{{key}} -> {{value}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "metaV",
    data() {
      return {
        meta: this.$route.meta,
      }
    }
  }
</script>

<style scoped>

</style>