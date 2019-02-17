<template>
  <div class="my">
    <div class="my-content">
      <div class="my-header">
        <img src="./resource/schange.png" class="my-logo"/>
        <span v-show="!user">
          <span class="my-register" @click="goRes">| &nbsp;注册</span>
          <span class="my-login" @click="goLogin">登录</span>
        </span>
        <span v-show="user">
          <img src="./resource/userIcon.png" class="my-userIcon" v-show="!img"/>
          <img :src="img.img" v-show="img" class="my-changeUserIcon"/>
        </span>
      </div>
      <div class="my-left">
        <div class="my-top">
          <img src="./resource/userIcon.png" class="my-icon" v-show="!img"/>
          <img :src="img.img" v-show="img" class="my-changeIcon"/>
          <div class="my-name">{{user.user}}</div>
          <div class="my-year">圈龄</div>
          <router-link class="my-LeftButton" to="/mydata">编辑资料</router-link>
        </div>
        <div class="my-bottom">
          <div class="my-BottomLi">
            <router-link class="my-li" to="/mymall">
              <i class="iconfont my-LiIcon">&#xe612;</i>
                积分商城
            </router-link>
            <router-link class="my-li" to="/mycollection">
              <i class="iconfont my-LiIcon-xingxing">&#xe657;</i>
              收藏
            </router-link>
          </div>
        </div>
      </div>
      <div class="my-right">
        <router-view :user="user"></router-view>
      </div>
      <div class="my-link">
        <my-link></my-link>
      </div>
    </div>
  </div>
</template>

<script>
  import MyLink from '../../common/MyLink/Link'
  import {mapState} from 'vuex'
  export default {
    name: 'My',
    methods:{
      goRes() {
        this.$router.push('./resgister')
      },
      goLogin () {
        this.$router.push('./loginin')
      }
    },
    components:{
      MyLink
    },
    computed:{
      ...mapState(['user']),
        ...mapState(['img'])
    }
  }
</script>

<style lang="stylus" scoped>
  .router-link-active
    background:#85cab5;
  .my
    width:100%;
    min-height:calc(100vh);
    background:white;
    .my-content
      margin:0 auto;
      min-height:calc(100vh);
      width:80%;
      background:#e7f4f0;
      .my-header
          height:15%;
          width:100%;
          .my-logo
              width:275px;
              height:92px;
              margin-left:7%;
          .my-userIcon
             width:40px;
             height:40px;
             float:right;
             margin-top:1%;
             margin-right:1%;
          .my-changeUserIcon
            width:40px;
            height:40px;
            border-radius:40px;
            float:right;
            margin-top:1%;
            margin-right:1%;
          .my-login
            float:right;
            margin-top:2%;
            cursor:pointer
          .my-register
            float:right;
            cursor:pointer
            margin-top:2%;
            margin-right:1%;
            margin-left:1%;
      .my-left
          display:inline-block;
          vertical-align:top;
          width:20%;
          height:80%;
          margin-left:7%;
        .my-top
          height:200px;
          text-align:center;
          background:white;
          box-shadow:0 0px 9px rgba(0,0,0,0.1)
          border-radius:5px;
          .my-icon
            margin-top:12%;
            width:66px;
            height:61px;
          .my-changeIcon
            margin-top:12%;
            width:66px;
            height:61px;
            border-radius:60px;
          .my-name
            font-size:24px;
            color:#323233;
            margin-top:4%;
            margin-bottom:4%;
          .my-year
            font-size:12px;
            color:#a3a3a7;
            margin-bottom:6%;
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
          height:250px;
          background:white;
          box-shadow:0 0px 9px rgba(0,0,0,0.1)
          border-radius:5px;
          .my-BottomLi
            display:inline-block;
            margin-top:12%;
            .my-li
              display:inline-block;
              padding-left:42px;
              margin-left:5%;
              margin-right:5%;
              width:70%;
              height:34px;
              line-height:34px;
              font-size:12px;
              color:#323233;
              .my-LiIcon
                color:#85cab5;
                font-size:20px;
                margin-right:15px;
                vertical-align:top;
              .my-LiIcon-xingxing
                font-size:22px;
                color:#85cab5;
                margin-right:15px;
                vertical-align:top;
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
        background:blueviolet;
</style>
