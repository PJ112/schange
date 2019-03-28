<template>
<div>
  <div class="myBuy" v-show="BuyList.length>0">
    <h1 class="myBuy-h1">已购入</h1>
    <li class="myBuy-li" v-for="(item,index) in BuyList" :key="index">
      <div class="myBuy-li-content">
        <div class="myBuy-li-left">
        <img class="myBuy-li-left-img" :src="item.imageList.address"/>
        </div>
        <div class="myBuy-li-right">
          <div class="myBuy-li-right-content">{{item.content}}</div>
          <div class="myBuy-li-right-jifen">价格:{{item.goods.price}}</div>
          <!--点击评价的时候把商品的id传递-->
          <button class="myBuy-li-right-Abutton" @click="showAssess(item.goods.id,item.goods.sellerId)">评价</button>
          <button class="myBuy-li-right-button" @click="lookCommence">查看评价</button>
        </div>
      </div>
    </li>
  </div>
  <div class="myBuy-li-assess" v-show="showCommence">
    <input
      type="text"
      class="myBuy-li-assess-input"
      placeholder="请输入评价"
      @keyup.enter="goPublish()"
      v-model="inputValue"
    />
    <div class="myBuy-li-assess-button">
      <button class="myBuy-li-assess-button-handin" @click="goPublish()">发表</button>
      <button class="myBuy-li-assess-button-handout" @click="goCancel">取消</button>
    </div>
  </div>
  <div class="myBuy-no" v-show="BuyList.length===0">您还没有购买任何商品哦！</div>
</div>
</template>

<script>
  export default {
    name: "MyBuy",
    data() {
      return {
        BuyList:[],

        showCommence:false,

        //传递给后端的数据
        sellerId:Number,
        goodsId:Number,
        inputValue:'',
        contentStatus:1
      }
    },
    props:{
      userId:Number,
    },
    methods:{
      goCancel(){
        this.showCommence = false
      },
      lookCommence(){

      },
      goPublish(){
        if(this.inputValue=== ""){
        }else{
          let _this = this
          $.ajax({
            url: "/api/sunny/comment/add",
            async: true,
            type: 'GET',
            data: {
              "buyerId":_this.userId.userId,
              "sellerId":_this.sellerId,
              "goodsId":_this.goodsId,
              "tbContent.contents":_this.inputValue
            },
            success: function (data) {
              _this.showCommence = false
             alert("发表成功！")
            },
            error: function () {
            },
            dataType: 'json'
          })
        }
      },
      showAssess(id,seller){
        this.showCommence = true
        this.sellerId = seller
        this.goodsId = id
      },
    },
    created(){
      let _this = this
      $.ajax({
        url: "/api/sunny/goods/findBoughtGoods",
        async: true,
        type: 'GET',
        data: {
          "buyerId":_this.userId.userId,
        },
        success: function (data) {
          // _this.BuyList = data.data
          // alert(_this.BuyList)
        },
        error: function () {

        },
        dataType: 'json'
      })
    },
  }
</script>

<style lang="stylus" scoped>
  .assess{
    display:none
  }
  .myBuy-li-assess
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align:center
    height: 100%;
    background-color: rgba(0,0,0,.5);
    z-index: 100;
    font-size: 16px;
    border:1px solid transparent;
    .myBuy-li-assess-input
      margin-top: 20%;
      width:50%;
      height:10%;
      border-radius:5px;
    .myBuy-li-assess-button
      width:100%;
      margin-top:3%;
      .myBuy-li-assess-button-handin,.myBuy-li-assess-button-handout
        cursor:pointer;
        color: white;
        border-radius:5px;
        width:10%;
        height:20%;
        background:#85cab5;
  .myBuy-no
    height:calc(78vh)
    line-height:calc(78vh)
    color:red;
    width:100%;
    margin-left:40%;
  .myBuy
    z-index:-1
    margin-left:8%;
    margin-top:32px;
    margin-bottom:3%;
    min-height:calc(90vh)
    .myBuy-h1
      display:inline-block
      font-size:18px;
      color:#2b2a2a
      margin-bottom:3%;
    .myBuy-li
      list-style:none;
      margin-top:20px;
      width:90%;
      margin-bottom:3%;
      min-height:calc(23vh);
      .myBuy-li-content
        box-shadow:0 0px 9px rgba(0,0,0,0.1);
        border-radius:5px;
        height:calc(23vh);
        .myBuy-li-left
          display:inline-block
          vertical-align:top;
          height:calc(23vh);
          width:30%;
          border-radius:5px;
          img
            width:100%;
            height:calc(23vh);
            background-size:100% 150px;
        .myBuy-li-right
          display:inline-block
          vertical-align:top;
          height:180px;
          width:66%;
          border-radius:5px;
          .myBuy-li-right-content
            color:#8d8d8d;
            margin-top:20px;
            margin-left:5%;
          .myBuy-li-right-jifen
            display:inline-block;
            margin-top:13%;
            margin-left:5%;
            width:30%;
          .myBuy-li-right-Abutton
            display:inline-block;
            float:right;
            margin-top:12%;
            margin-right:2%;
            font-size:13px;
            border-radius:5px;
            width:60px;
            height:25px;
            color: white;
            cursor:pointer;
            background:#85cab5;
          .myBuy-li-right-button
            display:inline-block;
            float:right;
            margin-top:12%;
            margin-right:2%;
            font-size:13px;
            border-radius:5px;
            width:60px;
            height:25px;
            color: white;
            cursor:pointer;
            background:#85cab5;
</style>
