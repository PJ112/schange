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
          <div class="index-category-items">
            <div class="index-category-item" v-for="(item,index) of categories" :key="index" >
              <div class="item-icon">
                <img src="../../assets/imgs/index/图书.png">
              </div>
              <div class="item-name">
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
      <div class="index-copyright">
        Copyright @ 2019 Team Sunny
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import NavCommon from '../../common/nav/Nav'
  import  Swiper from 'swiper'
  import Icon from '../../common/indexIcon/Icon'
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
        categories:[]
      }
    },
    created() {
      let _this=this;
      new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        }
      });
      $.ajax({
        url:'/api/sunny/goods/newSearch',
        async:true,
        data:{},
        success:function (data) {
          _this.products=data.data.rows;
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
          _this.categories=data.data;
        },
        error:function (error) {
          console.log(error);
        }
      })

    },
    computed:{
      getImgUrl() {

        return function (icon) {
          if(icon.length>0){
            return this.imgUrl+icon[0].address;

          }


        }

      },




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
        position: relative;
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
  .index .icon{
    position: fixed;
    right 155px;

  }
</style>
