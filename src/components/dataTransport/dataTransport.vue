<template>
    <div>
        <h2>data transport</h2>
        <div>
            <children-to-parent @receive="receive"/>
            <div>
                <h4>{{receivedData}}</h4>
            </div>
        </div>
        <div>
            <parent-to-children v-if="send" :data="sendData"/>
            <div>
                <button @click.once="send = !send">send to children</button>
            </div>

        </div>
    </div>
</template>

<script>
  import childrenToParent from "./childrenToParent";
  import parentToChildren from "./parentToChildren";

  export default {
    name: "transformOfValue",
    data() {
      return {
        receivedData: "not received data",
        sendData: "data from parent",
        send: false
      }
    },
    components: {
      childrenToParent,
      parentToChildren
    },
    methods: {
      receive(data) {
        this.receivedData = data
      }
    }

  }
</script>

<style scoped>
    div {
        margin: 20px;
    }
</style>