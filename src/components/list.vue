<template>
    <div id="column">
        <ul>
            <li v-for="item in textFilter">
                <router-link :to="item.path" tag="div" class="">{{item.text}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "list",
    props: {
      listData: {
        type: Array,
        default: function () {
          return [{text: "test", path: "/"}]
        }
      }
    },
    computed: {
      textFilter() {
        return this.listData.filter(item => (item.text && item.path))
      }
    }
  }
</script>

<style scoped>
    #column{
      /*  position: fixed;
        overflow-y: auto;
        overflow-x: hidden;*/
        position: fixed;
        overflow-y: auto;
        overflow-x: hidden;
        top: 0;
        bottom: 0;
    }
    ul{
        list-style-type: none;
        display: flex;
        justify-items: center;
        flex-direction: column;
        font-size: 30px;
        text-align: center;

        flex-grow: 1;
    }
    ul li{
        width: 199px;
        height: 99px;
        background-color: lightgray;
    }
    ul li div{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: ease-in-out .2s;
    }
    ul li div:hover{
        background-color: cornflowerblue;
        transform: scale(1);
        cursor: pointer;
        color: cornsilk;
    }
    .active{
        background-color: #5183ca;
        color: #fff;
    }

</style>