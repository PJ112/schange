<template>
  <div>
    <div v-if="list.length>0">
      <div class="myCollection">
        <h1 class="myCollection-h1">我的消息</h1>
        <div v-for="(item,index) in list" :key="index">
          <li class="myCollection-li"
              @click="goContact(item.message.sendId,item.message.goodsId,item.message.reId)"
              @mouseenter="showgoodsImg"
              @mouseleave="hiidengoodsImg"
          >
            <img
              class="myCollection-li-left-img"
              :src="httpUrl+item.sendUser.image.address"
              v-show="item.sendUser.image.address"
            />
            <img
              class="myCollection-li-left-img"
              src="../../../../assets/imgs/index/person.png"
              v-show="!item.sendUser.image.address"
              @mouseenter="showgoodsImg"
              @mouseleave="hiidengoodsImg"
            />
            <div class="myCollection-li-right">
              <div class="myCollection-li-right-header">
                <span class="myCollection-li-right-header-name" >{{item.sendUser.user.username}}</span>
                <span class="myCollection-li-right-header-img">
                <img src="../../../../assets/imgs/my/mycollection/女.png" v-if="item.sendUser.user.sex === 2"/>
                <img src="../../../../assets/imgs/my/mycollection/男.png" v-if="item.sendUser.user.sex === 1"/>
                <img src="../../../../assets/imgs/my/mycollection/保密.png" v-if="item.sendUser.user.sex !== 2 &&item.sendUser.user.sex !==1 "/>
              </span>
                <div v-for="(time,i) in times" v-if="i === index" class="myCollection-li-right-header-time">
                  {{time}}
                </div>
              </div>
              <div class="myCollection-li-right-content">{{item.message.content}}</div>
              <div class="myCollection-li-right-goods" v-show="showImg">
                <img :src="httpUrl+item.image.address">
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
    <div  class="myCollection-no" v-else>你还没有消息哦!</div>
    <alert v-if="alertDara"
           :alertDara="alertDara" @alertBack="alertBackFn" @alertSure="alertSureFn"></alert>
  </div>
</template>

<script>
  import Alert from '../../../../common/Alert/Alert'
  export default {
    name: "MyCollection",
    components: {Alert},
    props:{
      userId:Number,
    },
    data(){
      return{
        alertDara: '',
        list:[],
        httpUrl:'http://119.23.12.250:8090/images',
        times:[],
        showImg:false
      }
    },
    methods:{
      alertBackFn: function(data) {
        this.alertDara = '';
        console.log("点击了取消",data)
      },
      alertSureFn:function(data){
        this.alertDara = '';
        console.log("点击了确定",data)
      },
      showgoodsImg(){
        this.showImg = true
      },
      hiidengoodsImg(){
        this.showImg=false
      },
      goContact(buyerId,goodsId,meId){
        alert(buyerId)  //卖家id
        alert(goodsId) //商品id
        alert(meId)   //用户id
        // alert(this.userId.userId)
        this.$router.push({
          path:'contact-buyer',
          query:{"buyerId":buyerId,"meId":meId,"goodsId":goodsId}
        })
      }
    },
    created(){
      let _this = this
      $.ajax({
        url: "/api/sunny/message/findNewMessage",
        async: true,
        type: 'GET',
        data: {
          "reId":_this.userId.userId
        },
        success: function (res) {
          _this.list = res.data
          console.log(_this.list)
          for (let i = 0 ;i<_this.list.length+1;i++){
            let myDate = new Date(_this.list[i].message.createTime);
            let year = myDate.getFullYear();
            let month = myDate.getMonth() + 1;
            let day = myDate.getDate();
            let hours = myDate.getHours();
            let minutes = myDate.getMinutes();
            let second = myDate.getSeconds();
            _this.times.push(year + '-' + month + '-' + day+' '+hours + ':' + minutes + ':' + second)
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
  .myCollection-no
    height:calc(78vh)
    line-height:calc(78vh)
    color:red;
    width:100%;
    margin-left:40%;
  .myCollection
    margin-left:8%;
    margin-top:32px;
    .myCollection-h1
      display:inline-block
      font-size:18px;
      color:#2b2a2a
      margin-bottom:3%;
    .myCollection-li
      list-style:none;
      cursor:pointer
      margin-top:3%;
      width:90%;
      box-shadow:0 0px 9px rgba(0,0,0,0.1);
      border-radius:5px;
      height:calc(10vh);
      margin-bottom:3%;
      .myCollection-li-left-img
        display:inline-block;
        vertical-align:top;
        margin-top:10px;
        width:50px;
        height:50px;
        border-radius:50px;
        background-size:50px 50px;
        margin-left:20px;
        cursor:pointer
      .myCollection-li-right-buttom
        display:inline-block
        cursor:pointer
        vertical-align:top;
        margin-top:10px;
        position:absolute
        font-size:13px;
        border-radius:50px;
        color:white;
        width:55px;
        height:50px;
        text-align:center;
        line-height:50px;
        margin-left:-55px;
        background-color:#85cab5
      .myCollection-li-right
        display:inline-block
        vertical-align:top;
        color:#8d8d8d;
        width:80%;
        margin-left:3%;
        margin-top:10px;
        .myCollection-li-right-content
          margin-top:2%;
        .myCollection-li-right-goods
          display:inline-block
          float:right;
          cursor:pointer
          margin-top:-10%;
          img
            width:50px;
            height:50px;
            background-size:50px 50px;
        .myCollection-li-right-header-name
          color:black;
        .myCollection-li-right-header-time
          display:inline-block
          margin-left:52%;
          margin-top:-1%;
        .myCollection-li-right-header-img
          margin-left:3%;
          img
            width:15px;
            height:20px;
            background-size:15px 20px;
            display:inline-block
            margin-top:-1%;
</style>
