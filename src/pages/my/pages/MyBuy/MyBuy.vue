<template>
<div class="myBuy">
  <h1 class="myBuy-h1">已购入</h1>
  <div class="myBuy-assess-status">
    <router-link to="/assess" tag="div"
                 class="myOrder-status-router-nopay">已评价</router-link>
    <router-link to="/goassess" tag="div"
                 class="myOrder-status-router-nopay">未评价</router-link>
    <router-view :userId="userId" ></router-view>
  </div>
</div>
</template>

<script>
  export default {
    name: "MyBuy",
    props:{
      userId:Number,
    },
  }
</script>

<style lang="stylus" scoped>
  .myBuy
    z-index:-1
    margin-left:8%;
    margin-top:32px;
    margin-bottom:3%;
    min-height:calc(100vh)
    .myBuy-h1
      display:inline-block
      font-size:18px;
      color:#2b2a2a
      margin-bottom:3%;
    .myBuy-assess-status
      width:100%;
      height:30px;
      line-height:30px;
      .myOrder-status-router-nopay
        display:inline-block;
        width:100px;
        border-radius:15px;
        text-align:center;
        background:#85cab5;
        color:white;
        cursor:pointer;
        &.router-link-active
          border:1px solid #85cab5
          background:white
          color:#85cab5
</style>
