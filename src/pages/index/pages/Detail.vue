<template>
  <div class="shopping">
    <div class="shopping-box">
      <common-nav></common-nav>
      <div class="shopping-container">
        <div class="shopping-container-title">
          运动
        </div>
        <div class="shopping-container-items"  v-for="(item,index) of products">
          <div class="shopping-item-intro">
            <img  class="shopping-intro-img" src="../../../assets/imgs/index_shopping/book.png">
            <div class="shopping-item-desc">
              <div class="shopping-desc-title">
                得力-尼龙网纱笔袋（男高中生笔袋文具盒）
              </div>
              <div class="shopping-desc-price">
                <span>价格：</span>8.8元
              </div>
            </div>
            <div class="shopping-item-delete">
              <span class="shop">加入购物车</span>
              <span class="buy">立即购买</span>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import CommonNav from '../../../common/nav/Nav'
  export default {
    name: "Shopping",
    data(){
      return{
        show:true,
        select:true,
        typeId:this.$route.query.typeId,
        products:[]
      }
    },
    created(){
      let _this=this;
      $.ajax({
        url:'/api/sunny/goods/newSearch',
        async:true,
        data:{"typeId":this.typeId},
        success:function (good) {
         if (good.flag){
           _this.products=good.data.rows;
         }

        },
        error:function (error) {
          console.log(error);
        }
      });
    },
    components:{
      "common-nav":CommonNav
    },
    methods:{
      toggleSelect(){
        this.select=!this.select;
      }
    }
  }
</script>

<style scoped lang="stylus">
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
            }

          }
        }
      }
    }
  }
</style>

