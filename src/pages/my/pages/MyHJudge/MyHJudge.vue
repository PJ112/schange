<template>
  <div>
    <div class="MyHJudge" v-if="list.length>0">
      <h1 class="MyHJudge-h1">历史评价</h1>
      <div>
        <li class="MyHJudge-li" v-for="(item,index) in list" :key="index">
          <div class="MyHJudge-li-assess">
            <img class="myCollection-li-left-img" :src="httpUrl+item[4].address" v-if="item[4]"/>
            <img class="myCollection-li-left-img" src="../../../../assets/imgs/index/person.png" v-else />
            <div class="myCollection-li-right">
              <div class="myCollection-li-right-header">
                <span class="myCollection-li-right-header-name">{{item[3].username}}</span>
                <span class="myCollection-li-right-header-img">
                <img class="myCollection-li-right-header-img-img" src="../../../../assets/imgs/my/mycollection/女.png" v-if="item[3].sex ===2"/>
                <img class="myCollection-li-right-header-img-img" src="../../../../assets/imgs/my/mycollection/男.png" v-else-if="item[3].sex ===1"/>
                <img class="myCollection-li-right-header-img-img"  src="../../../../assets/imgs/my/mycollection/保密.png" v-else/>
              </span>
              </div>
              <div class="myCollection-li-right-content">{{item[7].contents}}</div>
            </div>
          </div>
          <div class="MyHJudge-li-goods">
            <img class="MyHJudge-li-left-img" :src="httpUrl+item[2].address"/>
            <div class="MyHJudge-li-right">
              <div class="MyHJudge-li-right-content">{{item[0].name}}</div>
            </div>
          </div>
        </li>
      </div>
      <ul class="MyHJudge-page">
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
    <div class="MyHJudge-no" v-else>暂无历史评价！</div>
  </div>
</template>

<script>
  export default {
    name: "MyHJudge",
    data() {
      return {
        total:Number,
        pageNum:1,
        pageSize:3,
        list:[],
        httpUrl:'http://119.23.12.250:8090/images',
        listN:[]
      }
    },
    props:{
      userId:Number,
    },
    methods:{
       LoadData(value) {
         this.pageNum = value
         let _this = this
         $.ajax({
           url:"/api/sunny/comment/search",
           async:true,
           type:'GET',
           data:{
             "buyId":_this.userId.userId,
             "pageNum":_this.pageNum,
             "pageSize":_this.pageSize
           },
           success:function (data) {
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
        url: "/api/sunny/comment/search",
        async: true,
        type: 'GET',
        data: {
          "buyerId":_this.userId.userId,
           "pageNum":_this.pageNum,
           "pageSize":_this.pageSize
        },
        success: function (data) {
          _this.list = data.data
          _this.total = _this.list.length
          _this.LoadData(0)

        },
        error: function () {

        },
        dataType: 'json'
      })
    },
    computed: {
       totalPages() {
         return Math.ceil(this.total * 1 / this.pageSize)
       }
    }
  }
</script>

<style lang="stylus" scoped>
  .MyHJudge-no
    height:calc(78vh)
    line-height:calc(78vh)
    color:red;
    width:100%;
    margin-left:40%;
  .MyHJudge
    margin-left:8%;
    margin-top:32px;
    margin-bottom:3%;
    min-height:calc(100vh)
    .MyHJudge-h1
      display:inline-block
      font-size:18px;
      color:#2b2a2a
      margin-bottom:3%;
    .MyHJudge-li
      list-style:none;
      margin-top:20px;
      width:90%;
      box-shadow:0 0px 9px rgba(0,0,0,0.1);
      border-radius:5px;
      height:165px
      margin-bottom:3%;
      .MyHJudge-li-assess
        width:100%;
        height:60px;
      .myCollection-li-left-img
        margin-top:10px;
        width:50px;
        height:50px;
        border-radius:50px;
        background-size:50px 50px;
        margin-left:20px;
      .myCollection-li-right
        display:inline-block
        vertical-align:top;
        color:#8d8d8d;
        margin-left:3%;
        margin-top:10px;
        .myCollection-li-right-content
          margin-top:3%;
        .myCollection-li-right-header-img
          display:inline-block;
          .myCollection-li-right-header-img-img
            margin-top:-2%
            width:15px;
            height:20px;
      .myCollection-li-time
        display:inline-block;
        float:right;
        margin-top:1%;
        margin-right:3%;
    .MyHJudge-li-goods
      width:100%;
      display:flex
      margin-top:3%;
      height:70px;
      .MyHJudge-li-left-img
        display:inline-block;
        vertical-align:top;
        margin-left:20px;
        width:60px;
        height:70px;
        background-size:60px 70px;
      .MyHJudge-li-right
        flex:1;
        display:inline-block
        background: rgba(141, 141, 141, 0.1);
        .MyHJudge-li-right-content
          margin-top:10px;
          margin-left:4%;
          margin-right:3%
        .MyHJudge-li-right-time
          margin-top:2%;
          margin-left:5%;
  .MyHJudge-page
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
