<template>
  <div class="register">
    <input class="register-user" type="text" placeholder="请输入昵称" v-model="user" maxlength="11" />
    <input class="register-user" type="text" placeholder="请选择学校" v-model="user" maxlength="11" />
    <input class="register-pas" type="password" placeholder="请输入长度为6-16位的密码" v-show="!showPas" v-model="password"/>
    <input class="register-pas" type="text" placeholder="请输入长度为6-16位的密码" v-show="showPas" v-model="password"/>
    <input class="register-pas" type="password" placeholder="请确认密码" v-show="!showPas" v-model="password"/>
    <input class="register-pas" type="text" placeholder="请确认密码" v-show="showPas" v-model="password"/>
    <input class="register-test" type="text" placeholder="验证码"/>
    <img class="register-img"/>
    <button class="register-button">登录</button>
    <!--<div class="register-shadow" :class="{isShow: show}"  @click="moveCircle">-->
      <!--<span class="shadow-content">{{showPas ? '隐藏':'显示'}}</span>-->
      <!--<span class="shadow-circle"  :class="{isMove: move}"></span>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data () {
      return {
        showPas: true,
        user: '',
        password: ''
      }
    },
    methods: {
      moveCircle() {
        this.move = !this.move
        this.showPas = !this.showPas
        this.show = !this.show
        this.showpas = !this.showpas
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
    background-color:rgba(0,0,0,0.9);
    box-shadow:0 3px 9px rgba(0,0,0,0.5)
    border-radius:10px;
    margin:-5% auto;
    .register-user
      margin-left:8%;
      width:calc(40vh);
      height:calc(4.8vh);
      border:1px solid gainsboro
      border-radius:5px
      margin-top:6%;
    .register-pas
      margin-left:8%;
      margin-top: 6%;
      width:calc(40vh);
      height:calc(4.8vh);
      border:1px solid gainsboro
      border-radius:5px
    .register-test
      margin-left:8%;
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
      margin-left:8%;
      margin-top:8%;
      width:calc(40vh);
      height:calc(5.2vh);
      background:#67d49d;
      border-radius:5px
      font-size:18px;
      font-weight:bolder;
      color:#fff;
    .register-shadow
      position:absolute
      left: 55%;
      top:70%;
      width:55px
      height:20px
      line-height:20px
      border-radius:40px
      border:1px solid gainsboro
      color: gainsboro
      font-size:10px
      .isShow
        background:#67d49d
      .shadow-circle
        position:absolute
        left:0px
        top: -2px
        width: 22px
        height:22px
        border-radius:11px
        background:#67d49d;
        transition: transform .3s
      .isMove
        transform: translateX(35px)
        background:white;
    .isShow
      background:#67d49d;
</style>
