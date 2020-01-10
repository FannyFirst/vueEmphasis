<template>
    <div>
        <h2>filter</h2>
        <div>
            <global-filter/>
        </div>
        <div>
            <local-filter/>
        </div>
    </div>
</template>

<script>
  import globalFilter from "./globalFilter";
  import localFilter from "./localFilter";

  export default {
    name: "filterV",
    components: {
      globalFilter,
      localFilter
    }
  }
</script>

<style scoped>
    div{
        margin: 20px;
    }

</style>