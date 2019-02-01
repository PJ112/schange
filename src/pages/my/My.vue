<template>
  <div class="my">
    <div class="my-content">
      <div class="my-header">
        <img src="./resource/schange.png" class="my-logo"/>
        <span class="my-login">登录 | </span>
        <span class="my-reagister">注册</span>
        <img src="./resource/userIcon.png" class="my-userIcon"/>
      </div>
      <div class="my-left"></div>
      <div class="my-right"></div>
      <div class="my-link"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'My'
  }
</script>

<style lang="stylus" scoped>
  .my
    width:100%;
    height:calc(100vh);
    background:white;
    .my-content
      margin:0 auto;
      height:calc(100vh);
      width:80%;
      background:#e7f4f0;
      .my-header
          height:15%;
          width:100%;
          .my-logo
              width:220px;
              height:80px;
              margin-left:7%;
          .my-userIcon
             width:40px;
             height:40px;
             float:right;
             margin-top:1%;
          .my-login
            float:right;
            margin-top:2%;
            margin-right:3%;
      .my-left
          display:inline-block;
          width:20%;
          height:80%;
          background:black;
          margin-left:7%;
      .my-right
        display:inline-block;
        margin-left:3%;
        width:63%;
        height:80%;
        background:goldenrod;
      .my-link
        display:inline-block;
        width:6%;
        height:80%;
        background:blueviolet;
</style>
