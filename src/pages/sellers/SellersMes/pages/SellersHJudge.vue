<template>
  <div>
    <li class="myMall-li">
      <div class="myMall-li-assess">
        <img class="myCollection-li-left-img" src="../../../../assets/imgs/my/mycollection/img.png"/>
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
      </div>
      <div class="myMall-li-goods">
        <img class="myMall-li-left-img" src="../../../../assets/imgs/my/mycollection/img.png" />
        <div class="myMall-li-right">
          <div class="myMall-li-right-content">晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光</div>
          <div class="myMall-li-right-time">2019-01-26 12:24:01</div>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
    name: "SellersHJudge"
}
</script>

<style lang="stylus" scoped>
  .myMall-li
    list-style:none;
    margin-top:20px;
    width:90%;
    box-shadow:0 0px 9px rgba(0,0,0,0.1);
    border-radius:5px;
    height:165px
    margin-bottom:3%;
    margin-left:5%;
    .myMall-li-assess
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
        margin-top:5%;
      .myCollection-li-right-header-img
        margin-left:3%;
    .myCollection-li-time
      display:inline-block;
      float:right;
      margin-top:1%;
      margin-right:3%;
  .myMall-li-goods
    width:100%;
    display:flex
    margin-top:3%;
    height:70px;
    .myMall-li-left-img
      display:inline-block;
      vertical-align:top;
      margin-left:20px;
      width:60px;
      height:70px;
      background-size:60px 70px;
    .myMall-li-right
      flex:1;
      display:inline-block
      background: rgba(141, 141, 141, 0.39);
      .myMall-li-right-content
        margin-top:10px;
        margin-left:3%;
        margin-right:3%
      .myMall-li-right-time
        margin-top:2%;
        margin-left:5%;
</style>
