<template>
    <div>
        <h3>bind with vue</h3>
        <div>
            <label for="inputV">
                <input type="text" id="inputV" v-model="text">
            </label>
            <h4>text:{{text}}</h4>
            <button @click="changeText">change text</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "bindOfVue",
    data() {
      return {
        text: "input text"
      }
    },
    methods: {
      changeText(){
        this.text = "changed text"
      }
    }

  }
</script>

<style scoped>

</style>