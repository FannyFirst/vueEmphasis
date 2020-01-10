<template>
    <div id="panel">
        <list :list-data="listData"/>
            <div id="content-display">
                <keep-alive include="keepAliveV">
                    <router-view/>
                </keep-alive>

            </div>
    </div>

</template>

<script>
import list from "../components/list";
import fixedData from "../data/fixedData";

  export default {
    name: "panel",
    components:{
      list
    },
    computed:{
      listData(){
        return fixedData.listData instanceof Array ?fixedData.listData:"";
      }
    }
  }
</script>

<style scoped>
    #panel{
        display: flex;

    }
    #content-display{
        display: flex;
        width: 100%;
        margin-left: 219px;
        padding-top: 19px;
        z-index: 5;
        overflow-x: hidden;

    }
</style>