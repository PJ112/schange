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
           <button class="myOrder-li-right-button" @click="goPay(item.order.id,item.goods.goods.id)">立即支付</button>
           <div class="myOrder-li-right-text">待支付</div>
         </div>
       </div>
     </li>
     <!--分页-->
     <ul class="myOrder-page">
       <li v-if="pageNum === 0" class="disabled unforepage">上一页</li>
       <li v-else @click="LoadData(pageNum-1)" class="forepage">上一页</li>
       <li
         @click="LoadData(item+1)"
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
   <transition
     name="fade"
   >
     <alert v-if="alertDara"
            :alertDara="alertDara" @alertBack="alertBackFn" @alertSure="alertSureFn" @click.native="alert"></alert>
   </transition>
 </div>
</template>

<script>
  import Alert from '../../../../../common/Alert/Alert.vue'
  export default {
    name: 'NoPay',
    data() {
      return {
        list: [],
        pageNum:Number,
        pageSize:3,
        status:Number,
        total:Number,
        httpUrl:'http://119.23.12.250:8090/images',
        alertDara:''
      }
    },
    components: {Alert},
    props:{
      userId:Number,
    },
    methods: {
      alertSureFn:function(data){
        this.alertDara = '';
      },
      alertBackFn: function(data) {
        this.alertDara = '';
      },
      alert(){
        this.$router.go(0);
      },
      goPay(id,goodsId){
        this.$router.push({
          path:'/pay',
          query:{"id":id,"goodsId":goodsId}
        })
      },
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
            "status":1
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
          "pageSize":_this.pageSize,
          "status":1
        },
        success:function (data) {
          _this.list = data.data.rows;
          _this.total = data.data.total;
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
  .assess-success{
    position:fixed;
    width:calc(66vh);
    font-size:18px;
    height:calc(66vh);
    line-height: calc(66vh);
    text-align:center;
    margin-left:3%;
    color:#85cab5
    z-index:100;
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
        color:#85cab5
        margin-top:-2%;
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
