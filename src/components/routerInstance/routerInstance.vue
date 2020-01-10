<template>
    <div>
        <h2>router</h2>
        <div>
            <router-link :to="{name:'historyMode'}" tag="button">historyMode</router-link>
            <router-link :to="{name:'query',query:{query:`queryContent`,query1:`queryContent2`}}" tag="button">by query</router-link>
            <router-link :to="{name:'params',params:{params:`paramsContent`,params1:`paramsContent2`}}" tag="button">by params</router-link>
            <router-link :to="{name:'meta'}" tag="button">by meta</router-link>
            <div>
                <router-view name="childrenRouter"/>
            </div>
        </div>
    </div>
</template>

<script>
  import history from "./history";
  import hash from "./query";
  import params from "./params";
  import metaV from "./meta";

  export default {
    name: "routerInstance",
    components: {
      hash,
      history,
      metaV,
      params
    }
  }
</script>

<style scoped>
    div {
        margin: 20px;
    }
</style>