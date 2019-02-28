<template>
  <div class="index-nav">
    <div class="index-nav-icon">
      <img src="../../assets/imgs/index/schange.png">
    </div>
    <div class="index-nav-search">
      <div class="index-nav-search-input">
        <input type="text" placeholder="搜索">
        <img src="../../assets/imgs/index/search.png">
      </div>
    </div>
    <div class="index-nav-login">
      <div class="index-show-profile"  @mouseenter="show=true" @mouseleave="show=false" style="display: inline-block;height: 92px;">
        <span class="index-nav-login-img">
              <img src="../../assets/imgs/index/person.png">
        </span>
        <transition name="show">
          <div class="index-profile" v-if="show">
            <div class="index-profile-angle">

            </div>
            <div class="index-profile-intro">
              <img class="index-profile-img" src="../../assets/imgs/index_profile/profile.png">
              <span class="index-profile-title">Sunny</span>
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

        <span class="index-nav-loginin">登陆</span>
        <span class="index-nav-register">注册</span>

    </div>

  </div>
</template>

<script>
    export default {
        name: "Nav.vue",
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
                path:'/index-profile'
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
            show:false
          }
        },
        methods:{

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
    height :92px;
    margin: 0 auto;
    box-sizing: border-box;
  .index-nav-icon{
    display :inline-block;
    width :275px;
    height :92px;
  img{
    width:100%;
    margin-top :5px;
    height :88px;
  }
  }
  .index-nav-search{
    display :inline-block;
    margin-left :92px;
    height :88px;
  .index-nav-search-input{
    background-image :url("../../assets/imgs/index/input.png");
    background-repeat no-repeat;
    background-size :100%;
    margin-top 24px;
    width :450px;
    height :45px;
  input{
    display :inline-block;
    margin-left :30px;
    color :#737473;
    font-size :16px;
    height :30px;
    margin-top 6px;
    width :365px;
    font-family "Microsoft Yahei";
  }
  img{
    margin-top :6px;
    display :inline-block;
  }
  }
  }
  .index-nav-login{
    display :inline-block;
    margin-left :80px;
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
      right:-80px;
      top:100px;
      background :#fff;
      border-radius :8px;
      .index-profile-angle{
        width:15px;
        height :15px;
        position: absolute;
        left:32px;
        top:-6px;
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
