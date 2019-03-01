<template>
  <div>
    <div class="mylink">
      <img src="../../assets/imgs/my/gotop.png" @click="goTop" class="img"/>
      <img src="../../assets/imgs/my/sale.png"/>
      <img src="../../assets/imgs/my/购物车.png"/>
    </div>
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
    margin-top:120px;
    cursor:pointer;
    margin-left:10px;
    img
      width:50px;
      height:50px;
      background-size:50px 50px;
      margin-top:50px;
</style>
