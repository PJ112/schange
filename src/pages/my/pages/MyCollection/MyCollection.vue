<template>
  <div>
    <div v-if="list.length>0">
      <div class="myCollection">
        <h1 class="myCollection-h1">我的消息</h1>
        <div v-for="(item,index) in list" :key="index">
          <li
             :class="{'NmyCollection-li':Messflag,'myCollection-li':!Messflag}"
              @click="goContact(item.message.sendId,item.message.goodsId,item.message.reId)"
          >
            <img
              class="myCollection-li-left-img"
              :src="getImg(item.sendUser)"
              v-show="item.sendUser.image"
            />
            <img
              class="myCollection-li-left-img"
              src="../../../../assets/imgs/index/person.png"
              v-show="!item.sendUser.image"
            />
            <div class="myCollection-li-right">
              <div class="myCollection-li-right-header">
                <span class="myCollection-li-right-header-name" >{{item.sendUser.user.username}}</span>
                <span class="myCollection-li-right-header-img">
                <img class="myCollection-li-right-header-img-sex" src="../../../../assets/imgs/my/mycollection/女.png" v-if="item.sendUser.user.sex === 2"/>
                <img class="myCollection-li-right-header-img-sex" src="../../../../assets/imgs/my/mycollection/男.png" v-if="item.sendUser.user.sex === 1"/>
                <img class="myCollection-li-right-header-img-sex" src="../../../../assets/imgs/my/mycollection/保密.png" v-if="item.sendUser.user.sex !== 2 &&item.sendUser.user.sex !==1 "/>
              </span>
                <div v-for="(time,i) in times" v-if="i === index" class="myCollection-li-right-header-time">
                  {{time}}
                </div>
              </div>
              <div class="myCollection-li-right-content">{{item.message.content}}</div>
              <div class="myCollection-li-right-goods" v-show="showImg">
                <!--<img :src="getImg(item)" class="myCollection-li-right-header-img-goods">-->
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
        showImg:true,
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
          _this.list = res.data;
          let myDate='';
          for (let i = 0 ;i<_this.list.length+1;i++){
            if (_this.list){
              if (_this.list[i]){
                if (_this.list[i].message){
                   myDate= new Date(_this.list[i].message.createTime);
                  let year = myDate.getFullYear();
                  let month = myDate.getMonth() + 1;
                  let day = myDate.getDate();
                  let hours = myDate.getHours();
                  let minutes = myDate.getMinutes();
                  let second = myDate.getSeconds();
                  _this.times.push(year + '-' + month + '-' + day+' '+hours + ':' + minutes + ':' + second)
                }
              }
            }

          }
        },
        error: function () {

        },
        dataType: 'json'
      })
      $.ajax({
        url: "/api/sunny/message/findUnreadMessage",
        async: true,
        type: 'GET',
        data: {
          "userId":_this.userId.userId
        },
        success: function (data) {
          if (data){
            _this.Messflag = data.flag
//            alert(_this.Messflag)
          }
        },
        error: function () {

        },
        dataType: 'json'
      })
    },
    computed:{
      getImg(){
        return function (icon) {
          if (icon){
            if (icon.image){
              if (icon.image.address){
                return this.httpUrl+icon.image.address;
              }
            }
          }

        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .NmyCollection-li{
    list-style:none;
    cursor:pointer
    margin-top:3%;
    width:90%;
    box-shadow:0 0px 9px red;
    border-radius:5px;
    height:calc(10vh);
    margin-bottom:3%
  }
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
      margin-bottom:3%
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
        cursor:pointer;
        margin-top:-6%
      .myCollection-li-right-header-img-goods
        float:right;
        margin-right:20px;
        margin-top:-25%;
        width:50px;
        height:50px;
        background-size:50px 50px;
        display:inline-block
      .myCollection-li-right-header-name
        color:black;
      .myCollection-li-right-header-time
        display:inline-block
        margin-left:48%;
        margin-top:-1%;
      .myCollection-li-right-header-img
        margin-left:3%;
      .myCollection-li-right-header-img-sex
        width:15px;
        height:20px;
        margin-top:-1%;
</style>
