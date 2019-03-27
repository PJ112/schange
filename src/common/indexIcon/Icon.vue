<template>
    <div class="icon">
        <span><img src="../../assets/imgs/index/top.png"/></span>
        <span><img src="../../assets/imgs/index/sale.png"/></span>
        <span><img src="../../assets/imgs/index/购物车.png"/></span>
    </div>
</template>

<script>
    export default {
        name: "Icon"
    }
</script>

<style lang="stylus" scoped>
    .icon{
      position: absolute;
      right:-80px;
      bottom :730px;
      span{
        display :block;
        width:60px;
        height 60px;
        img{
          display block;
          width:100%;
          height 100%;
        }
      }


    }
</style>
