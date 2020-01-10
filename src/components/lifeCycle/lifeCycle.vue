<template>
    <div>
        <h2>life cycle</h2>
        <div><before-create/></div>
        <div><created/></div>
        <div><before-mount/></div>
        <div><mounted/></div>
        <div><before-update/></div>
        <div><updated/></div>
        <div><before-destroy/></div>
        <div><destroyed/></div>
    </div>
</template>

<script>
  import beforeCreate from "./beforeCreate";
  import created from "./created";
  import beforeMount from "./beforeMount";
  import mounted from "./mounted";
  import beforeUpdate from "./beforeUpdate";
  import updated  from "./updated";
  import beforeDestroy from "./beforeDestroy";
  import destroyed from "./destroyed";

  export default {
    name: "lifeCycle",
    components: {
      beforeCreate,
      created,
      beforeMount,
      mounted,
      beforeUpdate,
      updated,
      beforeDestroy,
      destroyed
    },destroyed() {
      console.clear()
    }
  }
</script>

<style scoped>
    div {
        margin: 20px;
    }
</style>