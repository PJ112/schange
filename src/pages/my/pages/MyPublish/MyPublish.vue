<template>
  <div>
    <div class="myPublish">
      <h1 class="myPublish-h1">已发布</h1>
      <h2 class="myPublish-h2" @click="Chose" v-show="list.length>0">勾选</h2>
      <div  class="content" v-for="(item,index) in list" :key="index" >
        <div class="myPublish-li-chose" v-show="chose">
          <input
            type="checkbox"
            :value="index"
            class="myPublish-li-chose-input"
            @click="getIndex(item.goods.id)"
          />
        </div>
        <li class="myPublish-li">
          <div class="myPublish-li-left">
            <img class="myPublish-li-left-img" src="../../resource/商品.png"/>
          </div>
          <div class="myPublish-li-right">
            <div class="myPublish-li-right-content">晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光</div>
            <div class="myPublish-li-right-jifen">价格:{{item.goods.price}}</div>
            <button class="myPublish-li-right-button" @click="goMarket">编辑</button>
          </div>
        </li>
      </div>
      <div class="myPublish-bottom" v-if="list.length>0">
        <span class="myPublish-bottom-qingkong"  @click="del">删除</span>
        <span class="myPublish-bottom-quxiao" @click="QuXiao">取消</span>
      </div>

      <ul class="myOrder-page">
        <li v-if="pageNum === 1" class="disabled forepage">上一页</li>
        <li v-else @click="LoadData(pageNum-1)" class="forepage">上一页</li>
        <li
          @click="LoadData(item)"
          class="numberPage"
          v-for="(item,index) in totalPages"
          :key="index"
          :class="index === ItemnumberPage"
        >{{item}}</li>
        <li v-if="pageNum === totalPages || totalPages === 0" class="disabled forepage">下一页</li>
        <li  @click="LoadData(pageNum+1)" class="forepage" v-else>下一页</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "MyPublish",
  props:{
    userId:Number
  },
  data() {
    return {
      list: [],
      pageNum:1,
      pageSize:3,
      status:1,
      total:Number,
      chose:false,
      choseIndex:Number
    }
  },
  methods: {
    Chose() {
      this.chose = true
    },
    QuXiao(){
      this.chose = false
    },
    getIndex(index){
     this.choseIndex = index
      console.log(this.choseIndex)
    },
    del(){
      let _this = this
      $.ajax({
        url:"/api/sunny/goods/delete",
        async:true,
        type:'GET',
        data:{
         "ids":_this.choseIndex
        },
        success:function (data) {

        },
        error:function () {
        },
        dataType:'json'
      })
    },
    goMarket(){
      this.$router.push()
    },
    LoadData(value) {
      this.pageNum = value
    },
  },
  created(){
    let _this = this
    $.ajax({
      url:"/api/sunny/goods/newSearch",
      async:true,
      type:'GET',
      data:{
        // "sellerId":this.userId.userId,
        "pageNum":this.pageNum,
        "pageSize":this.pageSize,
        "status":this.status
      },
      success:function (data) {
        _this.list = data.data.rows;
        _this.total = data.data.total;
        _this.LoadData(1);
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
  .myPublish
    z-index:-1;
    margin-left:8%;
    margin-top:32px;
    .myPublish-h1
      display:inline-block
      font-size:18px;
      color:#2b2a2a
      margin-bottom:3%;
    .myPublish-h2
      display:inline-block
      float:right;
      font-size:18px;
      margin-right:10%;
      color:#85cab5;
      cursor:pointer;
    .content
      margin-top:20px;
      width:100%;
      height:180px
      margin-bottom:3%;
      display:flex;
      .myPublish-li-chose
        display:inline-block
        cursor:pointer;
        float:left;
        width:4%;
        margin-top:10%;
        .myPublish-li-chose-input
          width:20px;
          height:20px;
      .myPublish-li
        display:inline-block
        list-style:nlist;
        flex:1;
        box-shadow:0 0px 9px rgba(0,0,0,0.1);
        border-radius:5px;
        margin-right:5%;
        .myPublish-li-left
          display:inline-block
          vertical-align:top;
          height:calc(23vh);
          width:30%;
          border-radius:5px;
        .myPublish-li-right
          display:inline-block
          float:right;
          vertical-align:top;
          height:180px;
          width:66%;
          border-radius:5px;
          .myPublish-li-right-content
            color:#8d8d8d;
            margin-top:20px;
            margin-left:5%;
          .myPublish-li-right-jifen
            display:inline-block;
            margin-top:25%;
            margin-left:5%;
            width:30%;
          .myPublish-li-right-button
            display:inline-block
            margin-top:-1%;
            margin-left:30%;
            font-size:13px;
            border-radius:5px;
            width:60px;
            height:25px;
            color: white;
            cursor:pointer;
            background:#85cab5;
    .myPublish-bottom
      margin-top:3%;
      margin-bottom:2%;
      .myPublish-bottom-qingkong,.myPublish-bottom-quxiao
        cursor:pointer;
        color:#85cab5;
        height:25px;
        line-height:25px;
      .myPublish-bottom-quxiao
        float:right;
        margin-right:12%;
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
  .ItemnumberPage
    color:red;
</style>
