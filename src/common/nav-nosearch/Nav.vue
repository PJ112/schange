<template>
  <div class="index-nav">
    <div class="index-nav-icon">
      <img src="../../assets/imgs/index/schange.png">
    </div>
    <div class="index-nav-login">
      <span v-if="user">
        <div class="index-show-profile"  @mouseenter="show=true" @mouseleave="show=false" style="display: inline-block;height: 92px;padding-top: 30px;">
          <span class="index-nav-login-img">
                <img src="../../assets/imgs/index/person.png">
          </span>
          <transition name="show">
            <div class="index-profile" v-if="show">
              <div class="index-profile-angle">
              </div>
              <div class="index-profile-intro">
                <img class="index-profile-img" src="../../assets/imgs/index/person.png">
                <span class="index-profile-title">{{user.user}}</span>
                <img class="index-profile-sex" src="../../assets/imgs/index_profile/女.png">
              </div>
              <div class="index-profile-category">
                <div class="index-category-item" v-for="(category,index) of categories" :key="index">
                  <router-link :to="category.path">
                    <img class="item-img" src="../../assets/imgs/index_profile/积分商城.png">
                    <div class="item-info">
                      {{category.info}}
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="index-profile-logout">
                <div class="index-change-secret">
                  更换密码
                </div>
                <div class="index-logout">
                  退出登录
                </div>
              </div>
            </div>
          </transition>
        </div>
      </span>
      <span v-if="!user">
         <span class="index-nav-loginin"><router-link to="/loginin">登陆</router-link></span>
        <span class="index-nav-register"><router-link to="/register">注册</router-link></span>
       </span>


    </div>

  </div>
</template>

<script>
    export default {
        name: "Nav",
        data(){
          return{
            categories:[
              {
                info:'购物车',
                path:'/index-shopping'
              },
              {
                info:"收藏",
                path:'/index-collection'
              },
              {
                info:'积分商城',
                path:'/index-integral'
              },
              {
                info:'个人中心',
                path:'/my'
              },
              {
                info:'订单管理',
                path:'/index-ordering'
              },
              {
                info:'我的私信',
                path:'/index-private-letter'
              }
            ],
            show:false,
            user:this.$store.state.user
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
    z-index 110;
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
          }
        }
      }
    }
  }
</style>
