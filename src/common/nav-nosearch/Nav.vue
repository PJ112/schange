<template>
  <div class="index-nav">
    <div class="index-nav-icon">
      <router-link to="/index">
        <img src="../../assets/imgs/index/schange.png">
      </router-link>
    </div>
    <div class="index-nav-login">
      <span v-if="user">
        <div class="index-show-profile"  @mouseenter="show=true" @mouseleave="show=false" style="display: inline-block;height: 92px;padding-top: 30px;">
          <span class="index-nav-login-img" style="position: relative;">
                <span class="red-point"  style="position: absolute;left: 43px;top:-15px;" v-if="isExistUnreadMessage"></span>
                <img style="width: 50px;height: 50px;border-radius: 50%" src="../../assets/imgs/index/person.png" v-if="!userImg">
                <img style="width: 50px;height: 50px;border-radius: 50%" :src="userImg" v-if="userImg"/>
          </span>
          <transition name="show">
            <div class="index-profile" v-if="show">
              <div class="index-profile-angle">
              </div>
              <div class="index-profile-intro">
                <img style="width: 50px;height: 50px;border-radius: 50%" class="index-profile-img" src="../../assets/imgs/index/person.png" v-if="!userImg">
                <img style="width: 50px;height: 50px;border-radius: 50%" class="index-profile-img" :src="userImg" v-else>

                <span class="index-profile-title">{{user}}</span>
                <img class="index-profile-sex" src="../../assets/imgs/index_profile/女.png" v-if="sex===2">
                <img class="index-profile-sex" src="../../assets/imgs/index_profile/男.png" v-else-if="sex===1"/>
                <img class="index-profile-sex" src="../../assets/imgs/my/mycollection/保密.png" v-else/>
              </div>
              <div class="index-profile-category">
                 <div class="index-category-item" style="position: relative;">
                   <router-link to="/index-shopping" style="display: inline-block;" >
                     <img src="../../assets/imgs/index_profile/购物车.png"/>
                    <div class="item-info">
                      购物车
                    </div>
                  </router-link>
                </div><div class="index-category-item" style="position: relative;">
                 <router-link to="/mymall" style="display: inline-block;">
                    <img src="../../assets/imgs/index_profile/积分商城.png"/>
                    <div class="item-info">
                      积分商城
                    </div>
                  </router-link>
                </div><div class="index-category-item" style="position: relative;">
                 <router-link to="/my" style="display: inline-block;">
                   <span class="red-point" v-if="isExistUnreadMessage" style="position: absolute;left: 54px;"></span>
                   <img src="../../assets/imgs/index_profile/个人中心.png"/>
                    <div class="item-info">
                     个人中心
                    </div>
                  </router-link>
                </div><div class="index-category-item" style="position: relative;">
                 <router-link to="/myorder" style="display: inline-block;">
                   <img src="../../assets/imgs/index_profile/订单管理.png"/>
                    <div class="item-info">
                      订单管理
                    </div>
                  </router-link>
                </div><div class="index-category-item" style="position: relative;">
                 <router-link to="/mycollection" style="display: inline-block;">
                   <span class="red-point" v-if="isExistUnreadMessage" style="position: absolute;left: 57px;"></span>
                   <i class="iconfont" style="font-size: 25px;display: block;color:#85cab5;">&#xe69d;</i>
                    <div class="item-info">
                      我的私信
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="index-profile-logout">
                <div class="index-logout" @click="logout" style="font-size: 16px;">
                  退出登录
                </div>
              </div>
            </div>
          </transition>
        </div>
      </span>
      <span v-else>
         <span class="index-nav-loginin"><router-link to="/loginin">登陆</router-link></span>
        <span class="index-nav-register"><router-link to="/register">注册</router-link></span>
       </span>


    </div>

  </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "Nav",
        data(){
          return{
            show:false,
            user:this.$store.state.user.user,
            userId:this.$store.state.userId.userId,
            userImg:'',
            sex:0,
            httpUrl:'http://119.23.12.250:8090/images',
            isExistUnreadMessage:false
          }
        },
       created(){
         let _this=this;
         $.ajax({
           url:'http://119.23.12.250/sunny/user/findOne',
           async:true,
           data:{"id":_this.userId},
           success:function (user) {
             if (user.flag){
               _this.sex=user.data.sex;
               if (user.flag){
                 $.ajax({
                   url:'http://119.23.12.250/sunny/image/findImageAddress',
                   async:true,
                   data:{"kindId":_this.userId,"kind":1},
                   success:function (user) {
                     if (user.flag){
                       if (user.data){
                         _this.userImg=_this.httpUrl+user.data.address;

                       }
                     }
                   },
                   error:function (error) {
                     console.log(error);
                   }
                 })
               }
             }

           },
           error:function (error) {
             console.log(error);
           }
         });
         $.ajax({
           url:'http://119.23.12.250/sunny/message/findUnreadMessage',
           async:true,
           data:{userId:this.userId},
           success:function (message) {
             console.log(message);
             if (message.flag){
               _this.isExistUnreadMessage=message.flag;
             }
           },
           error:function (error) {
             console.log(error);
           }
         })
       },
       methods:{
          logout(){
            let storage = window.localStorage;
            storage.clear();
            this.$store.dispatch('updateUserAsyc','');
            this.$store.dispatch('updateuserIdAsyc','');
            window.location.reload();
          }
       }
    }
</script>

<style lang="stylus" scoped>
  .index-category-item:hover{
    cursor: pointer;
  }
  .show-enter-active, .show-leave-active {
    transition: opacity .7s
  }
  .show-enter, .show-leave-to{
    opacity: 0;
  }
  .index-nav-login-img:hover{
    cursor :pointer;
  }
  .index-nav{
    width :80%;
    height :100px;
    margin: 0 auto;
    box-sizing: border-box;
    .index-nav-icon{
      display :inline-block;
      width :275px;
      height :92px;
      img{
        display inline-block;
        width:100%;
        margin-top :5px;
        height :88px;
      }
    }
    .index-nav-login{
      display :inline-block;
      float :right;
      margin-right :4%;
      height :92px;
      position :relative;
      line-height 30px;
      z-index 999;
      .index-nav-loginin{
        display :inline-block;
        margin-left :10px;
        color :#2ab7b7;
        height :92px;
        line-height :92px;
        font-size :18px;
        font-family: simsun;
        font-weight :bold;
      }
      .index-nav-register{
        display :inline-block;
        margin-left :8px;
        color :#2ab7b7;
        font-size :18px;
        margin-top :5px;
        font-family: simsun;
        border-left :2px solid #85cab5;
        padding-left :10px;
        font-weight :bold;
      }
      .index-profile{
        width:250px;
        position: absolute;
        right:-108px;
        top:85px;
        background :#fff;
        border-radius :8px;
        border :1px solid #eee;
        .index-profile-angle{
          width: 15px;
          height: 15px;
          position: absolute;
          left: 113px;
          top: -6px;
          transform:rotate(45deg);
          -webkit-transform:rotate(45deg);
          -moz-transform:rotate(45deg);
          background :#fff;
        }
        .index-profile-intro{
          margin:12px;
          .index-profile-img{
            width :60px;
            height :60px;
            display :inline-block;
          }
          .index-profile-title{
            display :inline-block;
            margin-left :20px;
            font-size :24px;
          }
          .index-profile-sex{
            display :inline-block;
            margin-left :20px;
          }

        }
        .index-profile-category{
          box-sizing border-box;
          .index-category-item{
            width:83px;
            height:82px;
            text-align :center;
            display :inline-block;
            border:1px solid #e5e5e5;
            padding-top:12px;
            box-sizing :border-box;
            .item-img{
              width :30px;
              height :30px;
            }
            .item-info{
              margin-top :8px;
              color :#8e8a8a;
              font-size :14px;
            }
          }
        }
        .index-profile-logout{
          margin-top :16px;
          margin-left :12px;
          .index-change-secret{
            color :#2b2a2a;
          }
          .index-logout{
            color :#f72b2b;
            margin-top :18px;
            margin-bottom :14px;
            &:hover{
              cursor pointer
            }
          }

        }
      }
    }
  }
  .index-logout:hover{
    cursor pointer
  }
  .red-point{
    width 8px;
    height:8px;
    background :red;
    border-radius 50%;
    display: inline-block;
  }

</style>
