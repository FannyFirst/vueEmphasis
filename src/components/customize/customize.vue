<template>
    <div>
        <h2>customize instruction</h2>
        <global-instruction/>
        <local-instruction/>

    </div>
</template>

<script>
  import globalInstruction from "./globalInstruction";
  import localInstruction from "./localInstruction";

  export default {
    name: "customize",
    components: {
      globalInstruction,
      localInstruction
    }
  }
</script>

<style scoped>
    div {
        margin: 20px;
    }
</style>