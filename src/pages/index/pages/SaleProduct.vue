<template>
    <div class="sale-product">
      <div class="sale-container">
        <div class="sale-product-top">
          <nav-common></nav-common>
        </div>
        <div class="sale-product-container">
          <div class="sale-product-container-desc">
            <div class="sale-product-desc-top">
              <h1 class="sale-product-top-name">
                {{details.name}}
              </h1>
              <div class="sale-product-top-share">
              <span class="img">
                <img src="../../../assets/imgs/sale-product/user.png">
              </span>
                <span class="info">{{username}}</span>
                <span class="img">
                <img src="../../../assets/imgs/sale-product/category.png">
              </span>
                <span class="info">{{details.type}}</span>
              </div>
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img :src="getImgUrl" style="width: 260px;height: 260px;">
                  </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
            <div class="sale-product-container-center">
              <span @click="addProduct"><img src="../../../assets/imgs/sale-product/shop.png"><span>加入购物车</span></span>
              <span><router-link :to="'/confirm-ordering?id='+id"><img src="../../../assets/imgs/sale-product/cursor.png"><span>立即购买</span></router-link></span>
            </div>
            <div class="sale-product-container-bottom">
              <div class="sale-product-bottom-info">
                物品详情
              </div>
              <div class="sale-product-bottom-desc">
                <div>物品新旧 : <span class="desc">{{oldDegree}}</span></div>
                <div>交易方式 :
                  <span class="desc">
                   <span class="sale">{{mean}}</span>
                 </span>
                </div>
                <div>详情描述 :
                  <span class="desc">{{details.content}}</span>
                </div>

              </div>
            </div>
          </div>
          <div class="sale-product-container-price">
            <h1 class="sale-product-price-top">
              价格：{{details.price}}元
            </h1>
            <div class="sale-product-price-bottom">
              <img src="../../../assets/imgs/sale-product/img.png">
              <div class="sale-product-top-name">
                {{username}}
              </div>
              <div class="sale-product-top-age">
                圈龄{{day}}个月
              </div>
              <router-link :to="'/sellerspublish?id='+sellerId">
                <div class="sale-product-top-index">卖家主页</div>
              </router-link>
              <router-link :to="'/contact-seller?id='+id">
                <div class="sale-product-top-producer">私信卖家</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

    </div>

</template>

<script>
    import Nav from '../../../common/nav-nosearch/Nav'
    export default {
        name: "SaleProduct",
        components:{
          "nav-common":Nav
        },
        data(){
          return{
            id:this.$route.query.id,
            books:[{id:1,name:'一成新'},{id:2,name:'二成新'},{id:3,name:'三成新'},
              {id:4,name:'四成新'},{id:5,name:'五成新'},{id:6,name:'六成新'},
              {id:7,name:'七成新'},{id:8,name:'八成新'},{id:9,name:'九成新'},
              {id:10,name:'十成新'},
            ],
            means:[{id:1,name:'自提'},{id:2,name:'送货上门'},{id:3,name:'会面交易'}],
            details:{},
            username:'',
            httpUrl:'http://119.23.12.250:8090/images',
            oldDegree: '',
            mean:'',
            userId:this.$store.state.userId.userId,
            day:0,
            sellerId:''
          }
        },
        created(){
          let  _this=this;
          $.ajax({
            url:'/api/sunny/goods/findOne',
            async:true,
            data:{"id":_this.id},
            success:function (data) {
              _this.details=data.data;
              let sellerId=_this.details.sellerId;
              _this.sellerId=sellerId;
              let oldDegree=_this.details.oldDegree;
              let mean=_this.details.means;
              for (var i=0;i<_this.books.length;i++){
                  if(oldDegree===_this.books[i].id){
                      _this.oldDegree=_this.books[i].name;
                  }
              }
              for (var j=0;j<_this.means.length;j++){

                  if (mean===_this.means[j].id){
                      _this.mean=_this.means[j].name;
                  }
              }
              if (sellerId){
                $.ajax({
                  url:'/api/sunny/user/findOne ',
                  async:true,
                  data:{"id":sellerId},
                  success:function (user) {
                    let nowTime=new Date().getTime();
                    let createTime=user.data.creatTime;
                    let day=Math.ceil((nowTime-createTime)/1000/60/60/24);
                    _this.day=day;
                   _this.username=user.data.username;
                  },
                  error:function (error) {
                    console.log(error);
                  }
                })
              }
            },
            error:function (error) {
              console.log(error);
            }
          })
        },
        computed:{
          getImgUrl(){
            if (this.details.imageList){
              return this.httpUrl+this.details.imageList[0].address;

            }
          }
        },
        methods:{
          addProduct(){
                 let _this=this;
                  $.ajax({
                    url:'/api/sunny/cart/add',
                    async:true,
                    data:{"buyerId":this.userId,"goodsId":this.id,"number":1},
                    success:function (product) {
                      if (product.flag){
                        _this.$router.push('/index-shopping');
                      }
                    },
                    error:function (error) {
                      console.log(error);
                    }
                  })
          }
        }

    }
</script>

<style scoped lang="stylus">
  .sale-product-container-center span:hover{
    cursor pointer;
  }
  .sale-product {
    width: 100%;
    height: 100%;
    background: #fff;
    font-family: simsun;
    padding-bottom :100px;
    .sale-container{
      margin-left 100px;
      margin-right 100px;
      background #e7f4f0;
      padding-bottom :100px;
      box-sizing border-box;
      .sale-product-top {
      }
      .sale-product-container {
        width: 86%;
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
            position: relative;
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
              position: absolute;
              left :50%;
              margin-left -60px;
              top:280px;
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
              position: absolute;
              left 50%;
              margin-left -60px;
              top:340px;

            }
          }
        }
      }
    }

  }
</style>
