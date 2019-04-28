<template>
  <div>
    <div class="nav">
      <common-nav></common-nav>
    </div>
    <div class="my">
      <div class="my-content">
        <div class="my-left">
          <div class="my-top">
            <div
              class="my-userImg"
              @mouseenter="showAddUserImg"
              @mouseleave="hiidenAddUserImg">
              <img
                src="../../assets/imgs/index/person.png"
                class="my-changeImg"
                v-show="!UserAddress"
              />
              <img
                :src="UserAddress"
                class="my-changeImg"
                v-show="UserAddress"
              />
              <div
                class="iconfont my-choseFile"
                @click.stop="uploadHeadImg"
                v-show="changeuserImg"
              >&#xe615;</div>
              <input
                type="file"
                accept="image/*"
                name="imgFile"
                @change="handleFile"
                class="hiddenInput"
                v-show="changeuserImg"
              />
            </div>
            <div class="my-mes">
              <div class="my-name">{{user.user}}</div>
              <div class="my-sex">
                <img src="../../assets/imgs/my/mycollection/女.png" v-show="UserSex === 2"/>
                <img src="../../assets/imgs/my/mycollection/男.png" v-show="UserSex === 1"/>
                <img src="../../assets/imgs/my/mycollection/保密.png" v-show="UserSex !==1 && UserSex!==2"/>
              </div>
            </div>
            <div class="my-year">圈龄{{day}}天</div>
            <router-link class="my-LeftButton" to="/mydata">编辑资料</router-link>
          </div>
          <div class="my-bottom" >
            <div class="my-BottomLi">
              <router-link
                tag="li"
                class="my-li" to="/mymall"
                :class="{'is-active':$route.meta.active === '/mymall'}"
              >
                <i class="iconfont my-LiIcon">&#xe612;</i>
                积分商城
              </router-link>
              <router-link
                class="my-li"
                to="/mycollection"
                :class="{'is-active':$route.meta.active === '/mycollection'}"
              >
                <i class="iconfont my-LiIconFlag" v-show="Messflag">&#xe605;</i>
                <i class="iconfont my-LiIconM">&#xe69d;</i>
                消息
              </router-link>
              <router-link
                class="my-li"
                to="/mypublish"
                :class="{'is-active':$route.meta.isactive === '/mypublish'}"
              >
                <i class="iconfont my-LiIcon">&#xe616;</i>
                已发布
              </router-link>
              <router-link
                class="my-li"
                to="/mybuy"
                :class="{'is-active':$route.meta.active === '/mybuy'}"
              >
                <i class="iconfont my-LiIconB">&#xe650;</i>
                已购入
              </router-link>
              <router-link
                class="my-li"
                to="/myorder"
                :class="{'is-active':$route.meta.active === '/myorder'}"
              >
                <i class="iconfont my-LiIcon">&#xe60c;</i>
                订单管理
              </router-link>
              <router-link
                class="my-li"
                to="/myhjudge"
                :class="{'is-active':$route.meta.active === '/myhjudge'}"
              >
                <i class="iconfont my-LiIconM">&#xe69d;</i>
                历史评价
              </router-link>
            </div>
          </div>
        </div>
        <div class="my-right">
          <router-view
            :user="user"
            :userId="userId"
            :UserSrc="UserSrc"
            :UserSex="UserSex"
            :wechat="wechat"
            :phone="phone"
            :school="school"
            :Messflag="Messflag"
          ></router-view>
        </div>
        <div class="my-link">
          <my-link></my-link>
        </div>
      </div>
    </div>
    <alert v-if="alertDara"
           :alertDara="alertDara" @alertBack="alertBackFn" @alertSure="alertSureFn"></alert>
  </div>
</template>

<script>
  import MyLink from '../../common/MyLink/Link';
  import Alert from '../../common/Alert/Alert';
  import CommonNav from '../../common/nav-nosearch/Nav'
  import {mapState} from 'vuex'
  export default {
    name: 'My',
    components:{
      Alert,
      MyLink,
      CommonNav
    },
    data(){
      return{
        userInfo: {
          avatar: ''
        },
        changeuserImg:false,
        alertDara:"",
        imgFile:'',
        kind:1,
        UserSrc:'',
        UserSex:Number,
        wechat:'',
        phone:'',
        school:'',
        UserAddress:'',
        httpUrl:'http://119.23.12.250:8090/images',
        PId:Number,
        Messflag:false
      }
    },
    methods:{
      goRes() {
        this.$router.push('./resgister')
      },
      goLogin () {
        this.$router.push('./loginin')
      },
      showAddUserImg(){
        this.changeuserImg = true
      },
      hiidenAddUserImg(){
        this.changeuserImg = false
      },
      // 打开图片上传
      uploadHeadImg () {
        this.$el.querySelector('.hiddenInput').click()
      },
      // 将头像显示
      handleFile(e) {
        let formData=new FormData();
        formData.append("kind",this.kind);
        formData.append("username",this.user.user);
        formData.append("id",this.userId.userId);

        let config={
          headers:{
            'Content-Type': 'multipart/form-data'
          }
        };
        let $target = e.target || e.srcElement;
        let file = $target.files[0];
        this.imgFile=file;
        formData.append("imgFile",this.imgFile);
        let reader = new FileReader();
        reader.onload = (data) => {
          let res = data.target || data.srcElement;
          this.userInfo.avatar = res.result;
          let _this =this
          this.$http.post('http://119.23.12.250/sunny/image/imgUpload', formData, config)
            .then((res)=>{
              if (res.status === 200) {
                _this.fileResource=res.body.data
                if(!_this.UserAddress){
                  $.ajax({
                    url:"http://119.23.12.250/sunny/image/addImageAddress?kind="+_this.kind+"&id="+_this.userId.userId +"&address="+_this.fileResource+"",
                    async:true,
                    type:'GET',
                    success:function (data) {
                      $.ajax({
                        url: "http://119.23.12.250/sunny/image/findImageAddress",
                        async: true,
                        type: 'GET',
                        data: {
                          "kind":_this.kind,
                          "kindId":_this.userId.userId
                        },
                        success: function (data) {
                          console.log(data);
                          if (data){
                            if (data.data){
                              _this.PId = data.data.id;
                              _this.address =data.data.address;
                              _this.UserAddress = _this.httpUrl+_this.address;
                              _this.$store.dispatch('updateUserAsyc',_this.user.user);
                              _this.$store.dispatch('updateuserIdAsyc', _this.userId.userId);
                              _this.$router.go(0);
                            }
                          }
                        },
                        error: function () {

                        },
                        dataType: 'json'
                      })
                    },
                    error:function (error) {
                      console.log(error);
                    },
                    dataType:'json'
                  })

                }else{
                  // alert( _this.fileResource)
                  $.ajax({
                    url:"http://119.23.12.250/sunny/image/update?kind="+_this.kind+"&id="+_this.PId +"&address="+_this.fileResource+"",
                    async:true,
                    type:'GET',
                    success:function (data) {
                      // alert(data.message)
                      $.ajax({
                        url: "http://119.23.12.250/sunny/image/findImageAddress",
                        async: true,
                        type: 'GET',
                        data: {
                          "kind":_this.kind,
                          "kindId":_this.userId.userId
                        },
                        success: function (data) {
                          _this.address =data.data.address
                          _this.UserAddress = _this.httpUrl+_this.address
                          _this.$store.dispatch('updateUserAsyc',_this.user.user);
                          _this.$store.dispatch('updateuserIdAsyc', _this.userId.userId);
                          _this.$router.go(0);
                        },
                        error: function () {

                        },
                        dataType: 'json'
                      })
                    },
                    error:function (error) {
                      console.log(error);
                    },
                    dataType:'json'
                  })

                }
              }
            })
        };
        reader.readAsDataURL(file);

      },
      alertSureFn:function(data){
        this.alertDara = '';
        console.log("点击了确定",data)
      }
    },
    computed:{
      ...mapState(['user']),
      ...mapState(['img']),
      ...mapState(['userId']),
    },
    created(){
      let _this = this
      $.ajax({
        url: "http://119.23.12.250/sunny/user/findOne",
        async: true,
        type: 'GET',
        data: {
          "id":_this.userId.userId
        },
        success: function (data) {
          if (data){
            if (data.data){
              _this.UserSrc=  data.data.address;
              _this.UserSex = data.data.sex
              _this.wechat = data.data.wechat
              _this.phone = data.data.phone
              _this.school = data.data.school
              console.log(_this.school)
              let nowTime=new Date().getTime();
              let createTime=data.data.creatTime;
              let day=Math.ceil((nowTime-createTime)/1000/60/60/24);
              _this.day = day
            }


          }

        },
        error: function () {

        },
        dataType: 'json'
      }),
      $.ajax({
        url: "http://119.23.12.250/sunny/image/findImageAddress",
        async: true,
        type: 'GET',
        data: {
          "kind":_this.kind,
          "kindId":_this.userId.userId
        },
        success: function (data) {
          if (data){
            if (data.data){
              _this.PId = data.data.id;
              _this.address =data.data.address;
              _this.UserAddress = _this.httpUrl+_this.address;
            }
          }
        },
        error: function () {

        },
        dataType: 'json'
      }),
      $.ajax({
        url: "http://119.23.12.250/sunny/message/findUnreadMessage",
        async: true,
        type: 'GET',
        data: {
          "userId":_this.userId.userId
        },
        success: function (data) {
          if (data){
           _this.Messflag = data.flag
          }
        },
        error: function () {

        },
        dataType: 'json'
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .nav
    z-index:1;
  .my
    width:100%;
    z-index:-1;
    min-height:calc(80vh);
    background:white;
    font-family: simsun;
    .my-content
      padding-top:10px;
      margin:0 auto;
      width:80%;
      min-height:calc(120vh);
      background:#e7f4f0;
      .my-left
        display:inline-block;
        vertical-align:top;
        width:20%;
        margin-left:7%;
      .my-top
        height:calc(33vh);
        text-align:center;
        background:white;
        box-shadow:0 0px 9px rgba(0,0,0,0.1)
        border-radius:5px;
        .my-userImg
          display:inline-block
          margin-top:14%;
        .my-changeImg
          width:66px;
          height:61px;
          border-radius:60px;
          cursor:pointer
        .my-choseFile
          margin-top:-29%;
          margin-left:60%;
          cursor:pointer;
          font-size:20px;
          color:black;
          font-weight:bolder;
        .hiddenInput
          display: none;
        .my-mes
          width:100%;
          text-align:center
          .my-name
            font-size:24px;
            color:#323233;
            margin-top:4%;
            margin-bottom:4%;
            display:inline-block
          .my-sex
            display:inline-block
            img
              display:inline-block
              width:calc(2vh);
              height:calc(2.3vh)
              background-size:calc(2vh) calc(2.3vh);
              margin-top:-40%;
        .my-year
          font-size:12px;
          color:#a3a3a7;
          margin-bottom:6%;
          margin-top:6%;
        .my-LeftButton
          display:block;
          font-size:13px;
          border-radius:5px;
          width:80px;
          height:25px;
          line-height:25px;
          color: white;
          background:#85cab5;
          margin-left:30%;
          cursor:pointer;
      .my-bottom
        margin-top:15%;
        width:100%;
        height:calc(40vh)
        background:white;
        box-shadow:0 0px 9px rgba(0,0,0,0.1)
        border-radius:5px;
        .my-BottomLi
          display:inline-block;
          margin-top:12%;
          font-size:0;
          .router-link-active
            background:#85cab5;
            color:white;
          .my-li
            display:inline-block;
            padding-left:42px;
            margin-left:5%;
            margin-right:5%;
            width:70%;
            height:34px;
            line-height:34px;
            font-size:12px;
            color:#85cab5;
          .is-active
            color:white;
          .my-LiIcon
            font-size:20px;
            vertical-align:top;
            margin-right:20px;
          .my-LiIconM
            font-size:18px;
            vertical-align:top;
            margin-right:20px;
          .my-LiIconFlag
            position:absolute
            margin-left:-2%;
            font-size:18px;
            vertical-align:top;
            color:red;
          .my-LiIconB
            font-size:24px;
            vertical-align:top;
            margin-right:20px;
            margin-left:-1%;
      .my-right
        display:inline-block;
        vertical-align:top;
        margin-left:3%;
        width:63%;
        min-height:calc(76vh);
        background:white;
      .my-link
        display:inline-block;
        position:fixed;
        margin-top:15%;
        width:6%;
        height:80%;
</style>

