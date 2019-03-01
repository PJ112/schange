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
            <button class="myMall-li-right-button">评价</button>
          </div>
        </li>
        <div class="myMall-li-assess">
          <input type="text" class="myMall-li-assess-input" placeholder="请输入评价" v-model="myassess"/>
          <div class="myMall-li-assess-button">
            <button class="myMall-li-assess-button-handin" @click="goPublish">发表</button>
            <button class="myMall-li-assess-button-handout">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "MyBuy",
    data() {
      return {
        myassess:''
      }
    },
    computed:{
      ...mapState(['jifen'])
    },
    methods:{
      goPublish(){
        if(this.myassess.length == 0){
          alert('请输入评价信息!')
        }else{
          let date = new Date();
          let year = date.getFullYear();
          let month = date.getMonth()+1;
          let day = date.getDate();
          let hour = date.getHours();
          let minute = date.getMinutes();
          let second = date.getSeconds();
          console.log(year+'年'+month+'月'+day+'日 '+hour +':'+minute+':'+second)
          alert('发表成功！')
        }
      }
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
  .myMall-li-assess
    margin-top:3%;
    .myMall-li-assess-input
      width:90%;
      height:30px;
      border:1px solid #85cab5;
      border-radius:5px;
      line-height:30px;
    .myMall-li-assess-button
      display:inline-block;
      margin-left:65%;
      font-size:13px;
      margin-top:3%;
      .myMall-li-assess-button-handin, .myMall-li-assess-button-handout
          border-radius:5px;
          width:60px;
          height:25px;
          color: white;
          cursor:pointer;
          background:#85cab5;
          margin-right:20px;
</style>
