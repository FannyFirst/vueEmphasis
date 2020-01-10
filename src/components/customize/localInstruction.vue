<template>
    <div>
        <h3>local instruction</h3>
        <div>
            <h2 v-append="append">this text was bind customize instruction v-append</h2>
        </div>
    </div>
</template>

<script>
  export default {
    name: "localInstruction",
    data() {
      return {
        append:"<span style='color: crimson'>(*_*)</span>",
      }
    },
    directives: {
      append: {
        inserted(el, binding) {
          const n = document.createElement('div')
          n.innerHTML = binding.value
          el.append(n.childNodes[0])
        }
      }
    }
  }
</script>

<style scoped>

</style>