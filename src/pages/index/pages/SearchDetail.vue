<template>
  <div class="shopping">
    <div class="shopping-box">
      <common-nav></common-nav>
      <div class="shopping-container">
        <div class="shopping-container-title">
        </div>
        <div class="shopping-container-items" v-if="goods.length>0"  v-for="(item,index) of goods" :key="index">
          <div class="shopping-item-intro">
            <img  class="shopping-intro-img" :src="getUrlImg(item.imageList)">
            <div class="shopping-item-desc">
              <div class="shopping-desc-title">
                {{item.goods.name}}
              </div>
              <div class="shopping-desc-price">
                <span>价格：</span>{{item.goods.price}}元
              </div>
            </div>
            <div class="shopping-item-delete">
              <span class="shop" @click="addProduct(item.goods.id)">加入购物车</span>
              <span class="buy" @click="confirmOrdering(item.goods.id)">立即购买</span>
            </div>
          </div>
        </div>
        <div class="shopping-container-items1" v-if="goods.length===0"  style="text-align: center;color: red;padding: 20px;padding-top: 40px;">
          <span>不好意思哦,没有搜索到该类商品哦!</span>
        </div>
      </div>
      <common-icon v-if="goods.length>0"></common-icon>
    </div>


  </div>
</template>

<script>
  import CommonNav from '../../../common/nav/Nav'
  import Icon from '../../../common/indexIcon/Icon'
  import $ from 'jquery'
  export default {
    name: "Shopping",
    data(){
      return{
        show:true,
        select:true,
        typeId:this.$route.query.typeId,
        name:'',
        imgUrl:'http://119.23.12.250:8090/images',
        userId:this.$store.state.userId.userId,
        goods:[]
      }
    },
    created(){
      let _this=this;
      this.goods=[];
      this.name=this.$route.query.name;
      $.ajax({
        url:'/api/sunny/goods/newSearch',
        async:true,
        data:{"name":_this.name},
        success:function (good) {
          _this.goods=good.data.rows;

        },
        error:function (error) {
          console.log(error);
        }
      })
    },
    computed:{
      getUrlImg(){
        return function (icon) {
          if (icon){
            if (icon[0]){
              return this.imgUrl+icon[0].address;

            }

          }
        }
      }
    },
    methods:{
      addProduct(id){
        if (this.$store.state.user){
          let _this=this;
          $.ajax({
            url:'/api/sunny/cart/add',
            async:true,
            data:{"buyerId":this.userId,"goodsId":id,"number":1},
            success:function (product) {
              console.log(product);
              if (!product.flag) {
                _this.error="该商品在购物车中已存在，不能重复添加。";
                _this.$store.dispatch('errorAsyc',_this.error);
                _this.$router.push('/index-shopping');
              }else{
                _this.$router.push('/index-shopping');

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
        if (this.$store.state.user){
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
    .shopping-box{
      margin-left:100px;
      margin-right:100px;
      background #e7f4f0;
      padding-bottom :100px;
    }
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
            width:220px;
            font-size :18px;
            height:160px;
            line-height :240px;
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
  }
  .shopping .icon {
    position: fixed;
    right: 131px;
    top: 302px;
  }
</style>

