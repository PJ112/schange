<template>
  <div class="my">
    <div class="my-content">
      <div class="my-header">
        <img src="../../assets/imgs/sellers/schange.png" class="my-logo"/>
        <span>
           <span class="my-header-loginout" @click="goOut">退出</span>
          <img  class="my-userIcon"/>
        </span>
      </div>
      <div class="my-left">
        <div class="my-top">
          <img   class="my-changeIcon"/>
          <div class="my-name">{{user}}</div>
          <div class="my-year">圈龄{{day}}个月</div>
          <div class="my-scholl">学校：{{school}}</div>
          <div class="my-LeftButton" @click="goMes" >私信卖家</div>
        </div>
      </div>
      <div class="my-right">
        <div class="my-right-header">
          <router-link to="./sellerspublish" class="my-right-header-link">已发布</router-link>
          <router-link to="./sellershjudge" class="my-right-header-link">历史评价</router-link>
        </div>
        <router-view :sellerId="sellerId"></router-view>
      </div>
      <div class="my-link">
        <my-link></my-link>
      </div>
    </div>
  </div>
</template>

<script>
  import MyLink from '../../common/MyLink/Link'
  export default {
    name: 'SellersMes',
    data(){
      return{
        sellerId:this.$route.query.id,
        user:'',
        day:'',
        school:''
      }
    },
    methods:{
      goOut(){
        this.$router.push('./sale-product')
      },
      goMes(){
        this.$router.push({
          path:'./contact-seller'
        })
      }
    },
    components:{
      MyLink
    },
    created(){
      let _this = this
      // alert(this.sellerId)
      $.ajax({
        url:"/api/sunny/user/findOne",
        async:true,
        type:'GET',
        data:{
          "id":_this.sellerId,
        },
        success:function (data) {
          _this.user = data.data.username
          let nowTime=new Date().getTime();
          let createTime=data.data.creatTime;
          let day=Math.ceil((nowTime-createTime)/1000/60/60/24);
          _this.day = day
          let school = data.data.school
          _this.school = school
        },
        error:function () {
        },
        dataType:'json'
      })
    },
  }
</script>

<style lang="stylus" scoped>
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
        margin-bottom:1%;
        .my-logo
          width:275px;
          height:92px;
          margin-left:7%;
        .my-userIcon
          vertical-align:top;
          width:40px;
          height:40px;
          float:right;
          margin-top:1%;
          margin-right:1%;
        .my-header-loginout
          float:right;
          margin-top:2%;
          margin-right:10%;
          margin-left:1%;
          color:#85cab5;
          font-size:16px;
          cursor:pointer;
        .my-login
          float:right;
          margin-top:2%;
          cursor:pointer
        .my-register
          float:right;
          cursor:pointer
          margin-top:2%;
          margin-right:5%;
          margin-left:1%;
      .my-left
        display:inline-block;
        vertical-align:top;
        width:20%;
        margin-left:7%;
      .my-top
        height:calc(80vh);
        text-align:center;
        background:white;
        box-shadow:0 0 9px rgba(0,0,0,0.1)
        border-radius:5px;
        .my-top-hidden
          height:calc(60vh);
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
          margin-top:4%;
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
          margin-top:6%;
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
            font-size:22px;
            vertical-align:top;
            margin-right:20px;
      .my-right
        display:inline-block;
        vertical-align:top;
        margin-left:3%;
        width:63%;
        min-height:75%;
        background:white;
        .my-right-header
          height:calc(7vh);
          line-height:calc(7vh)
          display:flex;
          .my-right-header-link
            width:50%;
            flex:1;
            text-align:center;
            font-size:15px;
            color:#85cab5;
          .router-link-active
            background-color:#85cab5
            color:white;
      .my-link
        display:inline-block;
        position:fixed;
        width:6%;
        height:80%;
</style>
