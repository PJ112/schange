<template>
  <div>
    <div class="loginIn">
      <input class="loginIn-user" type="text" placeholder="用户名" v-model="user" maxlength="11" />
      <input class="loginIn-pas" type="password" placeholder="密码" v-show="!showPas" v-model="pass"/>
      <input class="loginIn-pas" type="text" placeholder="密码" v-show="showPas" v-model="pass"/>
      <input class="loginIn-test" type="text" placeholder="验证码" v-model="verifyText" @keyup.enter="go"/>
      <a
        href="#"
        @click="generatedCode"
        class="loginIn-verify"
      >
        <span>{{ccode}}</span>
      </a>
      <button class="loginIn-button" @click="go">登录</button>
      <i class="iconfont loginIn-yanjing" @click="show" v-show="isShow">&#xe669;</i>
      <i class="iconfont loginIn-yanjing" @click="show" v-show="!isShow">&#xe625;</i>
    </div>
    <transition
      name="fade"
    >
      <alert v-if="alertDara"
             :alertDara="alertDara" @alertBack="alertBackFn" @alertSure="alertSureFn"></alert>
    </transition>
  </div>
</template>

<script>
  import Alert from '../../Alert/Alert'
  import {mapState} from 'vuex'
  export default {
    name: 'LoginIn',
    components: {Alert},
    data () {
      return {
        user:this.$store.state.user.user,
        pass:'',
        showPas: false,
        isShow:false,
        verifyText:'',
        verifyImg:'',
        alertDara: '',
        userId:0,
        ccode:''
      }
    },

    methods: {
      show () {
        this.showPas = !this.showPas;
        this.isShow = ! this.isShow
      },
      changeverifyImg(){
        let num = Math.ceil(Math.random() *10);
        this.verifyImg = 'http://119.23.12.250/sunny/verify?'+num;
      },
      go(){
        let _this = this;
        if(this.user === "" || this.pass === ""){
          let alertDara = {
            content: "请输入用户名或密码！",
            contentColor: "red",
            btn: ["确定"],
            btnColor: ["", ""]
          };
          _this.alertDara = alertDara;
        }else if(_this.verifyText === ""){
          let alertDara = {
            content: "请输入验证码！",
            contentColor: "red",
            btn: ["确定"],
            btnColor: ["", ""]
          };
          _this.alertDara = alertDara;
        }
         else if(_this.verifyText !== _this.ccode){
          let alertDara = {
            content: "验证码错误！",
            contentColor: "red",
            btn: ["确定"],
            btnColor: ["", ""]
          };
          _this.alertDara = alertDara;
         }
        else{
          $.ajax({
            url:"/api/sunny/user/login",
            async:false,
            type:'GET',
            data:{
              "username":this.user,
              "password":this.pass,
            },
            success:function (data) {
              //登陆成功
              //登陆失败:密码不正确
              //登陆失败:指定用户不存在
              switch (data.message){
                case "登陆成功":{
                  // console.log(data.data.username+":"+data.data.id);
                  _this.user=data.data.username;
                  _this.userId = data.data.id;
                  _this.$store.dispatch('updateUserAsyc',data.data.username);
                  _this.$store.dispatch('updateuserIdAsyc', _this.userId);
                  _this.$router.push("/index");
                  break;
                }
                case "登陆失败:密码不正确":{
                  let alertDara = {
                    content: "密码错误！",
                    contentColor: "red",
                    btn: ["确定"],
                    btnColor: ["", ""]
                  };
                  _this.alertDara = alertDara;
                  this.pass =""
                  break;
                }
                case "登陆失败:指定用户不存在":{
                  let alertDara = {
                    content: "指定用户不存在！",
                    contentColor: "red",
                    btn: ["确定"],
                    btnColor: ["", ""]
                  };
                  _this.alertDara = alertDara;
                  this.user = "";
                  this.pass =""
                  break;
                }
              }
            },
            error:function () {
            },
            dataType:'json'
          })
        }
      },
      alertBackFn: function(data) {
        this.alertDara = '';
        console.log("点击了取消",data)
      },
      alertSureFn:function(data){
        this.alertDara = '';
        console.log("点击了确定",data)
      },
      generatedCode(){
        const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
          'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        let code = ''
        for (let i = 0; i < 4; i++) {
          let index = Math.floor(Math.random() * 36)
          code += random[index]
        }
        this.ccode = code
      }
  },
    created(){
      this.user = this.$store.state.user.user
    },
    mounted(){
      this.generatedCode()
    },
    computed:{
  },
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/iconfont/iconfont.css";
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
    .loginIn-verify
      position:absolute;
      top:60.5%
      margin-left:1%;
      width:calc(10vh);
      text-align:center;
      line-height:calc(4.8vh)
      height:calc(4.8vh);
      border-radius:5px;
      border:1px solid #67d49d
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
</style>
