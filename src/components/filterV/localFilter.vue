<template>
    <div>
        <h3>localFilter</h3>
        <h4>{{text}}</h4>
        <h4>{{text|capitalize}}</h4>
    </div>
</template>

<script>
  export default {
    name: "localFilter",
    data() {
      return {
        text:"the capitalize filter will filter this sentence"
      }
    },
    filters: {
      capitalize(value) {
        if (!value) return ""
        return value.toString().charAt(0).toUpperCase() + value.toString().slice(1)
      }
    }
  }
</script>

<style scoped>

</style>