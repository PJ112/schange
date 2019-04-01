<template>
  <div>
    <div class="register">
      <input class="register-user" type="text" placeholder="请输入昵称" v-model="user"/>
      <div class="register-school">
      <span >
        <select class="school-city"  v-model="cityChange">
          <option :value="item.id" v-for="item in cityList" :key="item.id" >{{item.name}}</option>
        </select>
      </span>
        <span>
      <select  class="school-school" v-model="schoolChange">
          <option :value="item.id" v-for="item in newList" :key="item.id"  v-model="scholl">{{item.name}}</option>
      </select>
     </span>
      </div>
      <input class="register-pas" type="password" placeholder="请输入长度为6-16位的密码" v-model="pass"/>
      <input class="register-pas" type="password" placeholder="请确认密码" v-show="!showPas" v-model="NewPassword" />
      <input class="register-pas" type="text" placeholder="请确认密码" v-show="showPas" v-model="NewPassword" />
      <input class="register-test" type="text" placeholder="验证码" v-model="verifyText"/>
      <a
        href="#"
        @click="changeverifyImg()"
      >
        <img class="register-img"  :src="verifyImg"  alt="图片加载失败"/>
      </a>
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
        cityList:'',
        newList:[],
        university:[],
        schoolChange:'--学校',
        verifyImg:"",
        verifyText:"",
        alertDara: '',
        scholl:'',
        verify:String
      }
    },
    methods: {
      show() {
        this.showPas = !this.showPas
        this.isShow = !this.isShow
      },
      changeverifyImg(){
        let num = Math.ceil(Math.random() *10);
        this.verifyImg = 'http://119.23.12.250/sunny/verify?'+num;
      },
      go() {
        this.scholl = this.newList.find(item => item.id === this.schoolChange)['name'];
        this.city = this.cityList.find(item => item.id === this.cityChange)['name'];
        let _this = this;
        if(_this.user===""  || _this.pass==="" || _this.verifyText === "" ){
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
        }else{
          $.ajax({
            url:"/api/sunny/user/register",
            async:true,
            type:'GET',
            data:{
              "username":this.user,
              "password":this.pass,
              "address":this.city,
              "school":this.school
            },
            success:function (data) {
              //注册成功
              //注册失败:用户信息异常
              //注册失败:用户已存在
              switch (data.message){
                case "注册成功":{
                  _this.$router.push("/loginin");
                  _this.$store.dispatch('updateschoolAsyc',_this.scholl);
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
        console.log("点击了取消",data)
      },
      alertSureFn:function(data){
        this.alertDara = '';
        console.log("点击了确定",data)
      }
    },
    watch: {
      cityChange(){
        for(let i=0;i<this.university.length;i++) {
          if (this.cityChange === this.university[i].zone) {
            this.newList.push(this.university[i])
          }
        }
      }
    },
    created(){
      axios.get('../../../static/school.json').then((res)=>{
        const data = res.data
        this.cityList = data.zone
        this.university = data.university
        this.cityChange()
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
      margin-left:10%;
      margin-top:6%;
      .school-city
        width:calc(12vh);
        height:calc(4vh);
        border:1px solid gainsboro
        border-radius:5px
      .school-school
        margin-left:5%;
        width:calc(25vh);
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
</style>
