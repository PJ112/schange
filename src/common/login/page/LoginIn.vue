<template>
 <div>
   <div class="loginIn">
     <input class="loginIn-user" type="text" placeholder="用户名" v-model="user" maxlength="11" value="user" />
     <input class="loginIn-pas" type="password" placeholder="密码" v-show="!showPas" v-model="pass"/>
     <input class="loginIn-pas" type="text" placeholder="密码" v-show="showPas" v-model="pass"/>
     <input class="loginIn-test" type="text" placeholder="验证码"/>
     <img class="loginIn-img"/>
     <button class="loginIn-button" @click="go">登录</button>
     <i class="iconfont loginIn-yanjing" @click="show" v-show="isShow">&#xe669;</i>
     <i class="iconfont loginIn-yanjing" @click="show" v-show="!isShow">&#xe625;</i>
   </div>
   <transition
     name="fade"
   >
     <alert v-if="alertDara"
            :alertDara="alertDara" @alertBack="alertBackFn" @alertSure="alertSureFn"></alert>
     <alert v-if="alertData"
            :alertData="alertData" @alertBack="alertBackFn" @alertSure="alertSureFn"></alert>
   </transition>

 </div>
</template>

<script>
  import Alert from '../../Alert/Alert'
  export default {
    name: 'LoginIn',
    components: {Alert},
    data () {
      return {
        showPas: false,
        isShow:false,
        user:'',
        alertDara:''
      }
    },
    methods: {
      show() {
        this.showPas = !this.showPas;
        this.isShow = !this.isShow
      },
      go() {
        if(this.user === ''){
          // let alertDara = {
          //   titleColor: "#abd9ca",
          //   content: "请输入账号和密码！",
          //   contentColor: "gray",
          //   btn: ["确定"],
          //   btnColor: ["", ""],
          //   btnBColor: ["#abd9ca", "#abd9ca"]
          // };
          // this.alertDara = alertDara;
        }
        else{
          $.ajax({
            type: "GET",
            url: "/api/sunny/user/login",
            data: {"username": this.username, "password": this.password},
            dataType: "json",
            async: true,
            // jsonp: "callback",
            success: function (res) {
               if (res.status === 200) {
                this.$router.push({
                  path: '/index'
                })
                this.$store.dispatch('updateUserAsyc', this.user)
              } else  {
                let alertData = {
                  titleColor: "#abd9ca",
                  content: "您的账号或密码错误！",
                  contentColor: "gray",
                  btn: ["确定"],
                  btnColor: ["", ""],
                  btnBColor: ["#abd9ca", "#abd9ca"]
                };
                this.alertData = alertData;
              }
            },
            error: function () {
              console.log("获取失败");
            }
          })
        }
      },
      alertBackFn(data) {
        this.alertDara = '';
        this.user = '';
        this.pass = ''
      },
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/iconfont/iconfont.css"
  /*::-webkit-input-placeholder*/
  .loginIn
    margin-left:10%;
    font-size:12px;
    width:calc(50vh);
    height:calc(44vh);
    background-color:rgba(0,0,0,0.7);
    box-shadow:0 3px 9px rgba(0,0,0,0.5)
    border-radius:10px;
    margin:-5% auto;
    .loginIn-user
      margin-left:10%;
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
      margin-left:10%;
    .loginIn-test
      margin-top:6%;
      width:calc(28vh);
      height:calc(4.8vh);
      border-radius:5px;
      margin-left:10%;
     .loginIn-img
      margin-top: 6%;
      width:calc(10vh);
      height:calc(4.8vh);
      background:blueviolet;
      margin-left:3%;
    .loginIn-button
      margin-left:10%;
      margin-top:8%;
      width:calc(40vh);
      height:calc(5.2vh);
      background:#67d49d;
      border-radius:5px
      font-size:18px;
      font-weight:bolder;
      color:#fff;
      cursor:pointer
    .loginIn-yanjing
      cursor:pointer
      display:block;
      margin-left:82%;
      margin-top:-42%;
      color:black;
      font-size:18px;
    &.fade-enter-active, &.fade-leave-active {
      transition: opacity 0.5s;
    }
    &.fade-enter, &.fade-leave-to {
      opacity: 0;
    }

</style>
