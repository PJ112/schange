<template>
  <div class="login">
   <div class="login-logo">
     <img src="./resource/schange.png" />
   </div>
    <div class="content-way">
      <router-link  class="way-res" to="/resgister">注册</router-link>
      <router-link   class="way-log" to="/loginin">登录</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="stylus" scoped>
  .login
    height: calc(100vh);
    background:red;
    .login-logo
      text-align: center;
      img
        width:420px;
        height:120px;
        margin-top:5%;
    .content-way
      font-size:16px
      width:calc(50vh);
      height:calc(10vh);
      background-color:rgba(0,0,0,0.9);
      box-shadow:0 3px 9px rgba(0,0,0,0.5)
      border-radius:10px;
      margin:3% auto;
      .way-res
        display:inline-block;
        color:white;
        margin-top:10%;
        margin-left:10%;
        &.router-link-active
          color:#67d49d
      .way-log
        display:inline-block;
        float right;
        color:white;
        margin-top:10%;
        margin-right:10%;
        &.router-link-active
          color: #67d49d
</style>
