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
            <span @click="addOrder">确定</span>

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
            total:''
          }
        },
      created(){
          let _this=this;
          $.ajax({
          url:'/api/sunny/goods/findOne',
          async:true,
          data:{"id":_this.id},
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
      },
      computed:{
          getImgUrl(){
            if (this.details.imageList){
              return this.httpUrl+this.details.imageList[0].address;

            }
          }
      },
      methods:{
          addOrder(){
            let _this=this;
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
                "status":_this.status
              },
              success:function (order) {
               console.log(order);

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
  .confirm-ordering .icon{
    position: fixed;
    right 172px;
  }
</style>
