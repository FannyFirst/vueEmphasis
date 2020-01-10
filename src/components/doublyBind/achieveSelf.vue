<template>
    <div>
        <h3>achieve by myself but in workspace not use</h3>
        <label for="inputM">
            <input type="text" id="inputM"></label>
        <h4>
            text:
            <div id="textForInputM" style="display: inline-block"/>
        </h4>
        <button @click="changeText">change text</button>
        <button @click="changeTextIn">change text by inside Object</button>
    </div>
</template>

<script>

  let key = "default value"     //key value
  const o = {           //key value obj like data:{} or data(){return{}} in vue
    key
  }

  export default {
    name: "achieveSelf",
    methods: {
      changeText() {
        document.getElementById("textForInputM").innerHTML = "changed text";
      }, changeTextIn() {
        o.key = "changed text";
      }
    },
    mounted() {

      //assume 2 node use same key value
      const e = document.getElementById("inputM")
      const t = document.getElementById("textForInputM")

      e._type = "input"
      t._type = "text"

      const a = []  //watcher table of this value
      a.push(e, t)

      //watcher
      const tagNameMap = {input: "value", text: "innerText"}
      Object.defineProperty(o, "key", {
        set(v) {
          //change element text
          a.forEach(i => {
            //according to _type change display text
            if (i._type) {
              i[tagNameMap[i._type]] = v
            }
          })
          key = v
        },
        get() {
          return key
        }
      })

      let innerHTML = ""
      Object.defineProperty(t, "innerHTML", {
        set(v) {
          t.innerText = v
          o.key = v
          innerHTML = v
        },
        get() {
          return innerHTML
        }
      })

      e.oninput = function () {
        o.key = e.value
      }

    }
  }
</script>

<style scoped>

</style>