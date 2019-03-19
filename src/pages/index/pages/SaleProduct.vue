<template>
    <div class="sale-product">
      <div class="sale-product-top">
        <div class="sale-product-top-icon">
          <img src="../../../assets/imgs/index_shopping/schange.png">
        </div>
        <div class="sale-product-top-user">
          <img src="../../../assets/imgs/index_shopping/user.png">
          <span>退出登录</span>
        </div>
      </div>
      <div class="sale-product-container">
        <div class="sale-product-container-desc">
          <div class="sale-product-desc-top">
            <h1 class="sale-product-top-name">
              JORDAN篮球
            </h1>
            <div class="sale-product-top-share">
              <span class="img">
                <img src="../../../assets/imgs/sale-product/user.png">
              </span>
              <span class="info">Sunny</span>
              <span class="img">
                <img src="../../../assets/imgs/sale-product/category.png">
              </span>
              <span class="info">运动</span>
            </div>
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="../../../assets/imgs/sale-product/ball.png">
                </div>
              </div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
          <div class="sale-product-container-center">
            <span><img src="../../../assets/imgs/sale-product/shop.png"><span>加入购物车</span></span>
            <span><img src="../../../assets/imgs/sale-product/cursor.png"><span>立即购买</span></span>
          </div>
          <div class="sale-product-container-bottom">
            <div class="sale-product-bottom-info">
              物品详情
            </div>
            <div class="sale-product-bottom-desc">
              <div>物品新旧:<span class="desc">八成新</span></div>
              <div>交易方式:
                 <span class="desc">
                   <span class="sale"><label for="pick-up">自    提</label><input type="checkbox" id="pick-up"></span>
                   <span class="sale"><label for="pick-door"></label>送货上门<input type="checkbox" id="pick-door"></span>
                   <span class="sale"><label for="pick-meet"></label>会面交易<input type="checkbox" id="pick-meet"></span>
                 </span>
              </div>
              <div>详情描述:
                <span class="desc">篮球由实体店购入，因即将实习，没有机会打篮球，故转手。亏本出售，拒绝砍价，有意拍下即可</span>
              </div>

            </div>
          </div>
        </div>
        <div class="sale-product-container-price">
           <h1 class="sale-product-price-top">
             价格：69元
           </h1>
           <div class="sale-product-price-bottom">
             <img src="../../../assets/imgs/sale-product/img.png">
             <div class="sale-product-top-name">
               Judy
             </div>
             <div class="sale-product-top-age">
               圈龄1个月
             </div>
             <div class="sale-product-top-index">卖家主页</div>
             <router-link to="contact-seller">
               <div class="sale-product-top-producer">私信卖家</div>
             </router-link>
           </div>
        </div>
      </div>
    </div>

</template>

<script>
    export default {
        name: "SaleProduct"
    }
</script>

<style scoped lang="stylus">
  .sale-product {
    width: 100%;
    height: 100%;
    background: #e7f4f0;
    font-family: simsun;
    padding-bottom :100px;
    .sale-product-top {
      width: 80%;
      height: 112px;
      margin: 0 auto;
      box-sizing: border-box;
      .sale-product-top-icon {
        float: left;
        width: 275px;
        height: 92px;
        img {
          width: 100%;
          margin-top: 5px;
          height: 88px;
        }
      }
      .sale-product-top-user {
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
    .sale-product-container {
      width: 80%;
      margin: 0 auto;
      box-sizing: border-box;
      display :flex;
      .sale-product-container-desc {
        flex:1;
        .sale-product-desc-top{
          background :#fff;
          padding:38px 150px;
          .sale-product-top-name{
            color:#323232;
            font-size :24px;
          }
          .sale-product-top-share{
            margin-top :26px;
            .img{
              margin-right:8px;
            }
            .info{
              margin-right :30px;
              font-size :18px;
              color:#323232;
            }
          }
          .swiper-container{
            margin-top:24px;
          }


        }
        .sale-product-container-center{
          padding-top :20px;
          margin:0 auto;
          text-align :center;
          padding-bottom :20px;
          span{
            display :inline-block;
            padding:8px 10px;
            background :#fff;
            font-size :17px;
            img{
              vertical-align :middle;
              display :inline-block;
            }
            span{
              vertical-align :middle;
              display :inline-block;
              color:#323232;
              font-weight :bold;
            }
          }
        }
        .sale-product-container-bottom{
          background: #fff;
          .sale-product-bottom-info{
            text-align :center;
            height:100px;
            line-height :100px;
            border-bottom :3px solid #e7f4f0;
            color:#85cab5;
            font-size :24px;
            font-weight:bold;
          }
          .sale-product-bottom-desc{
            padding:35px 100px;
            div{
              color:#666666;
              font-size :16px;
              margin-bottom :16px;
              .desc{
                color :#272727;
                font-size :18px;
                font-weight :bold;
                letter-spacing :4px;
                line-height :30px;
                input{
                  margin-left :8px;
                  display :inline-block;
                  width:20px;
                  height:20px;
                }
              }

            }
          }
        }
      }
      .sale-product-container-price {
         width:500px;
         margin-left :60px;
         background :#fff;
         .sale-product-price-top{
           background :#85cab5;
           height:90px;
           line-height :90px;
           text-align :center;
           color:#fff;
           font-size :24px;
           font-weight :bold;
           border-bottom :15px solid #e7f4f0;

         }
         .sale-product-price-bottom{
           padding:0 80px;
           text-align :center;
           img{
             text-align :center;
             width:120px;
             height :120px;
             margin-top :48px;
             margin-bottom :38px;
           }
           .sale-product-top-name{
             color :#323232;
             font-size :18px;
             margin-bottom :18px;
           }
           .sale-product-top-age{
             color :#a3a3a7;
             font-size :16px;
             font-weight :bold;
             margin-bottom :43px;
           }
           .sale-product-top-index{
             width:120px;
             height:40px;
             line-height :40px;
             background :#85cab5;
             margin-bottom:20px;
             border-radius :8px;
             color :#fff;
             font-weight :bold;
           }
           .sale-product-top-producer{
             width:120px;
             height:40px;
             line-height :40px;
             background :#85cab5;
             margin-bottom:20px;
             border-radius :8px;
             color :#fff;
             font-weight :bold;

           }
        }
      }
    }
  }
</style>
