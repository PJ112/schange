<template>
  <div class="shopping">
    <div class="shopping-container-box">
      <nav-common></nav-common>
      <div class="shopping-container">
        <div class="shopping-container-title">
          购物车
        </div>
        <div v-if="shopCarts.length>0">
          <div class="shopping-container-items"  v-for="(item,index) of shopCarts" :key="index" >
            <div class="shopping-item-select">
              <input type="radio" id="input" name="radio"  @click="toggleChange(item.data[0].goodsId,item.data[1].price)" class="shopping-select-input" />
            </div>
            <div class="shopping-item-intro">
              <img  class="shopping-intro-img" :src="getImgUrl(item.data[3].address)">
              <div class="shopping-item-desc">
                <div class="shopping-desc-title">
                  {{item.data[1].name}}
                </div>
                <div class="shopping-desc-price">
                  <span>价格：</span>{{item.data[1].price}}元
                </div>
              </div>
              <div class="shopping-item-delete">
                <span @click="deleteProduct(item.data[0].id)">删除</span>
              </div>
            </div>
          </div>
          <div class="shopping-container-money" >
            <span v-if="!total">合计：0元</span>
            <span v-else>合计：{{total}}元</span>
          </div>
          <div class="shopping-container-count">
            <span v-if="!total">结算</span>
            <router-link v-if="total" tag="span" :to="'/confirm-ordering?id='+radio+'&total='+total">结算</router-link>
          </div>
        </div>
        <div v-else style="text-align: center;margin-top: 30px;color: red;height: 100px;box-sizing: border-box">
          您的购物车里还没有商品哦，赶快来添加吧！
        </div>
      </div>
      <icon-common v-if="shopCarts.length>0"></icon-common>
    </div>


  </div>
</template>

<script>
  import Nav from '../../../common/nav-nosearch/Nav'
  import $ from  'jquery'
  import Icon from '../../../common/indexIcon/Icon'
  export default {
    name: "Shopping",
    data(){
      return{
        show:true,
        user:this.$store.state.user,
        id:this.$route.query.id,
        details:{},
        httpUrl:'http://119.23.12.250:8090/images',
        flag:false,
        index:0,
        products:[],
        userId:this.$store.state.userId.userId,
        shopCarts:[],
        radio:'',
        total:0
      }
    },
    components:{
      "nav-common":Nav,
      "icon-common":Icon
    },
    created(){
      let _this=this;
      $.ajax({
        url:'/api/sunny/cart/search',
        async:true,
        data:{"buyerId":this.userId},
        success:function (good) {
          _this.shopCarts=good.data;

        },
        error:function (error) {
          console.log(error);
        }
      });


    },
    computed:{
      getImgUrl() {
        return function (icon) {
          return this.httpUrl+icon;
        }
      }
    },
    methods:{
      toggleChange(id,price){
        this.radio=id;
        this.total=price;
      },
      deleteProduct(id){
        let _this=this;
        $.ajax({
          url:'/api/sunny/cart/delete',
          async:true,
          data:{"ids":id},
          success:function (product) {

            if (product.flag){
              $.ajax({
                url:'/api/sunny/cart/search',
                async:true,
                data:{"buyerId":_this.userId},
                success:function (good) {
                  _this.shopCarts=good.data;
                },
                error:function (error) {
                  console.log(error);
                }
              });

            }
          },
          error:function (error) {
            console.log(error);
          }
        });


      }
    }
  }
</script>

<style scoped lang="stylus">

  .shopping-item-delete span:hover{
    cursor pointer;
  }
  .shopping-container-count span:hover{
    cursor :pointer;
  }
  .select-all:hover,.select-none:hover{
    cursor pointer;
  }
  .shopping{
    width:100%;
    height:100%;
    background :#fff;
    font-family :simsun;
    .shopping-container-box{
      margin-left 150px;
      margin-right 150px;
      background #e7f4f0;
      padding-bottom :200px;
      z-index 0;
      .shopping-top{
        width :80%;
        height :112px;
        margin: 0 auto;
        box-sizing: border-box;
        .shopping-top-icon{
          float :left;
          width :275px;
          height :92px;
          img{
            width:100%;
            margin-top :5px;
            height :88px;
          }
        }
        .shopping-top-user{
          float:right;
          line-height :92px;
          margin-right :40px;
          span{
            margin-left :20px;
            color :#2ab7b7;
            display :inline-block;
            font-size :18px;
            height :92px;
            line-height :92px;
            font-weight :bold;
          }
        }
      }

      .shopping-container{
        width:80%;
        margin: 0 auto;
        box-sizing: border-box;
        background :#fff;
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
          width :100%;
          height 40px;
          padding-top:24px;
          font-weight :bold;
          color:#99d2c0;
          position: absolute;
          top:100px;
          left 80%;
          font-size 18px;
        }
        .shopping-container-items{
          padding:0 100px;
          margin-top :50px;
          display :flex;
          height:160px;
          .shopping-item-select{
            width:25px;
            height:25px;
            line-height :160px;
            margin-right :50px;
            margin-top 68px;
            .shopping-select-input{
              display :block;
              height 25px;
              width:25px;
            }


          }
          .shopping-item-intro{
            flex :1;
            box-shadow :0 1px 1px #ccc;
            padding 10px;
            .shopping-intro-img{
              display :inline-block;
              width:150px;
              height:140px;
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
              width:60px;
              font-size :18px;
              height:160px;
              span{
                display :inline-block;
                line-height :160px;
                text-align :center;
              }
            }
          }
        }
        .shopping-container-money{
          width:80%;
          margin :36px auto;
          font-size :18px;
          font-weight :bold;
          span{
            float :right;
          }
        }
        .shopping-container-count{
          clear:both;
          width:100%;
          margin-top:120px;
          margin-bottom :100px;
          text-align :center;
          padding-bottom :100px;
          span{
            display :inline-block;
            width:180px;
            height:40px;
            background :#85cab5;
            line-height :40px;
            border-radius :9px;
            color:#fff;
            font-size :17px;
          }
        }
      }
    }

  }
  .shopping .icon{
    position: fixed;
    right: 171px;
    top: 328px;
  }
</style>
