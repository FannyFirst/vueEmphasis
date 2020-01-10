<template>
    <div>
        <h2>axios request from httpbin.org</h2>
        <div>
            <h3>get mode result</h3>
            <h4 v-for="(value,key) in getResult">{{key}} --> {{value}}</h4>
            <button @click="getRequest">send get request</button>
        </div>
        <div>
            <h3>post mode result</h3>
            <h4 v-for="(value,key) in postResult">{{key}} --> {{value}}</h4>
            <button @click="postRequest">send post request</button>
        </div>

    </div>
</template>

<script>
  import get from "../../network/get";
  import post from "../../network/post";

  export default {
    name: "axios",
    data() {
      return {
        getResult: null,
        postResult: null
      }
    },
    methods: {
      getRequest() {
        get("name").then(resolve => {
          console.log(resolve);
          this.getResult = resolve
        }, reject => {
          console.log(reject);
        })
      },
      postRequest() {
        post({test: 1}).then(resolve => {
          console.log(resolve);
          this.postResult = resolve
        }, reject => {
          console.log(reject);
        })
      }
    },
    beforeDestroy() {
      console.clear()
    }
  }
</script>

<style scoped>
    div {
        margin: 20px;
    }

</style>