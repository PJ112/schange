<template>
    <div class="icon">
        <span class="top" @click="scrollToTop"><img src="../../assets/imgs/index/top.png"/></span>
        <span class="publish"><span style="cursor: pointer;" @click="goToPublish" ><img src="../../assets/imgs/index/sale.png"/></span></span>
        <span class="shopping"><span  style="cursor: pointer;" @click="goToIndexShop" ><img src="../../assets/imgs/index/购物车.png"/></span></span>
    </div>
</template>

<script>
    export default {
        name: "Icon",
        data(){
          return{
            speed:20,
            userId:this.$store.state.userId.userId,
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



          },
          goToPublish(){
            let _this=this;
            if (_this.userId){
              _this.$router.push('/publish');
            }else{
              _this.$router.push('/loginin');
            }
          },
          goToIndexShop(){
            let _this=this;
            if (_this.userId){
              _this.$router.push('/index-shopping');

            }else{
              _this.$router.push('/loginin');
            }
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
