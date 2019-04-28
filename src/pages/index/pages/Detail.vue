<template>
  <div class="shopping">
    <div class="shopping-box">
      <common-nav></common-nav>
      <div class="shopping-container">
        <div class="shopping-container-title">
          {{name}}
        </div>
        <div class="shopping-container-items" v-if="products.length>0"  v-for="(item,index) of products" :key="index">
          <div class="shopping-item-intro">
            <img  class="shopping-intro-img" :src="getUrlImg(item.imageList[0].address)">
            <div class="shopping-item-desc">
              <div class="shopping-desc-title">
               {{item.goods.name}}
              </div>
              <div class="shopping-desc-price">
                <span>价格：</span>{{item.goods.price}}元
              </div>
            </div>
            <div class="shopping-item-delete">
              <div class="info" v-if="error" style="color: red">{{error}}</div>
              <div class="info" v-if="success" style="color: lightseagreen;">{{success}}</div>
              <span  class="shop" @click="addProduct(item.goods.id)">加入购物车</span>
              <span class="buy" @click="confirmOrdering(item.goods.id)">立即购买</span>
            </div>
          </div>
        </div>
        <div class="shopping-container-items1" v-if="products.length===0"  style="text-align: center;color: red;padding: 20px;padding-top: 40px;">
          <span style="font-size: 16px;">不好意思哦,该分类还没有发布商品!</span>
        </div>
      </div>
      <div class="recommend">
        <h1>--为你推荐--</h1>
        <div class="recommend-items">
          <div class="item" style="text-align: center" v-for="(item,index) of recommendProducts" :key="index"
          >
            <router-link :to="'/sale-product?id='+item.goods.id">
              <div class="item-img" >
                <img :src="getImg(item.imageList)"  />
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
      <common-icon v-if="products.length>0"></common-icon>
    </div>


  </div>
</template>

<script>
  import CommonNav from '../../../common/nav/Nav'
  import Icon from '../../../common/indexIcon/Icon'
  import $ from "jquery"
  export default {
    name: "Shopping",
    data(){
      return{
        show:true,
        select:true,
        typeId:this.$route.query.typeId,
        products:[],
        name:this.$route.query.name,
        imgUrl:'http://119.23.12.250:8090/images',
        userId:this.$store.state.userId.userId,
        recommendProducts:[]
      }
    },
    created(){
      let _this=this;
      $.ajax({
        url:'/api/sunny/goods/newSearch',
        async:true,
        data:{"typeId":this.typeId,"pageNum":1,"pageSize":6,"status":1},
        success:function (good) {
         if (good.flag){
           _this.products=good.data.rows;
         }

        },
        error:function (error) {
          console.log(error);
        }
      });
      $.ajax({
        url:'/api/sunny/goods/newSearch',
        async:true,
        data:{"typeId":28,"status":1},
        success:function (good) {
          _this.recommendProducts=good.data.rows;
        },
        error:function (error) {
          console.log(error);
        }
      });
    },
    computed:{
      getUrlImg(){
        return function (icon) {

          return this.imgUrl+icon;
        }
      },
      getImg(){
        return function (icon) {
          if (icon){
            return this.imgUrl+icon[0].address;

          }
        }
      }
    },
    methods:{
      addProduct(id){
        if (this.userId){
          $.ajax({
            url:'/api/sunny/cart/add',
            async:true,
            data:{"buyerId":this.userId,"goodsId":id,"number":1,"status":1},
            success:function (product) {
              if (!product.flag) {
                alert("该商品在购物车中已存在，不能重复添加！")

              }else{
                alert("添加购物车成功！")

              }
            },
            error:function (error) {
              console.log(error);
            }
          })
        } else{
          this.$router.push('/loginin');
        }

      },
      confirmOrdering(id){
        if (this.userId){
          this.$router.push({
            path:'/confirm-ordering',
            query:{
              id:id
            }
          })
        }else{
          this.$router.push('/loginin');
        }
      }

    },
    components:{
      "common-nav":CommonNav,
      "common-icon":Icon
    }
  }
</script>

<style scoped lang="stylus">
  .shop:hover{
    cursor pointer
  }
  .buy:hover{
    cursor: pointer;
  }
  .shopping-container-count span:hover{
    cursor :pointer;
  }
  .shopping{
    width:100%;
    height:100%;
    background :#fff;
    font-family :simsun;
    padding-bottom :100px;
    position: relative;
    .shopping-box{
      background #e7f4f0;
      padding-bottom :100px;
      position: absolute;
      width 1286px;
      left 50%;
      margin-left :-643px;
      .shopping-container{
        width:80%;
        margin: 10px auto;
        box-sizing: border-box;
        background :#fff;
        padding-bottom :100px;

        .shopping-container-title{
          width:100%;
          height:100px;
          text-align :center;
          line-height :100px;
          font-size :24px;
          color :#85cab5;
          font-weight :bold;
          border-bottom :4px solid #f5f7f9;
        }
        .shopping-select{
          padding-top:24px;
          float:right;
          margin-right :120px;
          font-weight :bold;
          color:#99d2c0;
        }
        .shopping-container-items{
          padding:0 50px;
          margin-top :50px;
          display :flex;
          height:160px;
          .shopping-item-select{
            width:25px;
            height:25px;
            line-height :160px;
            margin-right :50px;
          }
          .shopping-item-intro{
            flex :1;
            box-shadow :0 1px 1px #ccc;
            .shopping-intro-img{
              display :inline-block;
              width:160px;
              height:160px;
              vertical-align :top;
            }
            .shopping-item-desc{
              display :inline-block;
              vertical-align :top;
              font-size :17px;
              font-weight :bold;
              .shopping-desc-title{
                color:#676767;
                margin-left :16px;
                margin-top :20px;
              }
              .shopping-desc-price{
                margin-left :16px;
                margin-top :80px;
                color:#2ab7b7;
                span{
                  color:#777777;
                }
              }
            }
            .shopping-item-delete{
              float:right;
              margin-right :40px;
              color :#2ab7b7;
              width:320px;
              font-size :18px;
              height:160px;
              line-height :190px;
              box-sizing border-box;
              .info{
                width 300px;
                height 20px;
                font-size 14px;
                margin-bottom 20px;
              }
              span{
                display :inline-block;
                text-align :center;
                width:100px;
                height:30px;
                line-height :30px;
                background #85cab5;
                border-radius :5px;
                color:#fff;
                font-size :14px;
                a{
                  text-decoration none;
                  color #fff;
                  display inline-block;

                }
              }


            }
          }
        }
      }
      .recommend{
        width:80%;
        margin: 50px auto;
        box-sizing: border-box;
        h1{
          text-align center;
          width 100%;
          height 30px;
          font-size 26px;
          color coral;
        }
        .recommend-items{
          padding-left 27px;
          margin-top 40px;
          .item{
            width: 288px;
            height: 340px;
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
              height :225px;
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
              text-align center
              .item-name{
              }
              .item-price{
                font-weight :bold;
                margin-top 20px;

              }
            }
          }
        }
      }
    }

  }
  .shopping .icon{
    position: fixed;
    right: 190px;
    top: 450px;
  }
</style>

