<template>
  <div :class="{'loginL':loginL,'loginR':loginR}" class="login">
   <div class="login-logo">
     <img src="./resource/schange.png" />
   </div>
    <div class="content-way">
       <router-link  class="way-res" to="/resgister" @click.native="changeBack">注册</router-link>
       <router-link   class="way-log" to="/loginin" @click.native="changeBack">登录</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginL:true,
      loginR:false
    }
  },
  methods:{
    changeBack(){
      this.loginL = !this.loginL
      this.loginR = !this.loginR
    }
  }
}
</script>

<style lang="stylus" scoped>
  .login
    height: calc(100vh);
  .loginL
    background-image:url("./resource/登录/background.png")
  .loginR
      background-image:url("./resource/注册/background.png")
    .login-logo
      text-align: center;
      img
        width:420px;
        height:120px;
        margin-top:5%;
    .content-way
      font-size:16px
      width:calc(50vh);
      height:calc(0vh);
      background-color:rgba(0,0,0,0.7);
      box-shadow:0 3px 9px rgba(0,0,0,0.5)
      border-radius:10px;
      margin:4% auto;
      .way-res
        display:inline-block;
        color:white;
        margin-top:4%;
        margin-left:10%;
        &.router-link-active
          color:#67d49d
      .way-log
        display:inline-block;
        float right;
        color:white;
        margin-top:4%;
        margin-right:10%;
        &.router-link-active
          color: #67d49d
</style>
