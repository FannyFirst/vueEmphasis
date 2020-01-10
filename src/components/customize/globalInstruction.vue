<template>
    <div>
        <h3>global instruction</h3>
        <div>
            <h4>next input was bind v-focus</h4>
            <label for="auto-focus-input">
                <input type="text" id="auto-focus-input" v-focus>
            </label>
        </div>
    </div>

</template>

<script>
  import Vue from 'vue'
  Vue.directive("focus", {
    inserted(el) {
      el.focus()
    }

  })
  export default {
    name: "globalInstruction",
    mounted() {

    }
  }
</script>

<style scoped>

</style>