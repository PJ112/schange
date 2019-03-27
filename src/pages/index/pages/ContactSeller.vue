<template>
    <div class="contact-seller">
      <div class="contact-container">
        <div class="contact-seller-top">
           <nav-common></nav-common>
        </div>
        <div class="contact-seller-container">
          <div class="contact-seller-container-info">
            <div class="contact-seller-info-img">
              <img src="../../../assets/imgs/contact_seller/img.png">
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
              <router-link :to="'/index?id='+id">

              </router-link>
              卖家主页
            </div>
          </div>
          <div class="contact-seller-container-chat">
            <h1>私信卖家</h1>
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
                  <div class="shop">
                    <router-link :to="'/index-shopping?id='+id"><span>加入购物车</span></router-link>
                    <router-link :to="'/confirm-ordering?id='+id"><span>立即购买</span></router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-seller-chat-content">
              <h1>{{username}}</h1>
              <div class="contact-seller-content-items" >
                <div v-for="(item,index) of message" :key="index">
                  <div class="contact-seller-content-item-left"  v-if="item.sendId===reId">
                    <img src="../../../assets/imgs/contact_seller/img.png">
                    <span class="content">
                      {{item.content}}
                    </span>
                    <span class="point"></span>
                  </div>
                  <div class="contact-seller-content-item-right" v-else>
                    <span class="content">
                      {{item.content}}

                    </span>
                    <span class="point"></span>
                    <img src="../../../assets/imgs/contact_seller/user.png">
                  </div>

                </div>
                <div class="contact-seller-container-form">
                  <input type="text" v-model="content" placeholder="请输入内容" style="padding-left: 10px;">
                  <button type="button" @click="sendMessage">确定</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    import Nav from '../../../common/nav-nosearch/Nav'
    import $ from 'jquery'
    export default {
        name: "ContactSeller",
        components:{
          "nav-common":Nav
        },
        data(){
          return{
            id:this.$route.query.id,
            details:{},
            username:'',
            school:'',
            httpUrl:'http://119.23.12.250:8090/images',
            message:[],
            sellerId:'',
            content:'',
            reId:this.$store.state.userId.userId,
            day:''
          }
        },
        created(){
          let _this=this;
          $.ajax({
            url:'/api/sunny/goods/findOne',
            async:true,
            data:{"id":_this.id},
            success:function (good) {
              _this.details=good.data;
              _this.sellerId=_this.details.sellerId;
              $.ajax({
                url:'/api/sunny/user/findOne ',
                async:true,
                data:{"id":_this.sellerId},
                success:function (user) {
                  let nowTime=new Date().getTime();
                  let createTime=user.data.creatTime;
                  let day=Math.ceil((nowTime-createTime)/1000/60/60/24);
                  _this.day=day;
                  _this.username=user.data.username;
                  _this.school=user.data.school;
                },
                error:function (error) {
                  console.log(error);
                }
              });
              $.ajax({
                url:'/api/sunny/message/findMessage',
                async:true,
                data:{"id":_this.reId,"otherId":_this.sellerId},
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
            if (this.details.imageList){
              return this.httpUrl+this.details.imageList[0].address;

            }
          }
        },
        methods:{
          sendMessage(){
            let  _this=this;
            $.ajax({
              url:'/api/sunny/message/addMessage ',
              async:true,
              data:{"reId":_this.reId,"sendId":_this.sellerId,"content":this.content},
              success:function (content) {
                if (content.flag){
                  if (_this.sellerId){
                    $.ajax({
                      url:'/api/sunny/message/findMessage',
                      async:true,
                      data:{"id":_this.reId,"otherId":_this.sellerId},
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
           top:310px;
           line-height :45px;
           font-weight :bold;
         }

       }
       .contact-seller-container-chat{
         flex :1;
         margin-left :40px;
         background :#fff;
         padding:15px;
         box-sizing border-box;
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
           h1{
             height :70px;
             line-height :70px;
             background :#85cab5;
             color:#fff;
             font-size :24px;
           }
           .contact-seller-content-items{
             margin-bottom :10px;
             position: relative;
             box-shadow :0 0 10px #eee;
             padding :15px;
             .contact-seller-content-item-right{
               width 356px;
               margin-left :300px;
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
                 right: 98px;
                 top: 27px;
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
                 left:0;
                 top:10px;
                 width:0;
                 height:0;

               }


             }


             .contact-seller-container-form{
               display :flex;
               position: absolute;
               bottom:-10px;
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

 }
</style>
