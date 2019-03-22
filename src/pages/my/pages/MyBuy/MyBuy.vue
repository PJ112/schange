<template>
<div class="myBuy">
  <h1 class="myBuy-h1">已购入</h1>
  <li class="myBuy-li" v-for="(item,index) in one" :key="index">
   <div class="myBuy-li-content">
     <div class="myBuy-li-left">
       <img class="myBuy-li-left-img" src="../../resource/商品.png"/>
     </div>
     <div class="myBuy-li-right">
       <div class="myBuy-li-right-content">晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光</div>
       <div class="myBuy-li-right-jifen">价格:1212</div>
       <button class="myBuy-li-right-button" @click="showAssess(index)" v-show="index == i">评价</button>
       <button class="myBuy-li-right-button" v-show="index == showIndex">已评价</button>
     </div>
   </div>
    <div class="myBuy-li-assess" v-show="index == i">
      <input
        type="text"
        class="myBuy-li-assess-input"
        placeholder="请输入评价"
        v-model="inputValue"
        @keyup.enter="goPublish(index)"
        v-show="index == !showIndex"
      />
      <div class="myBuy-li-assess-button" v-show="!comment">
        <button class="myBuy-li-assess-button-handin" @click="goPublish(index)">发表</button>
        <button class="myBuy-li-assess-button-handout" @click="hidden()">取消</button>
      </div>
      <input
        v-show="index == showIndex"
        type="text"
        class="myBuy-li-assess-inputShow"
        v-model="inputValue"
      />
    </div>
  </li>
</div>
</template>

<script>
  export default {
    name: "MyBuy",
    data() {
      return {
        i:-1,
        one:[
         1,2
        ],
        comment:false,
        showIndex:-1,
        EIndex:-1
      }
    },
    methods:{
      goPublish(index){
        if(this.inputValue.value === ""){
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
          this.showIndex = index
          this.comment = true
          alert(this.showIndex)
          alert('发表成功！')
        }
      },
      showAssess(index){
        this.i = index
        alert(index)
      },
      hidden(){
       this.i = -1
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .assess{
    display:none
  }
  .myBuy
    margin-left:8%;
    margin-top:32px;
    margin-bottom:3%;
    .myBuy-h1
      display:inline-block
      font-size:18px;
      color:#2b2a2a
      margin-bottom:3%;
    .myBuy-li
      list-style:none;
      margin-top:20px;
      width:90%;
      margin-bottom:3%;
      min-height:calc(23vh);
      .myBuy-li-content
        box-shadow:0 0px 9px rgba(0,0,0,0.1);
        border-radius:5px;
        height:calc(23vh);
        .myBuy-li-left
          display:inline-block
          vertical-align:top;
          height:calc(23vh);
          width:30%;
          border-radius:5px;
          img
            width:100%;
            height:calc(23vh);
            background-size:100% 150px;
        .myBuy-li-right
          display:inline-block
          vertical-align:top;
          height:180px;
          width:66%;
          border-radius:5px;
          .myBuy-li-right-content
            color:#8d8d8d;
            margin-top:20px;
            margin-left:5%;
          .myBuy-li-right-jifen
            display:inline-block;
            margin-top:13%;
            margin-left:5%;
            width:30%;
          .myBuy-li-right-button
            display:inline-block;
            float:right;
            margin-top:12%;
            margin-right:2%;
            font-size:13px;
            border-radius:5px;
            width:60px;
            height:25px;
            color: white;
            cursor:pointer;
            background:#85cab5;
      .myBuy-li-assess
        width:100%;
        height:calc(8vh)
        padding-bottom:2%;
        margin-top:3%;
        .myBuy-li-assess-input
          width:100%;
          height:calc(5vh);
          border:1px solid #85cab5;
          border-radius:5px;
        .myBuy-li-assess-button
          display:inline-block;
          font-size:13px;
          margin-top:3%;
          width:100%;
          height:calc(4vh);
        .myBuy-li-assess-button-handin, .myBuy-li-assess-button-handout
            border-radius:5px;
            color: white;
            width:10%;
            cursor:pointer;
            float:right;
            height:calc(4vh);
            background:#85cab5;
        .myBuy-li-assess-button-handout
          margin-right:5%;
        .myBuy-li-assess-button-handin
          margin-right:3%;
        .myBuy-li-assess-inputShow
          border-radius:5px;
          width:100%;
          height:calc(4vh);
          color: white;
          cursor:pointer;
          background:#85cab5;
          margin-right:20px;
</style>
