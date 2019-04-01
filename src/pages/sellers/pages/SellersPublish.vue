<template>
  <div class="SellersPublish">
    <div  class="content" v-for="(item,index) in list" :key="index" >
      <li class="SellersPublish-li">
        <div class="SellersPublish-li-left">
          <img class="SellersPublish-li-left-img" :src="httpUrl+item.imageList[0].address"/>
        </div>
        <div class="SellersPublish-li-right">
          <div class="SellersPublish-li-right-content">{{item.content}}</div>
          <div class="SellersPublish-li-right-jifen">价格:{{item.goods.price}}</div>
          <div class="SellersPublish-li-right-button" @click="goMes(item.goods.id)" >私信卖家</div>
        </div>
      </li>
    </div>
    <ul class="SellersPublish-page" v-show="list">
      <li v-if="pageNum === 0" class="disabled unforepage">上一页</li>
      <li v-else @click="LoadData(pageNum-1)" class="forepage">上一页</li>
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
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "SellersPublish",
    props:['sellerId'],
    data() {
      return {
        list: [],
        pageNum:1,
        pageSize:3,
        total:0,
        httpUrl:'http://119.23.12.250:8090/images',
      }
    },
    methods: {
      LoadData(value) {
        this.pageNum = value;
        let _this = this;
        $.ajax({
          url:"/api/sunny/goods/newSearch",
          async:true,
          type:'GET',
          data:{
            "sellerId":_this.sellerId,
            "pageNum":_this.pageNum,
            "pageSize":_this.pageSize,
          },
          success:function () {
          },
          error:function () {
          },
          dataType:'json'
        })
      },
      goMes(goodsId){
        this.$router.push({
          path:'/contact-seller',
          query:{id:goodsId}
        })
      }
    },
    created(){
      let _this = this;
      $.ajax({
        url:"/api/sunny/goods/newSearch",
        async:true,
        type:'GET',
        data:{
          "sellerId":_this.sellerId,
          "pageNum":_this.pageNum,
          "pageSize":_this.pageSize,
          "status":_this.status
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
    computed:{
      totalPages () {
        return Math.ceil(this.total *1 / this.pageSize )
      },
      ...mapState(['userId'])
    },
  }
</script>

<style lang="stylus" scoped>
  .SellersPublish-no
    height:calc(78vh)
    line-height:calc(78vh)
    color:red;
    width:100%;
    margin-left:40%;
  .SellersPublish
    z-index:-1;
    margin-left:8%;
    margin-top:32px;
    .content
      margin-top:20px;
      width:100%;
      height:180px
      margin-bottom:3%;
      display:flex;
      .SellersPublish-li-chose
        display:inline-block
        cursor:pointer;
        float:left;
        width:4%;
        margin-top:10%;
        .SellersPublish-li-chose-input
          width:20px;
          height:20px;
      .SellersPublish-li
        display:inline-block
        list-style:nlist;
        flex:1;
        box-shadow:0 0px 9px rgba(0,0,0,0.1);
        border-radius:5px;
        margin-right:5%;
        .SellersPublish-li-left
          display:inline-block
          vertical-align:top;
          height:100%;
          width:34%;
          border-radius:5px;
          img
            width:100%;
            height:100%;
            background-size:100% 100%;
        .SellersPublish-li-right
          display:inline-block
          float:right;
          vertical-align:top;
          height:180px;
          width:66%;
          border-radius:5px;
          .SellersPublish-li-right-content
            color:#8d8d8d;
            margin-top:20px;
            margin-left:5%;
          .SellersPublish-li-right-jifen
            display:inline-block;
            margin-top:25%;
            margin-left:5%;
            width:30%;
          .SellersPublish-li-right-button
            display:inline-block
            margin-top:-2%;
            margin-left:30%;
            font-size:13px;
            border-radius:5px;
            width:60px;
            text-align:center
            height:25px;
            line-height:25px;
            color: white;
            cursor:pointer;
            background:#85cab5;
  .SellersPublish-page
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
