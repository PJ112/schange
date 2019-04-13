<template>
  <div class="contact-seller">
    <div class="contact-container">
      <div class="contact-seller-top">
        <nav-common></nav-common>
      </div>
      <div class="contact-seller-container">
        <div class="contact-seller-container-info">
          <div class="contact-seller-info-img">
            <img src="../../../assets/imgs/index/person.png" v-if="!userImg">
            <img style="width: 60px;height: 60px;border-radius: 50%" :src="userImg" v-else/>
          </div>
          <div class="contact-seller-container-name">
            {{username}}
          </div>
          <div class="contact-seller-container-age">
            圈龄{{day}}天
          </div>
          <div class="contact-seller-container-school">
            学校：<span>{{school}}</span>
          </div>
          <div class="contact-seller-container-index">
            <router-link :to="'/sellersmes?id='+buyerId">
              买家主页
            </router-link>
          </div>
        </div>
        <div class="contact-seller-container-chat">
          <h1>私聊买家</h1>
          <div class="contact-seller-chat-info">
            <div class="contact-seller-info-img">
              <img :src="getImgUrl" style="width:150px;height: 150px;">
            </div>
            <div class="contact-seller-info-desc">
              <div class="contact-seller-deac-name">
                {{details.name}}
              </div>
              <div class="contact-seller-desc-price">
                <div class="price">
                  价格：<span>{{details.price}}元</span>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-seller-chat-content" v-if="message.length>0">
            <h1>{{username}}</h1>
            <div class="contact-seller-content-items"  >
              <div v-for="(item,index) of message" :key="index" style="clear: both">
                <div class="contact-seller-content-item-right" v-if="item.sendId===meId">
                    <span class="content">
                      {{item.content}}
                    </span>
                  <span class="point"></span>
                  <img style="width: 50px;height: 50px;border-radius: 50%" src="../../../assets/imgs/index/person.png" v-if="!meImg">
                  <img style="width:50px;height: 50px;border-radius: 50%" :src="meImg" v-else/>
                </div>
                <div class="contact-seller-content-item-left"  v-else>
                  <img style="width: 50px;height: 50px;border-radius: 50%" src="../../../assets/imgs/index/person.png" v-if="!userImg">
                  <img style="width:50px;height: 50px;border-radius: 50%" :src="userImg" v-else/>
                  <span class="content">
                      {{item.content}}
                    </span>
                  <span class="point"></span>
                </div>
              </div>
            </div>
            <div class="contact-seller-container-form">
              <input type="text" v-model="content" placeholder="请输入内容" style="padding-left: 10px;"  @keyup.enter="sendMessage">
              <button type="button" @click="sendMessage">确定</button>
            </div>
          </div>
          <div class="contact-seller-chat-content"  v-else>
            <h1>{{username}}</h1>
            <div class="contact-seller-content-items" style="text-align: center;color: red">
              您暂时和卖家还没有消息哦，快来聊天吧！
            </div>
            <div class="contact-seller-container-form1">
              <input type="text" v-model="content" placeholder="请输入内容" style="padding-left: 10px;"  @keyup.enter="sendMessage">
              <button type="button" @click="sendMessage">确定</button>
            </div>

          </div>
        </div>
      </div>
    </div>
    <icon-common></icon-common>
  </div>
</template>

<script>
  import Nav from '../../../common/nav-nosearch/Nav'
  import Icon from '../../../common/indexIcon/Icon'
  import $ from 'jquery'
  export default {
    name: "ContactSeller",
    components:{
      "nav-common":Nav,
      "icon-common":Icon
    },
    data(){
      return{
        // goodsId:this.$route.query.goodsId,
        goodsId:this.$route.query.goodsId,
        details:{},
        username:'',
        school:'',
        httpUrl:'http://119.23.12.250:8090/images/',
        message:[],
        // buyerId:this.$route.query.buyerId,
        buyerId:this.$route.query.buyerId,
        content:'',
        // meId:this.$route.query.meId,
        meId:this.$route.query.meId,
        day:'',
        userImg:'',
        meImg:'',
      }
    },
    created(){
      let _this=this;
      console.log(this.goodsId);
      $.ajax({
        url:'/api/sunny/goods/findOne',
        async:true,
        data:{"id":_this.goodsId},
        success:function (good) {
          _this.details=good.data;
          $.ajax({
            url:'/api/sunny/user/findOne ',
            async:true,
            data:{"id":_this.buyerId},
            success:function (user) {
              let nowTime=new Date().getTime();
              let createTime=user.data.creatTime;
              let day=Math.ceil((nowTime-createTime)/1000/60/60/24);
              _this.day=day;
              _this.username=user.data.username;
              _this.school=user.data.school;
              $.ajax({
                url:'/api/sunny/image/findImageAddress',
                async:true,
                data:{"kindId":_this.buyerId,"kind":1},
                success:function (img) {
                  if (img.flag){
                    if (img.data){
                      _this.userImg=_this.httpUrl+img.data.address;
                    }
                  }
                },
                error:function (error) {
                  console.log(error);
                }
              });
              $.ajax({
                url:'/api/sunny/image/findImageAddress',
                async:true,
                data:{"kindId":_this.meId,"kind":1},
                success:function (img) {
                  if (img.flag){
                    if (img.data){
                      _this.meImg=_this.httpUrl+img.data.address;
                    }
                  }
                },
                error:function (error) {
                  console.log(error);
                }
              })


            },
            error:function (error) {
              console.log(error);
            }
          });
          $.ajax({
            url:'/api/sunny/message/findMessage',
            async:true,
            data:{"id":_this.buyerId,"otherId":_this.meId,"goodsId":_this.goodsId},
            success:function (message) {

              _this.message=message.data;

            },
            error:function (error) {
              console.log(error);
            }
          })
        },
        error:function (error) {
          console.log(error);
        }
      });

    },
    computed:{
      getImgUrl(){
        if (this.details){
          if (this.details.imageList){
            if (this.details.imageList[0]){
              return this.httpUrl+this.details.imageList[0].address;

            }

          }
        }

      }
    },
    methods:{
      sendMessage(){
        let  _this=this;

        if (_this.content===""){
          return;
        }
        $.ajax({
          url:'/api/sunny/message/addMessage ',
          async:true,
          data:{"reId":_this.buyerId,"sendId":_this.meId,"content":this.content.trim(),"goodsId":_this.goodsId},
          success:function (content) {
            if (content.flag){
              if (_this.buyerId){
                $.ajax({
                  url:'/api/sunny/message/findMessage',
                  async:true,
                  data:{"id":_this.meId,"otherId":_this.buyerId,"goodsId":_this.goodsId},
                  success:function (message) {
                    _this.message=message.data;
                    if (_this.message.length>0){
                      _this.content='';
                    }

                  },
                  error:function (error) {
                    console.log(error);
                  }
                })
              }

            }


          },
          error:function (error) {
            console.log(error);
          }
        })
      },
      addProduct(){
        let _this=this;
        $.ajax({
          url:'/api/sunny/cart/add',
          async:true,
          data:{"buyerId":this.buyerId,"goodsId":this.goodsId,"number":1},
          success:function (product) {
            if (product.flag){
              _this.$router.push('/index-shopping');
            }
          },
          error:function (error) {
            console.log(error);
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus">

  .contact-seller{
    width: 100%;
    height: 100%;
    background: #fff;
    font-family: simsun;
    padding-bottom :100px;
    .contact-container{
      margin-left 100px;
      margin-right 100px;
      background #e7f4f0;
      padding-bottom :100px;
      box-sizing border-box;
      .contact-seller-container{
        width: 80%;
        margin: 0 auto;
        box-sizing: border-box;
        display :flex;
        .contact-seller-container-info{
          width:330px;
          text-align :center;
          margin :0 auto;
          background :#fff;
          padding-top :55px;
          position: relative;

          .contact-seller-container-name{
            margin-top :20px;
            color:#5c5c5d;
            font-size :24px;
            font-weight :bold;
          }
          .contact-seller-container-age{
            margin-top :12px;
            color:#79797f;
            font-size :16px;
            font-weight :bold;

          }
          .contact-seller-container-school{
            margin-top :36px;
            color :#79797f;
            font-weight :bold;
            font-size :18px;
            span{
              color :#000;
            }
          }
          .contact-seller-container-index{
            position: absolute;
            margin-top :32px;
            background :#85cab5;
            border-radius :5px;
            color :#fff;
            width:130px;
            height:45px;
            margin-left :-65px;
            left :50%;
            top:245px;
            line-height :45px;
            font-weight :bold;
            a{
              display inline-block;
              text-decoration none;
              color #fff;
            }
          }

        }
        .contact-seller-container-chat{
          flex :1;
          margin-left :40px;
          background :#fff;
          padding:15px;
          box-sizing border-box;
          padding-bottom :55px;
          h1{
            text-align :center;
            height:95px;
            line-height :95px;
            border-bottom :4px solid #f5f7f9;
            color:#85cab5;
            font-size :24px;
          }
          .contact-seller-chat-info{
            display :flex;
            padding:16px;
            box-shadow :0 2px 2px #eee;
            margin-right :10px;
            .contact-seller-info-img{

            }
            .contact-seller-info-desc{
              flex :1;
              margin-left :27px;
              .contact-seller-deac-name{
                color:#989898;
                font-size :18px;
                font-weight :bold;
                margin-top 20px;
              }
              .contact-seller-desc-price{
                margin-top :97px;
                .price{
                  float :left;
                  color:#989898;
                  font-size :16px;
                  font-weight :bold;
                  vertical-align :middle;
                  span{
                    color:#85cab5;
                  }
                }
                .shop{
                  vertical-align :middle;
                  float :right;
                  span{
                    display :inline-block;
                    width:100px;
                    height:27px;
                    text-align :center;
                    line-height :27px;
                    background :#85cab5;
                    border-radius :5px;
                    color:#fff;
                  }
                }
              }
            }
          }
          .contact-seller-chat-content{
            margin-top :10px;
            position: relative;
            h1{
              height :70px;
              line-height :70px;
              background :#85cab5;
              color:#fff;
              font-size :24px;
            }
            .contact-seller-content-items{
              margin-bottom :10px;
              padding :15px;
              .contact-seller-content-item-right{
                width 318px;
                float right;
                clear both;
                margin-bottom :35px;
                position: relative;
                .content{
                  display :inline-block;
                  border:1px solid #85cab5;
                  color:#555;
                  width:220px;
                  padding:15px;
                  word-wrap: break-word;
                  word-break: break-all;
                  overflow: hidden;
                  margin-right :10px;
                  z-index 1;
                  border-radius 5px;
                  vertical-align middle
                }
                .point{
                  position: absolute;
                  right: 59px;
                  top: 18px;
                  width:12px;
                  height:12px;
                  display inline-block;
                  border-top: 1px solid #85cab5;
                  border-right: 1px solid #85cab5;
                  transform: rotate(45deg);
                  z-index:110;
                  background #fff;
                }
              }
              .contact-seller-content-item-left{
                margin-bottom :35px;
                position: relative;
                float left;
                clear both;
                .content{
                  display :inline-block;
                  border:1px solid #85cab5;
                  color:#555;
                  width:220px;
                  padding:15px;
                  margin-left :10px;
                }
                img{
                  width:60px;
                  height:60px;
                }
                .point{
                  position: absolute;
                  left: 57px;
                  top: 18px;
                  width: 12px;
                  height: 12px;
                  display: inline-block;
                  border-bottom: 1px solid #85cab5;
                  border-left: 1px solid #85cab5;
                  -webkit-transform: rotate(45deg);
                  transform: rotate(45deg);
                  z-index: 110;
                  background: #fff;
                }


              }


            }
            .contact-seller-container-form{
              display :flex;
              position:absolute;
              bottom:-115px;
              left:0;
              right:0;
              input{
                flex :1;
                height:45px;
                line-height :45px;
                border:1px solid #85cab5;
              }
              button{
                width:92px;
                height:47px;
                line-height :47px;
                text-align :center;
                background :#85cab5;
                color:#fff;
                font-size :18px;
              }
            }
            .contact-seller-container-form1{
              display :flex;
              position:absolute;
              bottom:-58px;
              left:0;
              right:0;
              input{
                flex :1;
                height:45px;
                line-height :45px;
                border:1px solid #85cab5;
              }
              button{
                width:92px;
                height:47px;
                line-height :47px;
                text-align :center;
                background :#85cab5;
                color:#fff;
                font-size :18px;
              }
            }

          }
        }
      }
    }

  }
  .contact-seller .icon{
    position: fixed
    right 128px;
  }
</style>
