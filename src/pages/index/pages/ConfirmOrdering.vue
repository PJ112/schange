<template>
  <div class="confirm-ordering">
    <div class="confirm-container">
      <nav-common></nav-common>
      <div class="confirm-ordering-container">
        <div class="confirm-ordering-container-title">
          确认订单信息
        </div>
        <div class="confirm-ordering-container-items">
          <div class="confirm-ordering-container-item">
            <img :src="getImgUrl">
            <div class="confirm-ordering-item-info">
              <div class="confirm-ordering-item-title" >
                {{details.name}}
              </div>
              <div class="confirm-ordering-item-price">
                价格：<span>{{details.price}}元</span>
              </div>
            </div>
          </div>
        </div>
        <div class="confirm-ordering-container-form">
          <form>
            <span v-if="errorPhone" style="text-align:center;display:block;color: red;font-size: 14px;margin-bottom: 10px;">{{errorPhone}}</span>
            <div class="confirm-ordering-input">
              <div class="confirm-ordering-form-name">真实姓名：</div>
              <input type="text" class="confirm-ordering-input-name" v-model="name">
            </div>
            <div class="confirm-ordering-input">
              <div class="confirm-ordering-form-name">联系电话：</div>
              <input type="text" class="confirm-ordering-input-phone" v-model="phone">
            </div>
            <div class="confirm-ordering-input">
              <div class="confirm-ordering-form-name">交易地址：</div>
              <input type="text" class="confirm-ordering-input-address" v-model="buyerAddress">
            </div>

          </form>
        </div>
        <div class="confirm-ordering-container-sure">
          <span class="message">{{message}}</span>
          <span class="order" @click="addOrder">确定</span>

        </div>
      </div>
      <div class="recommend">
        <h1>--为你推荐--</h1>
        <div class="recommend-items">
          <div class="item" v-for="(item,index) of recommendProducts" :key="index"
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
      <icon-common></icon-common>
    </div>

  </div>
</template>

<script>
  import Nav from '../../../common/nav-nosearch/Nav'
  import Icon from '../../../common/indexIcon/Icon'
  import $ from 'jquery'
  export default {
    name: "ConfirmOrdering",
    components:{
      "nav-common":Nav,
      "icon-common":Icon
    },
    data(){
      return{
        id:this.$route.query.id,
        httpUrl:'http://119.23.12.250:8090/images',
        details:{},
        userId:this.$store.state.userId.userId,
        sellerId:'',
        buyerAddress:"",
        sellerAddress:'',
        status:1,
        phone:'',
        name:'',
        total:'',
        message:'',
        recommendProducts:[],
        errorPhone:''
      }
    },
    created(){
      let _this=this;
      $.ajax({
        url:'/api/sunny/goods/findOne',
        async:true,
        data:{"id":_this.id,"status":1},
        success:function (good) {
          _this.details=good.data;
          _this.total=good.data.price;
          _this.sellerId=good.data.sellerId;
          $.ajax({
            url:'/api/sunny/user/findOne',
            async:true,
            data:{"id":_this.sellerId},
            success:function (user) {
              _this.sellerAddress=user.data.school;

            },
            error:function (error) {
              console.log(error);
            }
          })

        },
        error:function (error) {
          console.log(error);
        }
      });
      $.ajax({
        url:'/api/sunny/goods/newSearch',
        async:true,
        data:{"typeId":20,"status":1},
        success:function (good) {
          _this.recommendProducts=good.data.rows;
        },
        error:function (error) {
          console.log(error);
        }
      });
    },
    computed:{
      getImgUrl(){
        if (this.details.imageList){
          return this.httpUrl+this.details.imageList[0].address;

        }
      },
      getImg(){
        return function (icon) {
          if (icon){
            return this.httpUrl+icon[0].address;

          }
        }
      }
    },
    methods:{
      addOrder(){
        let _this=this;
        let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!_this.name){
          _this.errorPhone='姓名不能为空';
          setTimeout(()=>{
            _this.errorPhone='';

          },2000);
          return;
        }
        if (!myreg.test(_this.phone)){
          _this.errorPhone='手机号码格式不正确';
          setTimeout(()=>{
            _this.errorPhone='';

          },2000);
          return;
        }

        if (!_this.name){
          _this.errorPhone='交易地址不能为空';
          setTimeout(()=>{
            _this.errorPhone='';

          },2000);
          return;
        }
        $.ajax({
          url:'/api/sunny/order/add',
          async:true,
          data:{
            "buyerId":_this.userId,
            "sellerId":this.sellerId,
            "goodsId":_this.id,
            "number":1,
            "money":_this.total,
            "buyerAddress":_this.buyerAddress,
            "sellerAddress":_this.sellerAddress,
            "status":_this.status,
          },
          success:function (order) {
            if(order.flag){
              _this.message="生成订单成功！";
              $.ajax({
                url:'/api/sunny/cart/delete',
                async:true,
                data:{"ids":_this.sellerId,"status":3},
                success:function (user) {
                  _this.sellerAddress=user.data.school;
                },
                error:function (error) {
                  console.log(error);
                }
              });
              setTimeout(()=>{
                _this.$router.push('/index-shopping');
              },1000);

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
  .confirm-ordering {
    width: 100%;
    height: 100%;
    background: #fff;
    font-family: simsun;
    .confirm-container{
      margin-left 150px;
      margin-right 150px;
      background #e7f4f0;
      padding-bottom :100px;
      .confirm-ordering-top {
        width: 80%;
        height: 112px;
        margin: 0 auto;
        box-sizing: border-box;
        .confirm-ordering-top-icon {
          float: left;
          width: 275px;
          height: 92px;
          img {
            width: 100%;
            margin-top: 5px;
            height: 88px;
          }
        }

        .confirm-ordering-top-user {
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
      .confirm-ordering-container {
        width: 80%;
        margin: 0 auto;
        box-sizing: border-box;
        background: #fff;
        .confirm-ordering-container-title {
          width: 100%;
          height: 120px;
          text-align: center;
          line-height: 120px;
          font-size: 24px;
          color: #85cab5;
          font-weight: bold;
          border-bottom: 4px solid #f5f7f9;
        }
        .confirm-ordering-container-items{
          padding-top:60px;
          padding-bottom:50px;
          width:100%;
          margin : 0 auto;
          .confirm-ordering-container-item{
            display :flex;
            margin:0 160px;
            height :160px;
            box-shadow :0 1px 1px #eee;
            img{
              width:160px;
              height:160px;
            }
            .confirm-ordering-item-info{
              padding-top:20px;
              padding-left:38px;
              color:#8d8d8d;
              font-size :18px;
              font-weight :bold;
              .confirm-ordering-item-price{
                margin-top:90px;
                span{
                  color :#85cab5;
                }
              }
            }


          }
        }
        .confirm-ordering-container-form{
          padding:0 170px;
          margn-top:50px;
          color:#4f4f4f;
          font-size :22px;
          font-weight :bold;
          form{
            .confirm-ordering-input{
              margin-bottom :34px;
              input{
                border:1px solid #bfbfbf;
                margin-top:16px;
                width:100%;
                height:45px;
                line-height :45px;
                padding-left :8px;
              }
            }

          }
        }
        .confirm-ordering-container-sure{
          padding:100px 170px;
          text-align :center;
          margin-bottom :100px;
          .order{
            display :inline-block;
            width:180px;
            height:40px;
            background :#85cab5;
            line-height :40px;
            border-radius :9px;
            color:#fff;
            font-size :17px;
            &:hover{
              cursor pointer;
            }
          }

          .message{
            text-align center;
            margin-bottom 20px;
            background none;
            color :#85cab5;
            display block;
          }
        }
      }
      .recommend{
        width:80%;
        margin: 0 auto;
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
  .confirm-ordering .icon{
    position: fixed;
    right 172px;
  }
</style>
