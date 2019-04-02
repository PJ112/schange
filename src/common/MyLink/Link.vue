<template>
  <div class="mylink">
    <img src="../../assets/imgs/my/gotop.png" @click="goTop"/>
    <router-link to="/publish"> <img src="../../assets/imgs/my/sale.png"/></router-link>
    <router-link to="/index-shopping"><img src="../../assets/imgs/my/购物车.png"/></router-link>
  </div>
</template>
<script>
  export default {
    name: 'Link',
    methods:{
      goTop () {
        if(document.documentElement.scrollTop>0){
          document.documentElement.scrollTop=0;
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .mylink
    cursor:pointer;
    img
      float:right;
      margin-right:22%;
      width:calc(8vh);
      height:calc(8vh);
      margin-top:60%;
</style>
