<template>
<div class="myOrder">
  <h1 class="myOrder-h1">订单管理</h1>
  <div class="myOrder-status">
     <div class="myOrder-status-router">
         <router-link to="nopay" tag="div"
                      class="myOrder-status-router-nopay"
         >未支付</router-link>
       <router-link  to="nosend" tag="div" class="myOrder-status-router-nopay">未发货</router-link>
       <router-link to="send" tag="div" class="myOrder-status-router-nopay">已发货</router-link>
       <router-view :userId="userId"></router-view>
     </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "MyOrder",
    props:{
      userId:Number,
    },
    data(){
     return{
     }
    },
    methods:{

    }
  }
</script>

<style lang="stylus" scoped>
  .myOrder
    min-height:calc(80vh)
    margin-left:8%;
    margin-top:6%;
    margin-bottom:3%;
    .myOrder-h1
      display:inline-block
      font-size:18px;
      color:#2b2a2a
      margin-bottom:3%;
    .myOrder-status
       width:100%;
      .myOrder-status-router
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
