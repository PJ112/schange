<template>
    <div class="shopping">
      <div class="shopping-top">
        <div class="shopping-top-icon">
          <img src="../../../assets/imgs/index_shopping/schange.png">
        </div>
        <div class="shopping-top-user">
          <img src="../../../assets/imgs/index_shopping/user.png">
          <span>退出登录</span>
        </div>
      </div>
      <div class="shopping-container">
        <div class="shopping-container-title">
          购物车
        </div>
        <div class="shopping-select">
          <span class="select-all" v-if="show">全选</span>
          <span class="select-none" v-else>取消全选</span>
        </div>
        <div class="shopping-container-items"  v-for="(item,index) of 4">
          <div class="shopping-item-select">
            <img src="../../../assets/imgs/index_shopping/none_select.png" class="shopping-select-input" v-if="select" >
            <img src="../../../assets/imgs/index_shopping/select.png" class="shopping-select-input"  v-else >
          </div>
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
              <span>删除</span>
            </div>
          </div>
        </div>
        <div class="shopping-container-money">
          <span>合计：0元</span>
        </div>
        <div class="shopping-container-count">
          <router-link tag="span" to="/confirm-ordering">结算</router-link>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Shopping",
        data(){
          return{
            show:true,
            select:true
          }
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
     background :#e7f4f0;
     font-family :simsun;
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
         padding-top:24px;
         float:right;
         margin-right :120px;
         font-weight :bold;
         color:#99d2c0;
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
</style>
