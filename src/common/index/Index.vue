<template>
    <div class="index">
      <div class="index-top">
        <nav-common ></nav-common>
      </div>
      <div class="index-center">
        <div class="index-carousel" >
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../assets/imgs/index/banner.png">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
       <div class="index-bottom">
         <div class="index-category">
           <div class="index-category-all">
             <div class="all">所有分类</div>
             <router-link to="detail">
               <div class="index-category-item" v-for="(item,index) of 8" :key="index">
                 <div class="item-icon">
                   <img src="../../assets/imgs/index/图书.png">
                 </div>
                 <div class="item-name">
                   服饰
                 </div>
                 <div class="item-one" v-for="(item,index) of items" :key="index">
                   {{item}}
                 </div>
               </div>
             </router-link>
           </div>
           <div class="index-category-recommend">
             <div class="all">热门推荐</div>
             <div class="recommend-items">
               <div class="item" v-for="(item,index) of 6" :key="index">
                 <router-link to="/sale-product">
                   <div class="item-img">
                     <img src="../../assets/imgs/index/iphone.jpg"/>
                   </div>
                   <div class="item-description">
                     <div class="item-name">
                       个人闲置苹果X国行
                     </div>
                     <div class="item-price">
                       价格：3599元
                     </div>
                   </div>
                 </router-link>

               </div>
             </div>
           </div>
         </div>
         <div class="index-copyright">
               Copyright @ 2019 Team Sunny
         </div>
       </div>
    </div>
</template>

<script>
    import NavCommon from '../nav/Nav'
    import  Swiper from 'swiper'
    export default {
        name: "Index",
        components:{
          "nav-common":NavCommon
        },
        data(){
          return{
            items:["女装","男装","鞋靴","箱包"]
          }
        },
        created() {
            new Swiper ('.swiper-container', {
              loop: true,
              pagination: {
                el: '.swiper-pagination',
              }
            });


        }
    }
</script>

<style lang="stylus" scoped>
  .index-category-item:hover{
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    cursor :pointer;
  }
  .item:hover{
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -o-transform: scale(1.05);
    -ms-transform: scale(1.05);
    cursor :pointer;
  }
  .index{
    width: 100%;
    height: 100%;
    background :#fff;
    font-family "Microsoft Yahei";
    .index-top {
      width: 100%;
      z-index :100;
    }
    .index-center{
      z-index :1;
      .index-carousel{
        img{
          width :120%;
          height :350px;
        }
      }
    }

    .index-bottom{
      width :100%;
      height:auto;
      .index-category{
        width:82%;
        margin :0 auto;
        text-align :center;
        background :#e7f4f0;
        height :auto;
        padding-top:100px;
        padding-bottom :40px;
        .index-category-all{
          .all{
            font-size :30px;
            margin-bottom :60px;
          }
          .index-category-item{
            display :inline-block;
            width :180px;
            background :#fff;
            height :275px;
            margin-right :30px;
            margin-left :20px;
            margin-bottom :20px;
            border-radius :10px;
            text-align :center;
            padding :0 8px;
            box-shadow :0 0 10px #ccc;
            transition: All 0.4s ease-in-out;
            -webkit-transition: All 0.4s ease-in-out;
            -moz-transition: All 0.4s ease-in-out;
            -o-transition: All 0.4s ease-in-out;
            .item-name{
              font-size :18px;
              color :#323232;
              margin-bottom :6px;
            }
            .item-one{
              font-size :15px;
              color: #858383;
              padding-top :8px;
              border-top:2px solid #f5f7f9;
              margin-bottom :8px;
              text-align :center;
            }
          }
        }
        .index-category-recommend{
           margin-top :100px;
           .all{
             font-size :30px;
             margin-bottom :60px;
           }
          .recommend-items{
            .item{
              width:280px;
              height :440px;
              display :inline-block;
              margin-right :15px;
              vertical-align :top;
              margin-bottom :30px;
              box-shadow :0 0 20px #ccc;
              border-radius :8px;
              background :#85cab5;
              transition: All 0.4s ease-in-out;
              -webkit-transition: All 0.4s ease-in-out;
              -moz-transition: All 0.4s ease-in-out;
              -o-transition: All 0.4s ease-in-out;
              .item-img{
                width :100%;
                height :300px;
                img{
                  max-width :100%;
                  max-height :100%;
                  border-radius :8px;

                }
              }
              .item-description{
                width:280px;
                height :auto;
                background :#85cab5;
                font-size :24px;
                color :#fff;
                padding-top :29px;
                padding-bottom :30px;
                .item-name{
                  margin-bottom :22px;
                }
                .item-price{
                  font-weight :bold;

                }
              }
            }
          }
        }
      }
      .index-copyright{
        text-align :center;
        margin-top :110px;
        color :#333333;
        margin-bottom :100px;
        font-weight :bold;
        font-size :18px;
      }
    }
  }
</style>
