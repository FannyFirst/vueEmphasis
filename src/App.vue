<template>
    <div id="app">
        <panel/>
    </div>
</template>

<script>
  import panel from "./views/panel";

  export default {
    name: "app",
    components: {
      panel
    }
  }
</script>

<style>
    @import url("./assets/base.css");
</style>
