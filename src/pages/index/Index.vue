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
            <div class="swiper-slide">
              <img src="../../assets/imgs/index/banner1.jpg"/>
            </div>
            <div class="swiper-slide">
              <img src="../../assets/imgs/index/banner2.jpg"/>
            </div>
            <div class="swiper-slide">
             <img src="../../assets/imgs/index/banner3.jpg"/>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>

    </div>
    <div class="index-bottom">
      <div class="index-category">
        <div class="index-category-all">
          <div class="all">所有分类</div>
          <div class="index-category-items">
            <div class="index-category-item" v-for="(item,index) of categories" :key="index" >
              <div class="item-icon" style="padding-top:30px;">
                <img style="width: 40px;height: 40px;" :src="getImgSrc(item.tbType.type)">
              </div>
              <div class="item-name" style="margin-top: 30px;">
                {{item.tbType.type}}
              </div>
              <div class="item-one" v-for="(type,index) of item.tbTypeList" :key="index">
                <router-link :to="'/detail?typeId='+type.id+'&name='+type.type">
                  {{type.type}}
                </router-link>
              </div>
            </div>
          </div>

        </div>
        <div class="index-category-line">
          <div class="index-lines">
            <div class="index-line-title">
              <img src="../../assets/imgs/index/新闻.png"/>
              <div class="title">
                让生活更有趣
              </div>
            </div>
            <div class="index-line-swiper">
              <div class="swiper-container1">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" >
                    <router-link to="/line-1">
                        <img src="https://img.alicdn.com/tfscom/i4/O1CN011K8XfMejDwXytNk_!!0-arctic.jpg"/>
                        <div class="swiper-info">
                          <div class="info-top">
                            双11潮流盛典男神齐聚！张艺兴霸气开场
                          </div>
                          <div class="info-desc">
                            众男神亮相双11潮流盛典！
                          </div>
                        </div>
                    </router-link>
                  </div>
                  <div class="swiper-slide" >
                    <router-link to="/line-2">
                      <img src="https://img.alicdn.com/tfscom/i1/O1CN011KSEhGaBP2xZQEE_!!0-arctic.jpg"/>
                      <div class="swiper-info">
                        <div class="info-top">
                          李宇春压轴潮流盛典，玩转国潮白流苏！
                        </div>
                        <div class="info-desc">
                          李宇春压轴亮相天猫双11潮流盛典！
                        </div>
                      </div>
                    </router-link>
                  </div>
                  <div class="swiper-slide" >
                    <router-link to="/line-3">
                      <img src="https://img.alicdn.com/tfscom/i3/O1CN011nFyxVhuxBckkiR_!!0-arctic.jpg"/>
                      <div class="swiper-info">
                        <div class="info-top">
                          官宣：手机天猫双11也有大波红包领！
                        </div>
                        <div class="info-desc">
                          今年双11可不是一般开心，手机天猫APP安利超多福利给大家，都是只有下载了手机天猫APP的小可爱们才能独享的哦~
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="index-category-recommend">
          <div class="all">热门推荐</div>
          <div class="recommend-items">
            <div class="item" v-for="(item,index) of products" :key="index"
            >
              <router-link :to="'/sale-product?id='+item.goods.id">
                <div class="item-img" >
                  <img :src="getImgUrl(item.imageList)"  />
                </div>
                <div class="item-description">
                  <div class="item-name">
                    {{item.goods.name}}
                  </div>
                  <div class="item-price">
                    价格：{{item.goods.price}}
                  </div>
                </div>
              </router-link>

            </div>
          </div>
        </div>
        <icon-common></icon-common>

      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import NavCommon from '../../common/nav/Nav'
  import  Swiper from '../../../node_modules/swiper/dist/js/swiper.min.js'
  import Icon from '../../common/indexIcon/Icon'
  import "swiper/dist/css/swiper.css"
  export default {
    name: "Index",
    components:{
      "nav-common":NavCommon,
      "icon-common":Icon,
    },
    data(){
      return{
        items:["女装","男装","鞋靴","箱包"],
        user:this.$store.state.user,
        products:[],
        imgUrl:'http://119.23.12.250:8090/images',
        categories:[],
        userId:this.$store.state.userId.userId
      }
    },
    created() {
      let _this=this;

      $.ajax({
        url:'/api/sunny/goods/newSearch',
        async:true,
        data:{"pageSize":9,"status":1},
        success:function (data) {
          _this.products=data.data.rows;
          _this.$nextTick(()=>{
            new Swiper ('.swiper-container', {
              loop: true, // 循环模式选项
              autoplay:true,
              speed:1000,
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
                clickable :true
              },
              // 如果需要前进后退按钮
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
            });
            new Swiper ('.swiper-container1', {
              direction: 'vertical',
              loop: true, // 循环模式选项
              autoplay:true,
              speed:1000,
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
                clickable :true
              },
              // 如果需要前进后退按钮
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
            })
          });

        },
        error:function (error) {
          console.log(error);
        }
      });
      $.ajax({
        url:'/api/sunny/type/findAll',
        async:true,
        data:{},
        success:function (data) {
          console.log(data);
          _this.categories=data.data;
        },
        error:function (error) {
          console.log(error);
        }
      });


    },
    computed:{
      getImgUrl() {

        return function (icon) {
          if(icon.length>0){
            return this.imgUrl+icon[0].address;
          }
        }
      },
      getImgSrc(){
        return function (icon) {
          return require('../../assets/imgs/index/'+icon+'.png');
        }
      }
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
  .item:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -o-transform: scale(1.05);
    -ms-transform: scale(1.05);
    cursor: pointer;

  }
  .item a:hover{
    text-decoration none;
  }
  .swiper-slide a{
    text-decoration none;
    color :#000;
  }
  .index{
    width: 100%;
    height: 100%;
    background :#fff;
    font-family "Microsoft Yahei";
    position: relative;
    font-size 16px;
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
      height:100%;
      position: absolute;
      .index-category{
        position: absolute;
        width:1286px;
        margin :0 auto;
        text-align :center;
        background :#e7f4f0;
        height :auto;
        padding-top:100px;
        padding-bottom :40px;
        left :50%;
        margin-left -643px;
        .index-category-all{
          .all{
            font-size :30px;
            margin-bottom :60px;
          }
          .index-category-items{
            width 100%;
            padding-right 7px;
            .index-category-item{
              display :inline-block;
              background :#fff;
              vertical-align top;
              width 15%;
              margin-left :3%;
              height :275px;
              margin-right :30px;
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
                a{
                  text-decoration none;
                  color #000;
                  display inline-block;
                }
              }
            }
          }

        }
        .index-category-line{
          width :75%;
          margin :40px auto;
          .index-lines{
            display :flex;
            width :100%;
            height 100px;
            background #fff;
            .index-line-title{
              width 200px;
              height 100px;
              img{
                width 60px;
                height 60px;
              }
              .title{
                color :#969896;
                font-size 14px;
              }
            }
            .index-line-swiper{
              flex 1;
              .swiper-container1{
                height 100px;
                overflow hidden;
                .swiper-wrapper{
                  text-align left;
                  .swiper-slide{
                    font-size: 18px;
                    a{
                      display :flex;
                      img{
                        width 120px;
                        height 60px;
                        margin-top 20px;
                      }
                      .swiper-info{
                        flex 1;
                        margin-left 20px;
                        margin-top 18px;
                        .info-top{
                          font-size :16px;
                          height 30px;
                        }
                        .info-desc{
                          font-size :14px;
                          color :#969896;
                          height 30px;
                        }
                      }
                    }

                  }
                }

              }
            }
          }

        }
        .index-category-recommend{
          margin-top :60px;
          .all{
            font-size :30px;
            margin-bottom :60px;
          }
          .recommend-items{
            padding-left 27px;
            .item{
              width: 288px;
              height: 440px;
              display: inline-block;
              margin-right: 42px;
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
                .item-name{
                }
                .item-price{
                  font-weight :bold;
                  margin-top 30px;

                }
              }
            }
          }
        }
      }
    }
  }
  .index .icon{
    position: fixed;
    right:178px;

  }
</style>
