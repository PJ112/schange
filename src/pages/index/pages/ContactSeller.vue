<template>
    <div class="contact-seller">
      <div class="contact-seller-top">
        <div class="contact-seller-top-icon">
          <img src="../../../assets/imgs/index_shopping/schange.png">
        </div>
        <div class="contact-seller-top-user">
          <img src="../../../assets/imgs/index_shopping/user.png">
          <span>退出登录</span>
        </div>
      </div>
      <div class="contact-seller-container">
        <div class="contact-seller-container-info">
          <div class="contact-seller-info-img">
            <img src="../../../assets/imgs/contact_seller/img.png">
          </div>
          <div class="contact-seller-container-name">
            Judy
          </div>
          <div class="contact-seller-container-age">
            圈龄1个月
          </div>
          <div class="contact-seller-container-school">
            学校：<span>巢湖学院</span>
          </div>
          <div class="contact-seller-container-index">
            卖家主页
          </div>
        </div>
        <div class="contact-seller-container-chat">
          <h1>私信卖家</h1>
          <div class="contact-seller-chat-info">
            <div class="contact-seller-info-img">
              <img src="../../../assets/imgs/contact_seller/ball.png">
            </div>
            <div class="contact-seller-info-desc">
              <div class="contact-seller-deac-name">
                耐克NIKE室内外水泥地比赛篮球  乔丹JORDAN PU 皮篮球
              </div>
              <div class="contact-seller-desc-price">
                <div class="price">
                 价格：<span>69元</span>
                </div>
                <div class="shop">
                  <span>加入购物车</span>
                  <span>立即购买</span>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-seller-chat-content">
            <h1>Judy</h1>
            <div class="contact-seller-content-items">
              <div class="contact-seller-content-item-right">
              <span>您好，请问这个可以优惠一些吗？</span>
              <img src="../../../assets/imgs/contact_seller/user.png">
            </div>
              <div class="contact-seller-content-item-left">
                <img src="../../../assets/imgs/contact_seller/img.png">
                <span>抱歉，这已经是最低价格啦</span>
              </div>
              <div class="contact-seller-content-item-right">
                <span>您好，请问这个可以优惠一些吗？</span>
                <img src="../../../assets/imgs/contact_seller/user.png">
              </div>
              <div class="contact-seller-content-item-left">
                <img src="../../../assets/imgs/contact_seller/img.png">
                <span>抱歉，这已经是最低价格啦</span>
              </div>
              <div class="contact-seller-container-form">
                <input type="text" >
                <button type="button">确定</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ContactSeller"
    }
</script>

<style scoped lang="stylus">
 .contact-seller{
   width: 100%;
   height: 100%;
   background: #e7f4f0;
   font-family: simsun;
   padding-bottom :100px;
   .contact-seller-top {
     width: 80%;
     height: 112px;
     margin: 0 auto;
     box-sizing: border-box;
     .contact-seller-top-icon {
       float: left;
       width: 275px;
       height: 92px;
       img {
         width: 100%;
         margin-top: 5px;
         height: 88px;
       }
     }
     .contact-seller-top-user {
       float: right;
       line-height: 92px;
       margin-right: 40px;
       span {
         margin-left: 20px;
         color: #2ab7b7;
         display: inline-block;
         font-size: 18px;
         height: 92px;
         line-height: 92px;
         font-weight: bold;
       }
     }
   }

   .contact-seller-container{
     width: 80%;
     margin: 0 auto;
     box-sizing: border-box;
     margin-top :26px;
     display :flex;
     .contact-seller-container-info{
       width:330px;
       text-align :center;
       margin :0 auto;
       background :#fff;
       padding-top :55px;
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
         margin-top :32px;
         background :#85cab5;
         border-radius :5px;
         color :#fff;
         width:130px;
         height:45px;
         line-height :45px;
         font-weight :bold;
         margin-left :100px;
       }

     }
     .contact-seller-container-chat{
       flex :1;
       margin-left :40px;
       background :#fff;
       padding:15px;
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
             margin-left :300px;
             margin-bottom :47px;
             span{
               display :inline-block;
               border:1px solid #85cab5;
               color:#555;
               width:220px;
               padding:15px;
               margin-right :10px;
             }
           }
           .contact-seller-content-item-left{
             margin-bottom :47px;
             span{
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
</style>
