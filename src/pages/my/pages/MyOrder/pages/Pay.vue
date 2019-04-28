<template>
  <div class="publish">
    <div class="publish-container-all">
      <nav-common></nav-common>
      <div class="publish-container" >
        <div class="publish-container-title">
          扫码支付
        </div>
        <div class="img">
          <img src="../../../../../assets/imgs/pay.jpg" class="pay-img">
        </div>
        <div class="button">
          <button @click="noPay">暂不支付</button>
          <button @click="goPay">完成支付</button>
        </div>
      </div>
      <icon-common></icon-common>
    </div>
      <alert v-if="alertDara"
             :alertDara="alertDara" @alertBack="alertBackFn" @alertSure="alertSureFn" @click.native="goCLick"></alert>
  </div>
</template>

<script>
  import Alert from '../../../../../common/Alert/Alert.vue'
  import Nav from '../../../../../common/nav-nosearch/Nav'
  import Icon from '../../../../../common/indexIcon/Icon'
  export default {
    name: "Pay",
    components:{
      "nav-common":Nav,
      "icon-common":Icon,
      Alert
    },
    data(){
      return {
        id:this.$route.query.id,
        goodsId:this.$route.query.goodsId,
        message:'',
        alertDara:''
      }
    },
    methods:{
      goCLick(){
        this.$router.push({path:'/nopay'})
      },
      noPay(){
        this.$router.push({path:'/nopay'})
      },
      goPay(){
        let _this = this
        $.ajax({
          url:"http://119.23.12.250/sunny/order/pay",
          async:true,
          type:'GET',
          data:{
            "id":this.id,
            "goodsId":this.goodsId,
            "status":2
          },
          success:function (data) {
            _this.message = data.message
           if(data.flag){
             let alertDara = {
               content:"支付成功",
               contentColor: "red",
               btn: ["确定"],
               btnColor: ["", ""]
             };
             _this.alertDara = alertDara;
           }else{
             let alertDara = {
               content:"支付失败",
               contentColor: "red",
               btn: ["确定"],
               btnColor: ["", ""]
             };
             _this.alertDara = alertDara;
           }
          },
          error:function () {
          },
          dataType:'json'
        })
      },
    },
    alertBackFn: function(data) {
      this.alertDara = '';
      this.$router.go(0);
    },
    alertSureFn:function(data){
      this.alertDara = '';
      this.$router.go(0);
    },
  created(){
//    alert(this.id)
  }
  }
</script>

<style scoped lang="stylus">
  .img{
    width:100%;
    text-align: center;
  }
  .pay-img{
    width:calc(50vh);
    height:calc(65vh);
    padding-top: 1%;
    padding-bottom: 2%;
  }
  .publish {
    width: 100%;
    height: 100%;
    background: #fff;
    font-family: simsun;
  }
  .publish-container-all {
    margin-left 150px;
    margin-right 150px;
    background #e7f4f0;
    padding-bottom: 100px;
  }
  .publish-container {
    width: 80%;
    margin: 0 auto;
    box-sizing: border-box;
    background: #fff;
  }
  .publish-container-title {
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 24px;
    color: #85cab5;
    font-weight: bold;
    border-bottom: 4px solid #f5f7f9;
  }
  .button {
      width:100%;
    text-align: center;
    margin-top: 2%;
    padding-bottom: 2%;
  }
  button{
    cursor:pointer;
    display :inline-block;
    width:180px;
    height:40px;
    background :#85cab5;
    line-height :40px;
    border-radius :9px;
    color:#fff;
    font-size :17px;
    margin-left:2%;
  }
</style>
