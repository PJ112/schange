<template>
  <div class="loginIn">
    <input class="loginIn-user" type="text" placeholder="用户名" v-model="user" maxlength="11" />
    <input class="loginIn-pas" type="password" placeholder="密码" v-show="!showPas" v-model="password"/>
    <input class="loginIn-pas" type="text" placeholder="密码" v-show="showPas" v-model="password"/>
    <input class="loginIn-test" type="text" placeholder="验证码"/>
    <img class="loginIn-img"/>
    <button class="loginIn-button">登录</button>
    <div class="loginIn-shadow" :class="{isShow: show}"  @click="moveCircle">
      <span class="shadow-content">{{showPas ? '隐藏':'显示'}}</span>
      <span class="shadow-circle"  :class="{isMove: move}"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginIn',
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
  .loginIn
    margin-top:8%;
    font-size:12px;
    width:calc(50vh);
    height:calc(42vh);
    background-color:rgba(0,0,0,0.9);
    box-shadow:0 3px 9px rgba(0,0,0,0.5)
    border-radius:10px;
    margin:-5% auto;
    .loginIn-user
      margin-left:8%;
      width:calc(40vh);
      height:calc(4.8vh);
      border:1px solid gainsboro
      border-radius:5px
      margin-top:6%;
    .loginIn-pas
      margin-top: 6%;
      width:calc(40vh);
      height:calc(4.8vh);
      border:1px solid gainsboro
      border-radius:5px
      margin-left:8%;
    .loginIn-test
      margin-top:6%;
      width:calc(28vh);
      height:calc(4.8vh);
      border-radius:5px;
      margin-left:8%;
     .loginIn-img
      margin-top: 6%;
      width:calc(10vh);
      height:calc(4.8vh);
      background:blueviolet;
      margin-left:3%;
    .loginIn-button
      margin-left:8%;
      margin-top:8%;
      width:calc(40vh);
      height:calc(5.2vh);
      background:#67d49d;
      border-radius:5px
      font-size:18px;
      font-weight:bolder;
      color:#fff;
    .loginIn-shadow
      position:absolute
      left: 55%;
      top:53.5%;
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
        background:white
    .isShow
      background:#67d49d
</style>
