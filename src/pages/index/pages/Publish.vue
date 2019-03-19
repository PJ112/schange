<template>
    <div class="publish">
      <div class="publish-top">
        <div class="publish-top-icon">
          <img src="../../../assets/imgs/index_shopping/schange.png">
        </div>
        <div class="publish-top-user">
          <img src="../../../assets/imgs/index_shopping/user.png">
          <span class="publish-top-user-login">登录</span>
          <span class="publish-top-user-register">注册</span>
        </div>
      </div>
      <div class="publish-container">
        <div class="publish-container-title">
          发布物品
        </div>
        <div class="publish-container-form">
          <form>
            <div class="publish-form">
              <div class="title">标题</div>
              <input type="text" placeholder="请输入标题" v-model="name">
            </div>
            <div class="publish-form">
              <img src="../../../assets/imgs/publish/select.png" class="publish-form-img">
              <div class="file">
                <input type="file" class="publish-form-file">
                选择文件
              </div>
            </div>
            <div class="publish-form">
              <div class="desc">详情描述</div>
              <textarea rows="3" placeholder="请描述物品的转手原因、购入渠道、新旧程度等" v-model="content">
              </textarea>
            </div>
            <div class="publish-form">
              <div class="category">
                分类
              </div>
              <select v-model="typeId">
                <option value="1">书籍</option>
              </select>
            </div>
            <div class="publish-form">
              <div class="new">
                新旧
              </div>
              <select v-model="oldDegree">
                <option value="8">八成新</option>
              </select>
            </div>
            <div class="publish-form">
              <div class="way">
                交易方式（可多选）
              </div>
              <label>自提  <input type="radio" v-model="means" value="1"></label>
              <label>送货上门  <input type="radio" v-model="means" value="2"></label>
              <label>会面交易  <input type="radio" v-model="means" value="3"></label>
            </div>
            <div class="publish-form">
              <div class="price">价格</div>
              <input type="text" placeholder="请输入价格" v-model="price">
            </div>
            <div class="publish-container-publish">
              <span @click="addProduct">发布</span>
            </div>
          </form>
        </div>

      </div>
    </div>
</template>

<script>
   import $ from "jquery"
    export default {
        name: "Publish",
        data(){
          return{
            name:'',
            content:'',
            typeId:'',
            oldDegree:'',
            means:'1',
            price:''
          }
        },
      methods:{
        addProduct(){
          $.ajax({
            url:"/api/sunny/goods/add",
            async:true,
            type:'GET',
            data:{
                  "sellerId":2,
                  "name":this.name,"typeId":this.typeId,
                  "price": this.price,"oldDegree":this.oldDegree,
                  "means": this.means,"content": this.content
            },
            success:function (data) {

              console.log(data);
            },
            error:function () {

            },
            dataType:'json'
          })
        }
      }
    }
</script>

<style scoped lang="stylus">
  .publish {
    width: 100%;
    height: 100%;
    background: #e7f4f0;
    font-family: simsun;
    .publish-top {
      width: 80%;
      height: 112px;
      margin: 0 auto;
      box-sizing: border-box;
      .publish-top-icon {
        float: left;
        width: 275px;
        height: 92px;
        img {
          width: 100%;
          margin-top: 5px;
          height: 88px;
        }
      }
      .publish-top-user {
        float: right;
        line-height: 92px;
        margin-right: 40px;
        img{
          margin-right :20px;
        }
        span {
          color: #2ab7b7;
          font-size: 18px;
          height: 92px;
          line-height: 92px;
          font-weight: bold;
        }
        .publish-top-user-login{
          border-right :3px solid #25a4bb;
          padding-right :10px;
          margin-right :5px;

        }
      }
    }

    .publish-container {
      width: 80%;
      margin: 0 auto;
      box-sizing: border-box;
      background: #fff;

      .publish-container-title {
        width: 100%;
        height: 120px;
        text-align: center;
        line-height: 120px;
        font-size: 24px;
        color: #85cab5;
        font-weight: bold;
        border-bottom: 4px solid #f5f7f9;
      }
      .publish-container-form{
        padding:60px 280px;
        form{
          .publish-form{
            color :#000;
            font-weight :bold;
            font-size :18px;
            margin-bottom :30px;
            .publish-form-img{
              display :inline-block;
              vertical-align :top;
            }
            label{
              display :inline-block;
              width:130px;
              input{
                display :inline-block;
                width:25px;
                height :25px;
                outline :none;
                background :none;
                border:0;
              }
            }
            .file{
              position: relative;
              padding: 3px 5px;
              overflow: hidden;
              color:#fff;
              background-color: #ccc;
              display :inline-block;
              vertical-align :top;
              width:80px;
              height:25px;
              line-height :25px;
              text-align :center;
              font-size :14px;
              .publish-form-file{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                outline: none;
                background-color: transparent;
                -moz-opacity:0;
                -khtml-opacity: 0;
                opacity: 0;
              }
            }
            div{
              margin-bottom :16px;
            }
            input,select{
              border:1px solid #bfbfbf;
              width:100%;
              height:40px;
              border-radius :4px;
              padding-left :4px;
            }
            textarea{
              border:1px solid #bfbfbf;
              width:100%;
              border-radius :4px;
              padding-left :4px;
            }

          }
        }
      }
      .publish-container-publish{
        padding:80px 170px;
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
</style>
