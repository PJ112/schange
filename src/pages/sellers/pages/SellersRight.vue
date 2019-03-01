<template>
  <div class="sellersR">
    <div class="sellersR-header" @click="goSellers">
      私信卖家
    </div>
    <div>
      <li class="sellersR-li">
        <div class="sellersR-li-left">
          <img class="sellersR-li-left-img" src="../../../assets/imgs/my/mycollection/img.png"/>
        </div>
        <div class="sellersR-li-right">
          <div class="sellersR-li-right-content">晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光</div>
          <div class="sellersR-li-right-jifen">价格:</div>
          <div class="sellersR-li-right-text">加入购物车</div>
          <button class="sellersR-li-right-button">立即购买</button>
        </div>
      </li>
      <div class="sellersR-talk">
        <div class="sellersR-talk-header">Judy</div>
        <div class="sellersR-talk-content">
          <div class="sellerR-talk-content-send" v-for="item in list">
            <img src="../../../assets/imgs/my/mycollection/img.png" class="sellerR-talk-content-send-img"/>
            <div class="sellersR-talk-content-send-mes">{{item.mes}}
              <div class="sellersR-talk-content-send-mes-arrow"></div>
            </div>
          </div>
          <div class="sellerR-talk--content-get">
            <img/>
          </div>
        </div>
        <div class="sellersR-talk-sendIn">
         <input
           type="text"
           class="sellersR-talk-sendIn-input"
           v-model="inputValue"
           @keyup.enter="handIn"
           @change="saveList()"/>
          <button class="sellersR-talk-sendIn-button" @click="handIn">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SellersRight",
  data(){
    return{
      inputValue:'',
      list:[]
    }
  },
  methods:{
    handIn(){
      console.log(this.inputValue)
      this.list.push({
        mes: this.inputValue
      })
      this.inputValue = ''
      localStorage.setItem('list', JSON.stringify(this.list))
    },
    saveList () {
      localStorage.setItem('list', JSON.stringify(this.list))
    },
    goSellers(){
      this.$router.push('./sellersmes')
    }
  },
  mounted () {
    var list = JSON.parse(localStorage.getItem('list'))
    if (list) {
      this.list = list
    }
  },
}
</script>

<style lang="stylus" scoped>
    .sellersR-header
      width:100%
      font-size:18px
      color:#85cab5
      text-align:center
      margin-top:4%;
      margin-bottom:4%;
      cursor:pointer;
    .sellersR-li
      list-style:none;
      margin-top:20px;
      width:94%;
      box-shadow:0 0px 9px rgba(0,0,0,0.1);
      border-radius:5px;
      height:120px
      margin-bottom:3%;
      margin-left:3%;
      .sellersR-li-left
        display:inline-block
        vertical-align:top;
        width:30%;
        border-radius:5px;
        img
          width:100%;
          height:100px;
          background-size:100% 100px;
      .sellersR-li-right
        display:inline-block
        vertical-align:top;
        height:180px;
        width:66%;
        border-radius:5px;
        .sellersR-li-right-content
          color:#8d8d8d;
          margin-top:3%;
          margin-left:5%;
        .sellersR-li-right-jifen
          display:inline-block;
          margin-top:10%;
          margin-left:5%;
        .sellersR-li-right-text
          display:inline-block;
          margin-left:28%;
          font-size:12px;
          border-radius:5px;
          width:100px;
          text-align:center;
          height:25px;
          line-height:25px;
          color: white;
          cursor:pointer;
          background:#85cab5;
        .sellersR-li-right-button
          display:inline-block;
          margin-left:5%;
          font-size:13px;
          border-radius:5px;
          width:90px;
          height:25px;
          line-height:25px;
          color: white;
          cursor:pointer;
          background:#85cab5;
    .sellersR-talk
      margin-top:3%;
      width:94%;
      box-shadow:0 0px 9px rgba(0,0,0,0.1);
      border-radius:5px;
      min-height:calc(80vh)
      margin-bottom:3%;
      margin-left:3%;
      .sellersR-talk-header
        width:100%;
        text-align:center
        font-size:16px;
        font-weight:bolder;
        height:calc(6vh);
        line-height:calc(6vh);
        color: white;
        background:#85cab5;
      .sellersR-talk-content
        width:100%;
        height:calc(65vh)
        font-size:16px;
        .sellerR-talk-content-send
          margin-top:3%;
          width:100%;
          height:40px;
          .sellerR-talk-content-send-img
            display:inline-block
            float:right;
            width:50px;
            height:50px;
            border-radius:50px;
            background-size:50px 50px;
            margin-right:3%;
          .sellersR-talk-content-send-mes
            position:relative;
            width:150px;
            background:#85cab5;
            border-radius:5px; /* 圆角 */
            float:right;
            font-size:13px;
            display:inline-block
            margin-top:1%;
            margin-right:3%;
            padding-left:2%;
            padding-right:5%;
            text-align:center;
            height:calc(5vh);
            line-height:calc(5vh)
            color:white;
            .sellersR-talk-content-send-mes-arrow
              position:absolute;
              top:5px;
              right:-15px; /* 圆角的位置需要细心调试哦 */
              width:0;
              height:0;
              font-size:0;
              border:solid 8px;
              border-color:white white white #85cab5;
      .sellersR-talk-sendIn
        width:94%;
        height:100%;
        font-size:0;
        .sellersR-talk-sendIn-input
          margin-left:7%;
          font-size:12px;
          width:80%;
          height:calc(5vh);
          line-height:calc(5vh);
          border:1px solid #85cab5;
          border-radius:3px;
        .sellersR-talk-sendIn-button
          display:inline-block
          background:#85cab5;
          font-size:14px;
          color:white;
          cursor:pointer
          width:10%;
          border-radius:3px;
          height:calc(5.2vh);
          line-height:calc(5.2vh);
</style>
