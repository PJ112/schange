<template>
<div>
  <div class="myCollection">
    <h1 class="myCollection-h1">我的消息</h1>
    <div>
      <li class="myCollection-li">
        <img class="myCollection-li-left-img" src="../../resource/商品.png"/>
        <div class="myCollection-li-right">
            <div class="myCollection-li-right-header">
              <span class="myCollection-li-right-header-name" >name</span>
              <span class="myCollection-li-right-header-img">
                <img src="../../../../assets/imgs/my/mycollection/女.png"/>
              </span>
            </div>
            <div class="myCollection-li-right-content">抱歉，这已经是最低的价格了</div>
        </div>
        <div class="myCollection-li-time">2019-01-26 12:24:01</div>
      </li>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "MyCollection",
  props:{
    userId:Number,
  },
  created(){
    let _this = this
    $.ajax({
      url: "/api/sunny/message/findMessage",
      async: true,
      type: 'GET',
      data: {
        "id":this.userId.userId
      },
      success: function (data) {
       console.log(data)
      },
      error: function () {

      },
      dataType: 'json'
    })
  }
}
</script>

<style lang="stylus" scoped>
.myCollection
  z-index:-1;
  margin-left:8%;
  margin-top:32px;
  .myCollection-h1
    display:inline-block
    font-size:18px;
    color:#2b2a2a
    margin-bottom:3%;
  .myCollection-li
    list-style:none;
    margin-top:20px;
    width:90%;
    box-shadow:0 0px 9px rgba(0,0,0,0.1);
    border-radius:5px;
    height:70px;
    margin-bottom:3%;
    .myCollection-li-left-img
      display:inline-block;
      vertical-align:top;
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
        margin-top:5%;
      .myCollection-li-right-header-name
        color:black;
      .myCollection-li-right-header-img
        margin-left:3%;
    .myCollection-li-time
      display:inline-block;
      float:right;
      margin-top:1%;
      margin-right:3%;
</style>
