<template>
  <div class="myOrder">
    <h1 class="myOrder-h1">已购入</h1>

    <li class="myOrder-li">
      <div class="myOrder-li-left">
        <img class="myOrder-li-left-img" src="../../resource/商品.png"/>
      </div>
      <div class="myOrder-li-right">
        <div class="myOrder-li-right-content">晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光</div>
       <div class="myOrder-li-right-top">
         <div class="myOrder-li-right-jifen">价格:</div>
         <button class="myOrder-li-right-button" @click="goPay" v-show="!pay">立即支付</button>
         <div class="myOrder-li-right-text" v-show="!pay">待支付</div>
         <button class="myOrder-li-right-button" @click="goPay" v-show="pay">付款成功</button>
         <div class="myOrder-li-right-text" v-show="pay">已支付</div>
       </div>
      </div>
    </li>

    <!--分页-->
    <ul class="myOrder-page">
      <li v-if="currentPage === 1" class="disabled forepage">上一页</li>
      <li v-else @click="LoadData(currentPage-1)" class="forepage">上一页</li>
      <li  @click="LoadData(item)" class="numberPage">12</li>
      <li v-if="currentPage == totalPages || totalPages == 0" class="disabled forepage">下一页</li>
      <li v-else @click="LoadData(currentPage+1)" class="forepage">下一页</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyOrder",
  data() {
    return {
      currentPage: 1,
      pageSize:10,
      totalPage: Number,
      pay:false
    }
  },
  props:{
    userId:Number,
  },
  methods: {
    LoadData(value) {  //设置每一页显示10条数据
      this.currentPage = value
      // this.newData = this.data.slice((value-1) * this.pageSize, value *this.pageSize)
    },
    goPay(){
      this.pay = true
      alert("支付成功!")
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.totalPage *1 / this.pageSize )
    }
  },
 created(){
    let _this = this
   $.ajax({
     url: "/api/sunny/order/findPage",
     async: true,
     type: 'GET',
     data: {
     },
     success: function (data) {
       switch(data.message){
         case "查询成功":{
           console.log(data)
           this.LoadData(1)  //默认加载第一页
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
  .myOrder
    margin-left:8%;
    margin-top:6%;
    margin-bottom:3%;
    .myOrder-h1
      display:inline-block
      font-size:18px;
      color:#2b2a2a
      margin-bottom:3%;
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
        img
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
    .forepage
      display: inline-block;
      cursor:pointer;
    .numberPage
      display: inline-block
      cursor:pointer;
      color:#85cab5;
      padding:5px;
</style>
