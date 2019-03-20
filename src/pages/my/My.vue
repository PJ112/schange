<template>
  <div>
    <div class="my">
      <div class="my-content">
        <div class="my-header">
          <img src="./resource/schange.png" class="my-logo"/>
          <span v-show="!user">
          <span class="my-register" @click="goRes">|&nbsp;注册</span>
          <span class="my-login" @click="goLogin">登录</span>
        </span>
          <span v-show="user">
          <i class="my-loginText" v-show="!img" @click="loginOut">退出登录</i>
           <img src="./resource/userIcon.png" class="my-userIcon" v-show="!img"/>
          <img :src="img.img" v-show="img" class="my-changeUserIcon"/>
        </span>
        </div>
        <div class="my-left">
          <div class="my-top">
            <div
              class="my-userImg"
              @mouseenter="showAddUserImg"
              @mouseleave="hiidenAddUserImg">
              <img
                src="./resource/userIcon.png"
                class="my-changeImg"
                v-show="!userInfo.avatar"
              />
              <img
                :src="userInfo.avatar"
                class="my-changeImg"
                v-show="userInfo.avatar"
              />
              <div
                class="iconfont my-choseFile"
                @click.stop="uploadHeadImg"
                v-show="changeuserImg"
              >&#xe615;</div>
              <input
                type="file"
                accept="image/*"
                @change="handleFile"
                class="hiddenInput"
                v-show="changeuserImg"
              />
            </div>
            <div class="my-name">{{user.user}}</div>
            <div class="my-year">圈龄</div>
            <router-link class="my-LeftButton" to="/mydata">编辑资料</router-link>
          </div>
          <div class="my-bottom" >
            <div class="my-BottomLi">
              <router-link
                tag="li"
                class="my-li" to="/mymall"
                :class="{'is-active':$route.meta.active === '/mymall'}"
              >
                <i class="iconfont my-LiIcon">&#xe612;</i>
                积分商城
              </router-link>
              <router-link
                class="my-li"
                to="/mycollection"
                :class="{'is-active':$route.meta.active === '/mycollection'}"
              >
                <i class="iconfont my-LiIconM">&#xe69d;</i>
                消息
              </router-link>
              <router-link
                class="my-li"
                to="/mypublish"
                :class="{'is-active':$route.meta.active === '/mypublish'}"
              >
                <i class="iconfont my-LiIcon">&#xe616;</i>
                已发布
              </router-link>
              <router-link
                class="my-li"
                to="/mybuy"
                :class="{'is-active':$route.meta.active === '/mybuy'}"
              >
                <i class="iconfont my-LiIconB">&#xe650;</i>
                已购入
              </router-link>
              <router-link
                class="my-li"
                to="/myorder"
                :class="{'is-active':$route.meta.active === '/myorder'}"
              >
                <i class="iconfont my-LiIcon">&#xe60c;</i>
                订单管理
              </router-link>
              <router-link
                class="my-li"
                to="/myhjudge"
                :class="{'is-active':$route.meta.active === '/myhjudge'}"
              >
                <i class="iconfont my-LiIconM">&#xe69d;</i>
                历史评价
              </router-link>
            </div>
          </div>
        </div>
        <div class="my-right">
          <router-view :user="user" :userId="userId"></router-view>
        </div>
        <div class="my-link">
          <my-link></my-link>
        </div>
      </div>
    </div>
    <alert v-if="alertDara"
           :alertDara="alertDara" @alertBack="alertBackFn" @alertSure="alertSureFn"></alert>
  </div>
</template>

<script>
  import MyLink from '../../common/MyLink/Link';
  import Alert from '../../common/Alert/Alert'
  import {mapState} from 'vuex'
  export default {
    name: 'My',
    component:{
      Alert,
      MyLink
    },
    data(){
      return{
        userInfo: {
          avatar: ''
        },
      changeuserImg:false,
      alertDara:""
      }
    },
    methods:{
      goRes() {
        this.$router.push('./resgister')
      },
      goLogin () {
        this.$router.push('./loginin')
      },
      loginOut(){
        let alertDara = {
          content: "已退出登录！",
          contentColor: "red",
          btn: ["确定"],
          btnColor: ["", ""]
        };
        this.alertDara = alertDara;
      },
      showAddUserImg(){
        this.changeuserImg = true
      },
      hiidenAddUserImg(){
        this.changeuserImg = false
      },
      // 打开图片上传
      uploadHeadImg () {
        this.$el.querySelector('.hiddenInput').click()
      },
      // 将头像显示
      handleFile(e) {
        let $target = e.target || e.srcElement
        let file = $target.files[0]
        var reader = new FileReader()
        reader.onload = (data) => {
          let res = data.target || data.srcElement
          this.userInfo.avatar = res.result
        }
        reader.readAsDataURL(file)
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
    computed:{
      ...mapState(['user']),
        ...mapState(['img']),
      ...mapState(['userId']),
    },
    created(){
    }
  }
</script>

<style lang="stylus" scoped>
  .my
    width:100%;
    min-height:calc(100vh);
    background:white;
    font-family: simsun;
    .my-content
      margin:0 auto;
      min-height:calc(100vh);
      width:80%;
      background:#e7f4f0;
      .my-header
          height:15%;
          width:100%;
          margin-bottom:1%;
          .my-logo
              width:275px;
              height:92px;
              margin-left:7%;
          .my-userIcon
             width:40px;
             height:40px;
             float:right;
             margin-top:2%;
             margin-right:2%;
          .my-changeUserIcon
            width:40px;
            height:40px;
            border-radius:40px;
            float:right;
            margin-top:1%;
            margin-right:1%;
          .my-loginText
            float:right;
            margin-top:3.5%;
            margin-right:8%;
            color:#85cab5
            font-size:16px;
            cursor:pointer;
          .my-login
            float:right;
            margin-top:3%;
            cursor:pointer
          .my-register
            float:right;
            cursor:pointer
            margin-top:3%;
            margin-right:10%;
            margin-left:1%;
      .my-left
          display:inline-block;
          vertical-align:top;
          width:20%;
          height:80%;
          margin-left:7%;
        .my-top
          height:calc(33vh);
          text-align:center;
          background:white;
          box-shadow:0 0px 9px rgba(0,0,0,0.1)
          border-radius:5px;
          .my-userImg
            display:inline-block
            margin-top:14%;
          .my-changeImg
            width:66px;
            height:61px;
            border-radius:60px;
            cursor:pointer
          .my-choseFile
            margin-top:-29%;
            margin-left:60%;
            cursor:pointer;
            font-size:20px;
            color:black;
            font-weight:bolder;
          .hiddenInput
            display: none;
          .my-name
            font-size:24px;
            color:#323233;
            margin-top:4%;
            margin-bottom:4%;
          .my-year
            font-size:12px;
            color:#a3a3a7;
            margin-bottom:6%;
            margin-top:6%;
          .my-LeftButton
            display:block;
            font-size:13px;
            border-radius:5px;
            width:80px;
            height:25px;
            line-height:25px;
            color: white;
            background:#85cab5;
            margin-left:30%;
            cursor:pointer;
        .my-bottom
          margin-top:15%;
          width:100%;
          height:calc(40vh)
          background:white;
          box-shadow:0 0px 9px rgba(0,0,0,0.1)
          border-radius:5px;
          .my-BottomLi
            display:inline-block;
            margin-top:12%;
            font-size:0;
            .router-link-active
              background:#85cab5;
            .my-li
              display:inline-block;
              padding-left:42px;
              margin-left:5%;
              margin-right:5%;
              width:70%;
              height:34px;
              line-height:34px;
              font-size:12px;
              color:#85cab5;
            .is-active
              color:white;
            .my-LiIcon
              font-size:20px;
              vertical-align:top;
              margin-right:20px;
            .my-LiIconM
              font-size:18px;
              vertical-align:top;
              margin-right:20px;
            .my-LiIconB
              font-size:24px;
              vertical-align:top;
              margin-right:20px;
              margin-left:-1%;
      .my-right
        display:inline-block;
        vertical-align:top;
        margin-left:3%;
        width:63%;
        min-height:75%;
        background:white;
      .my-link
        display:inline-block;
        position:fixed;
        width:6%;
        height:80%;
</style>
