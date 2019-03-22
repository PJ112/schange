<template>
  <div>
    <div class="SellersPublish">
    <div v-for="(item,index) in one" class="content" :key="index">
      <li class="SellersPublish-li" >
        <div class="SellersPublish-li-left">
          <img class="SellersPublish-li-left-img"/>
        </div>
        <div class="SellersPublish-li-right">
          <div class="SellersPublish-li-right-content">晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光</div>
          <div class="SellersPublish-li-right-jifen">价格:</div>
          <button class="SellersPublish-li-right-status">编辑</button>
        </div>
      </li>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SellersPublish",
    data() {
      return {
        one: [{
          id: '1',
        }, {
          id: '2',
        }],
        pageNum:1,
        pageSize:3,
        total:Number,
      }
    },
    methods: {
    },
    created(){
      let _this = this
      alert(this.list.length)
      $.ajax({
        url:"/api/sunny/goods/newSearch",
        async:true,
        type:'GET',
        data:{
          // "sellerId":_this.userId.userId,
          "sellerId":2,
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
    }
  }
</script>

<style lang="stylus" scoped>
  .SellersPublish
    z-index:-1;
    margin-left:8%;
    margin-top:6%;
    min-height:calc(78vh);
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
        list-style:none;
        flex:1;
        box-shadow:0 0px 9px rgba(0,0,0,0.1);
        border-radius:5px;
        margin-right:5%;
        .SellersPublish-li-left
          display:inline-block
          vertical-align:top;
          height:180px;
          width:30%;
          border-radius:5px;
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
            margin-top:19%;
            margin-left:5%;
          .SellersPublish-li-right-status
            display:inline-block
            float:right;
            margin-right:8%;
            margin-top:18%;
            font-size:13px;
            border-radius:5px;
            width:calc(10vh);
            height:calc(4.7vh);
            color: white;
            cursor:pointer;
            background:#85cab5;
</style>
