<template>
    <div>
        <h2>v-model</h2>
        <div>
            <bind-of-vue/>
        </div>
        <div>
            <achieve-self/>
        </div>
    </div>
</template>

<script>
  import bindOfVue from "./bindOfVue";
  import achieveSelf from "./achieveSelf";

  export default {
    name: "doublyBind",
    components: {
      bindOfVue,
      achieveSelf
    }
  }
</script>

<style scoped>
    div {
        margin: 20px;
    }

</style>