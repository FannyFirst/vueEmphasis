<template>
    <div>
        <h2>keep alive</h2>
        <div>
            <h3>this component will keep alive when loaded many children components</h3>
            <div>
                <router-link :to="{name:`nestedComponents`}" tag="button">load</router-link>
                <router-link :to="{name:`nestedComponents1`}" tag="button">load1</router-link>
                <keep-alive>
                    <router-view name="nested"/>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
  import children from "./children";

  export default {
    name: "keepAliveV",
    data() {
      return {
        path: ""
      }
    },
    components: {
      children
    }, beforeRouteLeave(to, from, next) {
      this.path = this.$route.path
      next()
    },
    activated() {
      if (this.path && this.path !== this.$route.path)
        this.$router.push(this.path)
    }
  }
</script>

<style scoped>
    div {
        margin: 20px;
    }

</style>