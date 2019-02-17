<template>
    <div>
      <div class="myData">
        <h1 class="myData-h1">编辑个人资料</h1>
        用户名<br>
        <input type="text"  class="myData-userInput" placeholder="username" v-model="username"/>
        <div class="myData-userImg">
          <img src="../../resource/头像.png" v-show="!userInfo.avatar"/>
          <img :src="userInfo.avatar" class="myData-changeImg" v-show="userInfo.avatar"/>
        </div>
        <div class="myData-choseFile" @click.stop="uploadHeadImg">
          <img src="../../resource/选择文件.png"/>
        </div>
        <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
        <div class="myData-sex">
          性别
          <div class="myData-sex-detail">
          <span class="myData-sex-male">
            <img src="../../resource/男.png" />
           <span :class="{'close':close1,'on':on1}" @click="changeOC1"><input type="radio" id="male" name="sex"/></span>
          </span>
            <span class="myData-sex-female">
            <img src="../../resource/女.png"/>
            <span :class="{'close':close2,'on':on2}" @click="changeOC2"><input type="radio" id="female" name="sex"/></span>
          </span>
            <span>
            <img src="../../resource/保密.png"/>
            <span :class="{'close':close3,'on':on3}" @click="changeOC3"><input type="radio" id="baomi" name="sex"/></span>
          </span>
          </div>
        </div>
        <div class="myData-tel">
          手机号<br/>
          <input type="text" v-model="myDateTel" class="myData-tel-detail"/>
        </div>
        <div class="myData-tel">
          QQ/微信<br/>
          <input type="text" v-model="myDateMes" class="myData-tel-detail"/>
        </div>
        <div class="myData-tel">
          所在学校<br/>
          <input type="text" v-model="myDateSch" class="myData-tel-detail"/>
        </div>
        <div class="myData-baocun" @click="goBao">
          <img src="../../resource/保存.png"/>
        </div>
      </div>
      <transition name="fade">
        <div v-show="showAlert" class="myData-alert">
          <div class="myData-alert-icon iconfont" @click="goQX">&#xe608;</div>
          <div class="myData-alert-mes">确认保存吗？</div>
          <div class="myData-alert-quxiao" @click="goQX">取消</div>
          <div class="myData-alert-queding" @click="goQD">确定</div>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  name: "MyData",
  data(){
    return {
      userInfo: {
        avatar: ''
      },
      showAlert:false,
      close1:true,
      on1:false,
      close2:true,
      on2:false,
      close3:true,
      on3:false
    }
  },
  props:{
    user:''
  },
  methods: {
    // 打开图片上传
    uploadHeadImg () {
      this.$el.querySelector('.hiddenInput').click()
    },
    // 将头像显示
    handleFile(e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.avatar = res.result
      }
      reader.readAsDataURL(file)
    },
    goBao() {
      this.showAlert = true
    },
    goQX(){
      this.showAlert = false
    },
    goQD() {
      if(!this.userInfo.avatar){
        this.showAlert = false
      }else {
        this.$store.dispatch('updateImgAsyc',this.userInfo.avatar)
        this.showAlert = false
      }
    },
    changeOC1(){
        this.on1 = !this.on1
        this.on2 = false
        this.on3 = false
    },
    changeOC2(){
      this.on2 = !this.on2
      this.on1 = false
      this.on3 = false
    },
    changeOC3(){
      this.on3 = !this.on3
      this.on2 = false
      this.on1 = false
    }
  },
}
</script>

<style lang="stylus" scoped>
  input[type="radio"]{
   opacity:0;
    cursor:pointer;
  }
  .myData
    margin-left:8%;
    margin-top:32px;
    .myData-h1
      font-size:18px;
      color:#323233;
      margin-bottom:34px;
    .myData-userInput
      display:block;
      margin-top:10px;
      width:80%;
      height:45px;
      line-height:45px;
      border:1px solid black;
      border-radius:2px;
    .myData-userImg
      display:inline-block
      margin-top:6%;
      .myData-changeImg
        width:50px;
        height:50px;
        border-radius:50px;
    .myData-choseFile
      display:inline-block
      margin-top:6%;
      color:gray;
      margin-left:2%;
      cursor:pointer;
    .hiddenInput
      display: none;
    .myData-sex
      margin-top:6%;
      .myData-sex-detail
        margin-top:2%;
        .myData-sex-female
          margin-left:74px;
          margin-right:74px;
        .close
          z-index:100;
          margin-left:26px;
          background-image:url("../../resource/选择框.png")
          background-repeat:no-repeat;
          background-size:100% 100%;
          width:20px;
          height:20px;
        .on
          z-index:-1;
          margin-left:26px;
          background-image:url("../../resource/选中.png")
          width:20px
          height:20px;
    .myData-tel
      margin-top:6%;
      .myData-tel-detail
        margin-top:10px;
        width:80%;
        height:45px;
        line-height:45px;
        border:1px solid black;
        border-radius:2px;
    .myData-baocun
      margin-top:6%;
      margin-left:28%;
      cursor:pointer
  .myData-alert
    z-index:100;
    position:fixed
    width:350px;
    height:130px;
    background:whitesmoke;
    border-radius:5px
    margin-left:6%;
    margin-top:-40%;
    text-align:center;
    font-size:20px;
    &.fade-enter-active, &.fade-leave-active {
      transition: opacity 0.5s;
    }
    &.fade-enter, &.fade-leave-to {
      opacity: 0;
    }
    .myData-alert-icon
      font-size:20px;
      float:right;
      display:inline-block;
      color:gray;
      margin-top:2px;
      margin-right:2px;
      cursor:pointer;
    .myData-alert-mes
        margin-top:9%;
    .myData-alert-quxiao, .myData-alert-queding
      display:inline-block;
      margin-top:8%;
      font-size:18px;
      width: 174px;
      height:50px;
      line-height:50px;
      background-color:#abd9ca;
      border-left:1px solid white;
      cursor:pointer;
      color:white;
    .myData-alert-quxiao
      float:left;
    .myData-alert-queding
      float:right;
</style>
