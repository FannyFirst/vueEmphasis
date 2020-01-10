<template>
    <div>
        <h3>global Filter</h3>
        <h4>{{text}}</h4>
        <h4>{{text|sentenceCapitalize}}</h4>
    </div>
</template>

<script>
  import Vue from 'vue'

  Vue.filter("sentenceCapitalize", function (value) {
    return value.toString().split("").reduce((r, v) => r += v.toUpperCase(), "")
  });

  export default {
    name: "globalFilter",
    data() {
      return {
        text: "this sentence will be uppercase!!"
      }
    }
  }
</script>

<style scoped>

</style>