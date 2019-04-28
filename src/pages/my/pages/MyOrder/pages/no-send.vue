<template>
  <div>
    <div v-if="list.length>0">
      <li class="myOrder-li" v-for="(item,index) in list" :key="index">
        <div class="myOrder-li-left">
          <img class="myOrder-li-left-img" :src="httpUrl+item.goods.imageList[0].address"/>
        </div>
        <div class="myOrder-li-right">
          <div class="myOrder-li-right-content">{{item.goods.goods.name}}</div>
          <div class="myOrder-li-right-top">
            <div class="myOrder-li-right-jifen">价格:{{item.goods.goods.price}}</div>
            <button class="myOrder-li-right-button"  v-show="item.order.status === 2">待发货
            </button>
            <div class="myOrder-li-right-text"  v-show="item.order.status === 2">付款成功</div>
          </div>
        </div>
      </li>
      <!--分页-->
      <ul class="myOrder-page">
        <li v-if="pageNum === 0" class="disabled unforepage">上一页</li>
        <li  @click="LoadData(pageNum-1)" class="forepage" v-else>上一页</li>
        <li
          @click="LoadData(item-1)"
          v-for="(item,index) in totalPages"
          :key="index"
          :class="[index==pageNum?'ItemnumberPage':'numberPage']"
        >{{item}}</li>
        <li v-if="pageNum === totalPages-1 || totalPages === -1" class="disabled unforepage">下一页</li>
        <li  @click="LoadData(pageNum+1)" class="forepage" v-else>下一页</li>
      </ul>
    </div>
    <div class="no-data" v-else>
      <img src="../../../../../assets/imgs/nothing.jpg" class="no-img"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NoSend',
    data() {
      return {
        list: [],
        pageNum:1,
        pageSize:3,
        status:Number,
        total:Number,
        httpUrl:'http://119.23.12.250:8090/images',
      }
    },
    props:{
      userId:Number,
    },
    methods: {
      LoadData(value) {
        this.pageNum = value
        let _this = this
        $.ajax({
          url:"/api/sunny/order/newSearch",
          async:true,
          type:'GET',
          data:{
            "buyerId":_this.userId.userId,
            "pageNum":_this.pageNum +1,
            "pageSize":_this.pageSize,
            "status":2
          },
          success:function (data) {
            _this.list = data.data.rows;
          },
          error:function () {
          },
          dataType:'json'
        })
      },
    },
    created(){
      let _this = this
      $.ajax({
        url:"/api/sunny/order/newSearch",
        async:true,
        type:'GET',
        data:{
          "buyerId":_this.userId.userId,
          "pageNum":_this.pageNum,
          "pageSize":_this.pageSize,
          "status":2
        },
        success:function (data) {
          _this.total = data.data.total;
          _this.list = data.data.rows;
          _this.LoadData(0);
        },
        error:function () {
        },
        dataType:'json'
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
    height:calc(66vh);
    line-height:calc(66vh);
  }
  .no-img{
    width:calc(66vh);
    height:calc(66vh);
    background-size:100% 100%;
  }
  .myOrder-li
    list-style:none;
    margin-top:20px;
    width:90%;
    box-shadow:0 0px 9px rgba(0,0,0,0.1);
    border-radius:5px;
    height:calc(23vh);
    margin-bottom:3%;
    .myOrder-li-left
      display:inline-block
      vertical-align:top;
      height:calc(23vh);
      width:30%;
      border-radius:5px;
    .myOrder-li-left-img
      width:100%;
      height:calc(23vh);
    .myOrder-li-right
      display:inline-block
      vertical-align:top;
      height:180px;
      width:66%;
      border-radius:5px;
    .myOrder-li-right-content
      color:#8d8d8d;
      margin-top:6%;
      margin-left:5%;
    .myOrder-li-right-top
      margin-top:17%;
      .myOrder-li-right-jifen
        display:inline-block;
        margin-left:5%;
    .myOrder-li-right-text
      display:inline-block;
      float:right;
      margin-right:8%;
      margin-top:-2%;
      color:#85cab5
      font-size:13px;
    .myOrder-li-right-button
      display:inline-block;
      margin-top:-1.5%;
      float:right;
      margin-right:4%;
      font-size:13px;
      border-radius:5px;
      width:20%;
      height:calc(3.5vh);
      color: white;
      cursor:pointer;
      background:#85cab5;
  .myOrder-page
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
