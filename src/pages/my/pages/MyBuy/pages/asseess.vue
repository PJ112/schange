<template>
 <div>
   <div v-if="newList.length>0">
     <li class="myBuy-li" v-for="(item,index) in newList" :key="index">
       <div class="myBuy-li-content">
         <div class="myBuy-li-left">
           <img class="myBuy-li-left-img" :src="httpUrl+item.imageList[0].address"/>
         </div>
         <div class="myBuy-li-right">
           <div class="myBuy-li-right-content">{{item.goods.name}}</div>
           <div class="myBuy-li-right-jifen">价格:{{item.goods.price}}</div>
           <!--<button class="myBuy-li-right-button" @click="lookCommence(item.goods.id)">查看评价</button>-->
         </div>
       </div>
       <div class="assess"></div>
     </li>
     <ul class="myPublish-page" >
       <li v-if="pageNum === 1" class="disabled unforepage">上一页</li>
       <li v-else @click="LoadData(pageNum-1)" class="forepage">上一页</li>
       <li
         @click="LoadData(item)"
         v-for="(item,index) in totalPages"
         :key="index"
         :class="[index==pageNum-1?'ItemnumberPage':'numberPage']"
       >{{item}}</li>
       <li v-if="pageNum === totalPages || totalPages === -1" class="disabled unforepage">下一页</li>
       <li  @click="LoadData(pageNum+1)" class="forepage" v-else>下一页</li>
     </ul>
   </div>
   <div class="no-data" v-else >
     <img  class="no-img" src="../../../../../assets/imgs/nothing.jpg"/>
   </div>
 </div>
</template>

<script>
  export default {
    name: "assess",
    data() {
      return {
        BuyList:[],
        pageNum:1,
        total:Number,
        pageSize:3,
        showCommence:false,
        newList:[],
        BuyList:[],

        //传递给后端的数据
        sellerId:Number,
        goodsId:Number,
        inputValue:'',
        contentStatus:1,
        httpUrl:'http://119.23.12.250:8090/images',
      }
    },
    props:{
      userId:Number,
    },
    methods:{
      LoadData(value) {
        this.pageNum = value
        this.newList = this.BuyList.slice((value-1) * this.pageSize, value *this.pageSize)
      },
      lookCommence(id){
        let _this = this
        alert(id)
        $.ajax({
          url: "/api/sunny/comment/findOne",
          async: true,
          type: 'GET',
          data: {
            "id":id,

          },
          success: function (data) {

          },
          error: function () {

          },
          dataType: 'json'
        })
      }
    },
    created(){
      let _this = this
      $.ajax({
        url: "/api/sunny/goods/findBoughtGoods",
        async: true,
        type: 'GET',
        data: {
          "buyerId":_this.userId.userId,
          "status":5
        },
        success: function (data) {
          _this.BuyList = data.data
          _this.total =  data.data.length
          _this. LoadData(1)
        },
        error: function () {

        },
        dataType: 'json'
      })
    },
    computed: {
      totalPages () {
        return Math.ceil(this.total *1 / this.pageSize )
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .no-data{
    height:calc(78vh);
    line-height:calc(78vh);
    width:100%;
  }
  .no-img{
    width:calc(78vh);
    height:calc(78vh);
    background-size:100% 100%;
  }
  .myBuy-li-assess
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align:center
    min-height:calc(66vh)
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
      .myBuy-li-left-img
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
  .myPublish-page
    display: inline-block
    margin:1% 30%;
    .forepage,.unforepage
      display: inline-block;
      cursor:pointer;
    .unforepage
      cursor:not-allowed;
    .numberPage,.ItemnumberPage
      display: inline-block
      cursor:pointer;
      color:black;
      padding:5px;
    .ItemnumberPage
      color:#85cab5;
</style>
