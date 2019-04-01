<template>
    <div class="icon">
        <span class="top" @click="scrollToTop"><img src="../../assets/imgs/index/top.png"/></span>
        <span class="publish"><router-link to="/publish"><img src="../../assets/imgs/index/sale.png"/></router-link></span>
        <span class="shopping"><router-link to="/index-shopping"><img src="../../assets/imgs/index/购物车.png"/></router-link></span>
    </div>
</template>

<script>
    export default {
        name: "Icon",
        data(){
          return{
            speed:20,
          }
        },
        methods:{
          scrollToTop(){
             let time=setInterval(()=>{
                document.documentElement.scrollTop-=this.speed;
                if(document.documentElement.scrollTop<=1000){//当滚动条距离顶部1000时，让速度变慢
                  this.speed=5;

                }
                if(document.documentElement.scrollTop<=0){
                  clearInterval(time);

                }
              })



          }
        }
    }
</script>

<style lang="stylus" scoped>
  .top:hover{
    cursor pointer;
  }
    .icon{
      position:fixed;
      right: 160px;
      top: 500px;

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
