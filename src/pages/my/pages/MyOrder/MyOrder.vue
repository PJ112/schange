<template>
  <div>
    <div class="myMall">
      <h1 class="myMall-h1">已购入</h1>
      <div>
        <li class="myMall-li">
          <div class="myMall-li-left">
            <img class="myMall-li-left-img" src="../../resource/商品.png"/>
          </div>
          <div class="myMall-li-right">
            <div class="myMall-li-right-content">晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光</div>
            <div class="myMall-li-right-jifen">价格:</div>
            <div class="myMall-li-right-text">待支付</div>
            <button class="myMall-li-right-button">立即支付</button>
          </div>
        </li>
        <li class="myMall-li">
          <div class="myMall-li-left">
            <img class="myMall-li-left-img" src="../../resource/商品.png"/>
          </div>
          <div class="myMall-li-right">
            <div class="myMall-li-right-content">晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光</div>
            <div class="myMall-li-right-jifen">价格:</div>
            <div class="myMall-li-right-text">已支付</div>
            <button class="myMall-li-right-button">确定收货</button>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "MyOrder",
    data() {
      return {

      }
    },
    computed:{
      ...mapState(['jifen'])
    }
  }
</script>

<style lang="stylus" scoped>
  .myMall
    margin-left:8%;
    margin-top:32px;
    margin-bottom:3%;
    .myMall-h1
      display:inline-block
      font-size:18px;
      color:#2b2a2a
      margin-bottom:3%;
    .myMall-li
      list-style:none;
      margin-top:20px;
      width:90%;
      box-shadow:0 0px 9px rgba(0,0,0,0.1);
      border-radius:5px;
      height:150px
      margin-bottom:3%;
      .myMall-li-left
        display:inline-block
        vertical-align:top;
        height:150px;
        width:30%;
        border-radius:5px;
        img
          width:100%;
          height:150px;
          background-size:100% 150px;
      .myMall-li-right
        display:inline-block
        vertical-align:top;
        height:180px;
        width:66%;
        border-radius:5px;
        .myMall-li-right-content
          color:#8d8d8d;
          margin-top:20px;
          margin-left:5%;
        .myMall-li-right-jifen
          display:inline-block;
          margin-top:70px;
          margin-left:5%;
        .myMall-li-right-text
          display:inline-block;
          color:#85cab5
          margin-left:36%;
          font-size:13px;
        .myMall-li-right-button
          display:inline-block;
          margin-left:5%;
          font-size:13px;
          border-radius:5px;
          width:100px;
          height:25px;
          color: white;
          cursor:pointer;
          background:#85cab5;
</style>
