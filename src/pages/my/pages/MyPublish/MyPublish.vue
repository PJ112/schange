<template>
  <div>
    <div class="myPublish">
      <h1 class="myPublish-h1">已发布</h1>
      <div class="myPublish-status">
        <router-link to="/nobuy" tag="div" class="myOrder-status-router-nopay">未售出</router-link>
        <router-link to="/waitsend" tag="div" class="myOrder-status-router-nopay">待发货</router-link>
        <router-link to="/alsend" tag="div" class="myOrder-status-router-nopay" >已发货</router-link>
        <router-link to="/albuy" tag="div" class="myOrder-status-router-nopay">已售出</router-link>
        <router-view :userId="userId"></router-view>
      </div>
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
    }
  },
}
</script>

<style lang="stylus" scoped>
  .myPublish-no
    height:calc(78vh)
    line-height:calc(78vh)
    color:red;
    width:100%;
    margin-left:40%;
  .myPublish
    z-index:-1;
    margin-left:8%;
    margin-top:32px;
    .myPublish-h1
      display:inline-block
      font-size:18px;
      color:#2b2a2a
      margin-bottom:3%;
    .myOrder-status-router-nopay
      display:inline-block;
      width:100px;
      height:30px;
      line-height:30px;
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
