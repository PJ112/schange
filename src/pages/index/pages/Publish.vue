<template>
    <div class="publish">
      <div class="publish-container-all">
        <nav-common></nav-common>
        <div class="publish-container" >
          <div class="publish-container-title">
            发布物品
          </div>
          <div class="publish-container-form" v-if="!product">
            <form>
              <div class="publish-form">
                <div class="title">标题</div>
                <input type="text" placeholder="请输入标题" v-model="name">
              </div>
              <div class="publish-form">
                <img :src="avatar" class="publish-form-img" v-if="avatar">
                <img src="../../../assets/imgs/publish/select.png" v-if="!avatar"/>
                <div class="file">
                    <input type="file" name="imgFile" class="publish-form-file" @change="changeFile">
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
                <select v-model="parentId" class="parentCategory" @change="getChildType">
                  <option v-for="(item,index) of parentCategories" :key="index" :value="item.id" >
                    {{item.type}}
                  </option>
                </select>
                <select v-model="typeId" class="typeCategory">
                  <option v-for="(item,index) of childCategories" :key="index" :value="item.id">
                    {{item.type}}
                  </option>
                </select>
              </div>
              <div class="publish-form">
                <div class="new">
                  新旧
                </div>
                <select v-model="oldDegree">
                  <option v-for="(item,index) of books" :value="item.id" :key="index" >{{item.name}}</option>
                </select>
              </div>
              <div class="publish-form">
                <div class="way">
                  交易方式
                </div>
                <label>自提  <input type="radio" v-model="means" value="1"></label>
                <label>送货上门  <input type="radio" v-model="means" value="2"></label>
                <label>会面交易  <input type="radio" v-model="means" value="3"></label>
              </div>
              <div class="publish-form">
                <div class="price">价格</div>
                <input type="text" placeholder="请输入价格" v-model="price">
              </div>
              <div class="message" v-if="message">{{message}}</div>
              <div class="publish-container-publish">
                <span @click="addProduct">发布</span>
              </div>
            </form>
          </div>
          <div class="publish-container-form" v-else>
            <form>
              <div class="publish-form">
                <div class="title">标题</div>
                <input type="text" placeholder="请输入标题" v-model="name" >
              </div>
              <div class="publish-form">
                <img :src="avatar" class="publish-form-img" v-if="avatar">
                <img src="../../../assets/imgs/publish/select.png" v-if="!avatar"/>
                <div class="file">
                  <input type="file" name="imgFile" class="publish-form-file" @change="changeFile">
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
                <select v-model="parentId" class="parentCategory" @change="getChildType" >
                  <option v-for="(item,index) of parentCategories" :key="index" :value="item.id" >
                    {{item.type}}
                  </option>
                </select>
                <select v-model="typeId" class="typeCategory">
                  <option selected :value="typeId" v-if="type">{{type}}</option>
                  <option v-for="(item,index) of childCategories" :key="index" :value="item.id">
                    {{item.type}}
                  </option>
                </select>
              </div>
              <div class="publish-form">
                <div class="new">
                  新旧
                </div>
                <select v-model="oldDegree">
                  <option v-for="(item,index) of books"  :value="item.id" :key="index" >{{item.name}}</option>
                </select>
              </div>
              <div class="publish-form">
                <div class="way">
                  交易方式
                </div>
                <label>自提  <input type="radio" v-model="means"  value="1"></label>
                <label>送货上门  <input type="radio" v-model="means" value="2"></label>
                <label>会面交易  <input type="radio" v-model="means" value="3"></label>
              </div>
              <div class="publish-form">
                <div class="price">价格</div>
                <input type="text" placeholder="请输入价格" v-model="price">
              </div>
              <div class="message" v-if="message">{{message}}</div>
              <div class="publish-container-publish">
                <span @click="addProduct">发布</span>
              </div>
            </form>
          </div>

        </div>
        <icon-common></icon-common>
      </div>

    </div>
</template>

<script>
    import $ from "jquery"
    import Nav from '../../../common/nav-nosearch/Nav'
    import Icon from '../../../common/indexIcon/Icon'
    export default {
        name: "Publish",
        data(){
          return{
            name:'',
            oldDegree:'1',
            means:'1',
            price:'',
            avatar:'',
            books:[{id:1,name:'一成新'},{id:2,name:'二成新'},{id:3,name:'三成新'},
                   {id:4,name:'四成新'},{id:5,name:'五成新'},{id:6,name:'六成新'},
                   {id:7,name:'七成新'},{id:8,name:'八成新'},{id:9,name:'九成新'},
                   {id:10,name:'十成新'},
                  ],
            parentCategories:[],
            imgFile:'',
            kind:2,
            username:this.$store.state.user.user,
            id:this.$store.state.userId.userId,
            fileResource:'',
            parentId:'',
            typeId:'',
            childCategories:[],
            content:'',
            message:'',
            goodsId:this.$route.query.id,
            httpUrl:'http://119.23.12.250:8090/images',
            type:'',
            imageId:'',
            product:{}
          }
        },
      components:{
          "nav-common":Nav,
          "icon-common":Icon
      },
      created(){
          var _this=this;
            $.ajax({
              url:'http://119.23.12.250/sunny/type/findType',
              async:true,
              data:{"parentId":0},
              success:function (data) {
                _this.parentCategories=data.data;
                if (_this.goodsId) {
                  $.ajax({
                    url:'http://119.23.12.250/sunny/goods/findOne',
                    async:true,
                    data:{"id":_this.goodsId,"status":1},
                    success:function (product) {
                      if (product.data){
                        _this.product=product.data;
                        _this.imageId=_this.product.imageList[0].id;
                        _this.avatar=_this.httpUrl+_this.product.imageList[0].address;
                        _this.name=_this.product.name;
                        _this.price=_this.product.price;
                        _this.oldDegre=_this.product.oldDegree;
                        _this.means=_this.product.means;
                        _this.content=_this.product.content;
                        _this.typeId=_this.product.typeId;
                        _this.type=_this.product.type;
                        $.ajax({
                          url:'http://119.23.12.250/sunny/type/findParentType',
                          async:true,
                          data:{"id":_this.product.typeId},
                          success:function (type) {
                            _this.parentId=type.data.id;
                            _this.typeId=_this.product.typeId;

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
                }

              },
              error:function (error) {
                console.log(error);
              }
            });



      },
      methods:{
        changeFile(e){
          let _this=this;
          let formData=new FormData();
          formData.append("kind",this.kind);
          formData.append("username",this.username);
          formData.append("id",this.id);

          let config={
            headers:{
              'Content-Type': 'multipart/form-data'
            }
          };
          let $target = e.target || e.srcElement;
          let file = $target.files[0];
          this.imgFile=file;
          formData.append("imgFile",this.imgFile);
          var reader = new FileReader();
          reader.onload = (data) => {
            let res = data.target || data.srcElement;
            this.avatar = res.result;
            this.$http.post('http://119.23.12.250/sunny/image/imgUpload', formData, config)
              .then((res)=>{
                if (_this.goodsId){
                  $.ajax({
                    url:'http://119.23.12.250/sunny/image/update',
                    async:true,
                    data:{"id":_this.imageId,"address":res.body.data},
                    success:function (data) {

                    },
                    error:function (error) {
                      console.log(error);
                    }
                  })
                } else{
                  if (res.status === 200) {
                    this.fileResource=res.body.data;
                  }
                }

              })
          };
          reader.readAsDataURL(file);
        },
        getChildType(){
          this.type='';
          var _this=this;
          $.ajax({
            url:'http://119.23.12.250/sunny/type/findType',
            async:true,
            data:{"parentId":_this.parentId},
            success:function (data) {
              _this.childCategories=data.data;
            },
            error:function (error) {
              console.log(error);
            }
          })
        },
        addProduct(){
          if (this.userId){
            if (this.goodsId){
              if (this.typeId==''){
                this.typeId=this.parentId;
              }
              let  _this=this;
              $.ajax({
                url:"http://119.23.12.250/sunny/goods/update?id="+this.goodsId+"&name="+this.name+"&sellerId="+this.id+"&content="+this.content+
                  "&typeId="+this.typeId+"&number=1&price="+this.price+"&oldDegree="+this.oldDegree+"&means="+this.means+"&status="+1+"",
                async:true,
                type:'GET',
                success:function (product) {
                  _this.message=product.message;
                  setTimeout(()=>{
                    _this.$router.push('/mypublish');
                  },1000);


                },
                error:function (error) {
                  console.log(error);
                },
                dataType:'json'
              })
            } else{
              if (this.typeId==''){
                this.typeId=this.parentId;
              }
              let  _this=this;
              $.ajax({
                url:"http://119.23.12.250/sunny/goods/addGoods?goods.name="+this.name+"&goods.sellerId="+this.id+"&goods.typeId="+this.typeId+"" +
                  "&goods.price="+this.price+"&goods.oldDegree="+this.oldDegree+"&goods.means="+this.means+"&content.contents="+this.content+"" +
                  "&address="+this.fileResource+"&status="+1+"",
                async:true,
                type:'GET',
                success:function (data) {

                  _this.message=data.message;

                  setTimeout(()=>{
                    _this.$router.push('/index');
                  },1000);


                },
                error:function (error) {
                  console.log(error);
                },
                dataType:'json'
              })
            }
          } else{
            this.$router.push('/loginin');
          }


        }
      }
    }
</script>

<style scoped lang="stylus">
   .publish-container-publish span:hover{
     cursor pointer;
   }
  .publish {
    width: 100%;
    height: 100%;
    background: #fff;
    font-family: simsun;
    .publish-container-all{
      margin-left 150px;
      margin-right 150px;
      background #e7f4f0;
      padding-bottom :100px;
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
          padding:60px 117px;
          form{
            .publish-form{
              color :#000;
              font-weight :bold;
              font-size :18px;
              margin-bottom :30px;
              .publish-form-img{
                width:50px;
                height :50px;
                border-radius 50%;
                display :inline-block;
                vertical-align :middle;
                border:none;
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
                vertical-align :middle;
                width:80px;
                height:25px;
                line-height :25px;
                text-align :center;
                font-size :14px;
                margin-left 10px;
                margin-top 10px;
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
              .parentCategory{
                 width :45%;
              }
              .typeCategory{
                width 45%;
                margin-left 20px;
              }

            }
          }
        }
        .message{
          text-align :center;
          font-size :18px;
          color :#85cab5;
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

  }
  .publish .icon{
    position: fixed;
    right 171px;
  }
</style>
