<template>
  <div>
    <div class="myData">
      <h1 class="myData-h1">编辑个人资料</h1>
      用户名<br>
      <input
        type="text"
        class="myData-userInput"
        placeholder="username"
        v-model="username"
      />
      <div class="myData-sex">
        性别
        <div class="myData-sex-detail">
          <img src="../../resource/男.png" class="myData-sex-male" />
          <input type="radio" id="male" name="sex" class="myData-sex-radioInput" value="1"/>
          <img src="../../resource/女.png" class="myData-sex-female"/>
          <input type="radio" id="female" name="sex" class="myData-sex-radioInput" value="2"/>
          <img src="../../resource/保密.png" class="myData-sex-female"/>
          <input type="radio" id="baomi" name="sex" class="myData-sex-radioInput" value="3"/>
        </div>
      </div>
      <div class="myData-tel">
        手机号<br/>
        <input type="text" class="myData-tel-detail" v-model="phone"/>
      </div>
      <div class="myData-tel">
        微信<br/>
        <input type="text"  class="myData-tel-detail" v-model="wechat"/>
      </div>
      <div class="myData-tel">
        所在学校<br/>
        <input type="text" class="myData-tel-detail" v-model="school"/>
      </div>
      <div class="myData-baocun" @click="goBao">
        <img src="../../resource/保存.png"/>
      </div>
    </div>
    <transition name="fade">
      <alert v-if="alertDara"
             :alertDara="alertDara" @alertBack="alertBackFn" @alertSure="alertSureFn" @click.native="goRouter"></alert>
    </transition>
  </div>
</template>

<script>
  import Alert from '../../../../common/Alert/Alert';
  export default {
    name: "MyData",
    components: {Alert},
    data(){
      return {
        alertDara:'',
        wechat:'',
        sex:'',
        phone:'',
        username:'',
        id:Number,
        school:''
      }
    },
    props:{
      user:'',
      userId:'',
      school:'',
      wechat:"",
      phone:''
    },
    methods: {
      goRouter(){
        this.$router.go(0)
      },
      goBao() {
        let _this = this;
        this.sex=$("input:radio[name='sex']:checked").val();
        this.id = this.userId.userId;
        if (!this.username){
          $.ajax({
            url: "/api/sunny/user/update",
            async: true,
            type: 'GET',
            data: {
              "username": _this.username,
              "phone": _this.phone,
              "wechat":_this.wechat,
              "id":_this.id,
              'sex':_this.sex,
              "school":_this.school
            },
            success: function (data) {
              switch(data.message){
                case "更新成功":{
                  let alertDara = {
                    title: "",
                    titleColor: "#abd9ca",
                    content: "修改成功！",
                    contentColor: "gray",
                    btn: ["确定"],
                    btnColor: ["", ""],
                  };
                  _this.alertDara = alertDara;
                  _this.$store.dispatch('updateUserAsyc',_this.username)
                  $.ajax({
                    url: "/api/sunny/user/findOne",
                    async: true,
                    type: 'GET',
                    data: {
                      "id":_this.userId.userId
                    },
                    success: function (data) {
                      if (data){
                        if (data.data){
                          _this.school = data.data.school
                          _this.wechat = data.data.wechat
                          _this.phone = data.data.phone

                        }

                      }

                    },
                    error: function () {

                    },
                    dataType: 'json'
                  })
                  break;
                }
              }
            },
            error: function () {

            },
            dataType: 'json'
          })
        }else{
          $.ajax({
            url: "/api/sunny/user/update",
            async: true,
            type: 'GET',
            data: {
              "phone": _this.phone,
              "wechat":_this.wechat,
              "id":_this.id,
              'sex':_this.sex,
              "school":_this.school
            },
            success: function (data) {
              switch(data.message){
                case "更新成功":{
                  let alertDara = {
                    title: "",
                    titleColor: "#abd9ca",
                    content: "修改成功！",
                    contentColor: "#67d49d",
                    btn: ["确定"],
                    btnColor: ["", ""],
                  };
                  _this.alertDara = alertDara;
                  _this.$store.dispatch('updateUserAsyc',_this.username)
                  break;
                }
              }
            },
            error: function () {

            },
            dataType: 'json'
          })
        }
      },
      alertSureFn(data) {
        this.alertDara = '';
      },
      alertSureFn(data) {
        this.alertDara = '';
      }
    },
    created(){
      this.username = this.user.user
      let _this = this
      $.ajax({
        url: "/api/sunny/user/findOne",
        async: true,
        type: 'GET',
        data: {
          "id":_this.userId.userId
        },
        success: function (data) {
          if (data){
            if (data.data){
              _this.UserSex = data.data.sex
              _this.wechat = data.data.wechat
              _this.phone = data.data.phone
              _this.school = data.data.school
            }


          }

        },
        error: function () {

        },
        dataType: 'json'
      })
    }
  }
</script>

<style lang="stylus" scoped>
  input{
    padding-left:10px;
  }
  .myData
    margin-left:8%;
    margin-top:32px;
    .myData-h1
      font-size:18px;
      color:#323233;
      margin-bottom:34px;
    .myData-userInput
      display:block;
      margin-top:10px;
      width:80%;
      height:45px;
      line-height:45px;
      border:1px solid black;
      border-radius:2px;
    .myData-sex
      margin-top:6%;
      .myData-sex-detail
        margin-top:3%;
        .myData-sex-female
          margin-left:13%;
        .myData-sex-male
          margin-left:3%;
        .myData-sex-radioInput
          margin-left:3%;
    .myData-tel
      margin-top:6%;
      .myData-tel-detail
        display:inline-block
        margin-top:10px;
        width:80%;
        height:45px;
        line-height:45px;
        border:1px solid black;
        border-radius:2px;
    .myData-baocun
      margin-top:6%;
      margin-left:28%;
      cursor:pointer
      padding-bottom:5%;
  .myData-alert
    z-index:100;
    position:fixed
    width:350px;
    height:130px;
    background:whitesmoke;
    border-radius:5px
    margin-left:6%;
    margin-top:-40%;
    text-align:center;
    font-size:20px;
    &.fade-enter-active, &.fade-leave-active {
      transition: opacity 0.5s;
    }
    &.fade-enter, &.fade-leave-to {
      opacity: 0;
    }
    .myData-alert-icon
      font-size:20px;
      float:right;
      display:inline-block;
      color:gray;
      margin-top:2px;
      margin-right:2px;
      cursor:pointer;
    .myData-alert-mes
      margin-top:9%;
    .myData-alert-quxiao, .myData-alert-queding
      display:inline-block;
      margin-top:8%;
      font-size:18px;
      width: 174px;
      height:50px;
      line-height:50px;
      background-color:#abd9ca;
      border-left:1px solid white;
      cursor:pointer;
      color:white;
    .myData-alert-quxiao
      float:left;
    .myData-alert-queding
      float:right;
</style>
