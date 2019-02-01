<template>
  <div class="register">
    <input class="register-user" type="text" placeholder="请输入昵称" v-model="user"/>
    <input class="register-user" type="text" placeholder="请选择学校"/>
    <input class="register-pas" type="password" placeholder="请输入长度为6-16位的密码" v-model="password"/>
    <input class="register-pas" type="password" placeholder="请确认密码" v-show="!showPas" v-model="NewPassword" />
    <input class="register-pas" type="text" placeholder="请确认密码" v-show="showPas" v-model="NewPassword" />
    <input class="register-test" type="text" placeholder="验证码"/>
    <img class="register-img"/>
    <button class="register-button" @click="go">注册</button>
    <i class="iconfont loginIn-yanjing" @click="show" :class="{'isShow': isShow}">&#xe669;</i>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data () {
      return {
        showPas: false,
        isShow:false,
        user:'',
        NewPassword:'',
        password:''
      }
    },
    methods:{
      show () {
        this.showPas = !this.showPas
        this.isShow = ! this.isShow
      },
      go(){
        if(this.user == ''){
          alert('用户名为空！')
        }else if(this.password !== this.NewPassword){
          alert('两次输入密码不同！')
        } else{
          this.$router.push({
            path: '/index',
          })

        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .register
    margin-top:8%;
    font-size:12px;
    width:calc(50vh);
    height:calc(55vh);
    background-color:rgba(0,0,0,0.7);
    box-shadow:0 3px 9px rgba(0,0,0,0.5)
    border-radius:10px;
    margin:-5% auto;
    .register-user
      margin-left:10%;
      width:calc(40vh);
      height:calc(4.8vh);
      border:1px solid gainsboro
      border-radius:5px
      margin-top:6%;
    .register-pas
      margin-left:10%;
      margin-top: 6%;
      width:calc(40vh);
      height:calc(4.8vh);
      border:1px solid gainsboro
      border-radius:5px
    .register-test
      margin-left:10%;
      margin-top: 6%;
      width:calc(28vh);
      height:calc(4.8vh);
      border-radius:5px
    .register-img
      margin-top: 6%;
      width:calc(10vh);
      height:calc(4.8vh);
      background:blueviolet;
      margin-left:3%;
    .register-button
      margin-left:10%;
      margin-top:8%;
      width:calc(40vh);
      height:calc(5.2vh);
      background:#67d49d;
      border-radius:5px
      font-size:18px;
      font-weight:bolder;
      color:#fff;
      cursor:pointer;
    .loginIn-yanjing
      cursor:pointer
      display:block;
      margin-left:82%;
      margin-top:-42%;
      color:black;
      font-size:18px;
    .isShow
      color:#67d49d;
</style>
