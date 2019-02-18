<template>
<div>
  <div class="myCollection">
    <h1 class="myCollection-h1">收藏</h1>
    <h2 class="myCollection-h2" @click="Chose" v-show="this.one.length>0">勾选</h2>
    <div>
      <li class="myCollection-li" v-for="(one,index) in one" :key="index">
        <div class="myCollection-li-chose">
         <input
           type="checkbox"
           :checked="index == -1"
           :class="{'chose':chose}"
           class="myCollection-li-chose-input"
           v-model="index.status"
         />
        </div>
        <div class="myCollection-li-left">
          <img class="myCollection-li-left-img"/>
        </div>
        <div class="myCollection-li-right">
          <div class="myCollection-li-right-content">晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光晨光</div>
          <div class="myCollection-li-right-jifen">价格：</div>
          <button class="myCollection-li-right-buttonO">加入购物车</button>
          <button class="myCollection-li-right-buttonT">立即购买</button>
        </div>
      </li>
      <div class="myCollection-bottom" v-show="this.one.length>0">
        <span class="myCollection-bottom-qingkong"  @click="QingKong">清空</span>
        <span class="myCollection-bottom-quxiao" @click="QuXiao">取消</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "MyCollection",
  data(){
    return{
      chose:true,
      one:[1,2],
      showAlert:false
    }
  },
  methods:{
    goQX(){
      this.showAlert = false
    },
    Chose(){
      this.chose = !this.chose
    },
    QuXiao(){
      this.chose = true
    },
    QingKong(){
      this.one = []
    },
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
    margin-bottom:34px;
  .myCollection-h2
    display:inline-block
    float:right;
    font-size:18px;
    margin-right:10%;
    color:#85cab5;
    cursor:pointer;
  .myCollection-li
    display:flex;
    list-style:none;
    margin-top:20px;
    width:90%;
    box-shadow:0 0px 9px rgba(0,0,0,0.1);
    border-radius:5px;
    height:180px
    .myCollection-li-chose
      display:inline-block
      padding-top:75px;
      cursor:pointer;
      .myCollection-li-chose-input
        width:20px;
        height:20px;
    .chose
      display:none
    .myCollection-li-left
      display:inline-block
      vertical-align:top;
      height:180px;
      width:30%;
      border-radius:5px;
      background-color:yellow;
    .myCollection-li-right
      display:inline-block
      float:right;
      vertical-align:top;
      height:180px;
      flex:1;
      border-radius:5px;
      background-color:yellow;
      margin-left:18px;
      .myCollection-li-right-content
        color:#8d8d8d;
        margin-top:20px;
      .myCollection-li-right-jifen
        display:inline-block;
        margin-top:70px;
      .myCollection-li-right-buttonO
        display:inline-block;
        margin-left:36%;
        font-size:13px;
        border-radius:5px;
        width:80px;
        height:25px;
        color: white;
        background:#85cab5;
        cursor:pointer;
      .myCollection-li-right-buttonT
        display:inline-block;
        font-size:13px;
        border-radius:5px;
        width:60px;
        height:25px;
        color: white;
        cursor:pointer;
        background:#85cab5;
  .myCollection-bottom
    margin-top:3%;
    .myCollection-bottom-qingkong,.myCollection-bottom-quxiao
      cursor:pointer;
      color:#85cab5;
      height:25px;
      line-height:25px;
    .myCollection-bottom-quxiao
      float:right;
      margin-right:12%;
</style>
