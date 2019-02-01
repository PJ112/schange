<template>
  <div class="index-nav">
    <div class="index-nav-icon">
      <img src="../../assets/imgs/index/schange.png">
    </div>
    <div class="index-nav-search">
      <div class="index-nav-search-input">
        <input type="text" placeholder="搜索">
        <img src="../../assets/imgs/index/search.png">
      </div>
    </div>
    <div class="index-nav-login">
            <span class="index-nav-login-img">
              <img src="../../assets/imgs/index/person.png">
            </span>
      <span class="index-nav-loginin">登陆</span>
      <span class="index-nav-register">注册</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Nav.vue"
    }
</script>

<style lang="stylus" scoped>
  .index-nav{
    width :80%;
    height :92px;
    margin: 0 auto;
    text-align :center;
  .index-nav-icon{
    display :inline-block;
    width :275px;
    height :92px;
  img{
    width:100%;
    margin-top :5px;
  }
  }
  .index-nav-search{
    display :inline-block;
    margin-left :92px;
  .index-nav-search-input{
    background-image :url("../../assets/imgs/index/input.png");
    background-repeat no-repeat;
    background-size :100%;
    margin-top 24px;
    width :450px;
    height :45px;
  input{
    display :inline-block;
    margin-left :30px;
    color :#737473;
    font-size :16px;
    height :30px;
    margin-top 6px;
    width :365px;
    font-family "Microsoft Yahei";
  }
  img{
    margin-top :6px;
    display :inline-block;
  }
  }
  }
  .index-nav-login{
    display :inline-block;
    margin-left :90px;
    padding-top :27px;
    font-family: "Microsoft Yahei";
  .index-nav-loginin{
    display :inline-block;
    margin-left :10px;
    color :#85cab5;
    padding-right :8px;
    border-right :2px solid #85cab5;
    font-size :18px;
    margin-top :5px;
  }
  .index-nav-register{
    display :inline-block;
    margin-left :8px;
    color :#85cab5;
    font-size :18px;
    margin-top :5px;
  }
  }
  }
</style>
