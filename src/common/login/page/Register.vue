<template>
  <div>
    <div class="register">
      <input class="register-user" type="text" placeholder="请输入昵称" v-model="user"/>
      <div class="register-school">
      <span >
        <select class="school-city"  v-model="cityChange" @change="cityName($event)">
          <option   selected>--城市</option>
          <option  v-for="item in cityList" :value="item.id" :key="item.id" v-model="city">{{item.name}}</option>
        </select>
      </span>
        <span>
      <select  class="school-city" v-model="provinceChange" @change="Province($event)">
        <option  selected>--省份</option>
        <option  v-for="(province,index) in PList" :key="index" :value="province">{{province}}</option>
      </select>
     </span>
        <span>
      <select  class="school-school" v-model="schoolChange">
        <option selected>--学校</option>
        <option  v-for="item in NewList" :key="item.id"  v-model="school">{{item.name}}</option>
      </select>
     </span>
      </div>
      <input class="register-pas" type="password" placeholder="请输入长度为6-16位的密码" v-model="pass"/>
      <input class="register-pas" type="password" placeholder="请确认密码" v-show="!showPas" v-model="NewPassword" />
      <input class="register-pas" type="text" placeholder="请确认密码" v-show="showPas" v-model="NewPassword" />
     <div class="register-v">
       <input class="register-test" type="text" placeholder="验证码" v-model="verifyText"/>
       <a
         href="#"
         class="loginIn-verify"
         @click.native="generatedCode"
       >{{ccode}}</a>
     </div>
      <button class="register-button" @click="go">注册</button>
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
  import axios from 'axios'
  import Alert from '../../Alert/Alert'
  export default {
    name: 'Register',
    components: {Alert},
    data() {
      return {
        showPas: false,
        isShow: false,
        user: '',
        NewPassword: '',
        pass: '',
        cityChange:'--城市',
        CityName:"",
        provinceChange:'--省份',
        cityList:'',
        PList:[],
        NewList:[],
        university:[],
        schoolChange:'--学校',
        verifyImg:"",
        verifyText:"",
        alertDara: '',
        school:'',
      }
    },
    methods: {
      Province(){
        let province = event.target.value;
        let _this=this
        $.ajax({
          url:"http://119.29.166.254:9090/api/university/getUniversityByCityName?name="+province,
          async:true,
          type:'GET',
          data:{

          },
          success:function (data) {
            _this.NewList = data
            console.log(_this.NewList)
          },
          error:function () {

          },
          dataType:'json'
        })
      },
      cityName(event){
        let id = event.target.value;
        console.log(id)
        let _this=this
        $.ajax({
          url:"http://119.29.166.254:9090/api/province/getCitiesByProvinceId?id="+id,
          async:true,
          type:'GET',
          data:{

          },
          success:function (data) {
            _this.PList = data
            console.log(_this.PList)
          },
          error:function () {

          },
          dataType:'json'
        })
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
      },
      show() {
        this.showPas = !this.showPas
        this.isShow = !this.isShow
      },
      go() {
        let _this = this;
        console.log(_this.provinceChange)
        console.log(_this.schoolChange)
        if(_this.user===""  || _this.pass===""){
          let alertDara = {
            content: "信息填写不完整！",
            contentColor: "red",
            btn: ["确定"],
            btnColor: ["", ""]
          };
          this.alertDara = alertDara;
        }else if (this.pass !== this.NewPassword){
          let alertDara = {
            content: "两次输入密码不同！",
            contentColor: "red",
            btn: ["确定"],
            btnColor: ["", ""]
          };
          this.alertDara = alertDara;
          this.pass =""
          this.NewPassword =""
        }else if(this.pass.length<5){
          let alertDara = {
            content: "请输入正确的密码格式！",
            contentColor: "red",
            btn: ["确定"],
            btnColor: ["", ""]
          };
          this.alertDara = alertDara;
          this.pass =""
          this.NewPassword =""
        }else if(this.verifyText !== this.ccode){
          let alertDara = {
            content: "验证码错误！",
            contentColor: "red",
            btn: ["确定"],
            btnColor: ["", ""]
          };
          this.alertDara = alertDara;
          this.verifyText = ""
        }else if(_this.provinceChange === '--省份' &&_this.schoolChange ==='--学校' ){
          $.ajax({
            url:"http://119.23.12.250/sunny/user/register",
            async:true,
            type:'GET',
            data:{
              "username":this.user,
              "password":this.pass,
            },
            success:function (data) {
              //注册成功
              //注册失败:用户信息异常
              //注册失败:用户已存在
              switch (data.message){
                case "注册成功":{
                  _this.$router.push("/loginin");
                  _this.$store.dispatch('updateUserAsyc',_this.user);
                  break;
                }
                case "注册失败:用户信息异常":
                  console.log("注册失败:用户信息异常");
                  break;
                case "注册失败:用户已存在":{
                  let alertDara = {
                    content: "用户已存在！",
                    contentColor: "red",
                    btn: ["确定"],
                    btnColor: ["", ""]
                  };
                  _this.alertDara = alertDara;
                }
              }
            },
            error:function () {

            },
            dataType:'json'
          })
        }else{
          $.ajax( {
            url:"http://119.23.12.250/sunny/user/register",
            async:true,
            type:'GET',
            data:{
              "username":this.user,
              "password":this.pass,
              "address":_this.provinceChange,
              "school":_this.schoolChange
            },
            success:function (data) {
              //注册成功
              //注册失败:用户信息异常
              //注册失败:用户已存在
              switch (data.message){
                case "注册成功":{
                  _this.$router.push("/loginin");
                  _this.$store.dispatch('updateUserAsyc',_this.user);
                  break;
                }
                case "注册失败:用户信息异常":
                  console.log("注册失败:用户信息异常");
                  break;
                case "注册失败:用户已存在":{
                  let alertDara = {
                    content: "用户已存在！",
                    contentColor: "red",
                    btn: ["确定"],
                    btnColor: ["", ""]
                  };
                  _this.alertDara = alertDara;
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
      },
      alertSureFn:function(data){
        this.alertDara = '';
      }
    },
    mounted(){
      this.generatedCode()
    },
    watch:{
    },
    created(){
      this.generatedCode()
      let _this = this
      $.ajax({
        url:"http://119.29.166.254:9090/api/provinces",
        async:true,
        type:'GET',
        data:{
        },
        success:function (data) {
          _this.cityList = data
        console.log(data)
        },
        error:function () {

        },
        dataType:'json'
      })
    },
  }
</script>

<style lang="stylus" scoped>
  &.fade-enter-active, &.fade-leave-active {
    transition: opacity 0.5s;
  }
  &.fade-enter, &.fade-leave-to {
    opacity: 0;
  }
  .register
    margin-top:8%;
    font-size:12px;
    width:calc(50vh);
    height:calc(59vh);
    background-color:rgba(0,0,0,0.7);
    box-shadow:0 3px 9px rgba(0,0,0,0.5)
    border-radius:10px;
    margin:-5% auto;
    .register-school
      margin-left:8%;
      margin-top:6%;
      .school-city
        width:calc(10vh);
        height:calc(4vh);
        border:1px solid gainsboro
        border-radius:5px
        margin-left:2%
        margin-right:2%;
      .school-school
        margin-left:3%;
        width:calc(15vh);
        height:calc(4vh);
        border:1px solid gainsboro
        border-radius:5px
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
    .register-v
       margin-top: 6%;
      .register-test
        margin-left:10%;
        margin-right:4%;
        width:calc(28vh);
        height:calc(4.8vh);
        border-radius:5px
     .loginIn-verify
         display:inline-block;
         cursor:pointer;
         width:calc(10vh);
         text-align:center;
         line-height:calc(4.8vh);
         height:calc(4.8vh);
         border-radius:5px;
         border:1px solid #67d49d
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
</style>
