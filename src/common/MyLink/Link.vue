<template>
  <div class="mylink">
    <img src="../../assets/imgs/my/gotop.png" @click="goTop"/>
    <img src="../../assets/imgs/my/sale.png"/>
    <img src="../../assets/imgs/my/购物车.png"/>
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
      width:calc(9vh);
      height:calc(9vh);
      margin-top:20%;
</style>
