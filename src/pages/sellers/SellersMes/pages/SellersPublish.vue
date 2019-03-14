<template>
  <div>
    <div class="myCollection">
      <h1 class="myCollection-h1" v-show="this.one.length>0" >已发布</h1>
      <div>
        <div v-for="(item,index) in one" class="content" :key="index">
          <li class="myMall-li" >
            <div class="myMall-li-left">
              <img class="myMall-li-left-img" src="../../../../assets/imgs/my/mycollection/img.png"/>
            </div>
            <div class="myMall-li-right">
              <div class="myMall-li-right-content">晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光</div>
              <div class="myMall-li-right-jifen">价格:</div>
              <button class="myMall-li-right-button">编辑</button>
            </div>
          </li>
        </div>
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
      }
    },
    methods: {

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
    .content
      margin-top:20px;
      width:100%;
      height:180px
      margin-bottom:3%;
      display:flex;
      .myCollection-li-chose
        display:inline-block
        cursor:pointer;
        float:left;
        width:4%;
        margin-top:10%;
        .myCollection-li-chose-input
          width:20px;
          height:20px;
      .myMall-li
        display:inline-block
        list-style:none;
        flex:1;
        box-shadow:0 0px 9px rgba(0,0,0,0.1);
        border-radius:5px;
        margin-right:5%;
        .myMall-li-left
          display:inline-block
          vertical-align:top;
          height:180px;
          width:30%;
          border-radius:5px;
        .myMall-li-right
          display:inline-block
          float:right;
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
          .myMall-li-right-button
            display:inline-block;
            margin-left:60%;
            font-size:13px;
            border-radius:5px;
            width:60px;
            height:25px;
            color: white;
            cursor:pointer;
            background:#85cab5;
</style>
