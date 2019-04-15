<template>
    <div class="line">
      <nav-common></nav-common>
      <div class="line-container">
        <div class="line-wrapper">
          <div class="line-title">
            <span class="title1">头条</span>&nbsp;<span class="title2">></span>&nbsp;<span class="title3">正文</span>
          </div>
          <div class="line-splice">
          </div>
          <div class="line-content">
            <h1>李宇春压轴潮流盛典，玩转国潮白流苏！ </h1>
            <div class="line-content-time">
              2018-10-21 (来源: 头条统一流入帐号)
            </div>
            <div class="line-content-info">
              <img src="https://img.alicdn.com/bao/upload///img.alicdn.com/imgextra/i4/3378002866/O1CN011X2faoleT2ZyYap_!!3378002866-0-daren.jpg"/>
              <div>
                10月20日晚，时尚女王李宇春压轴亮相2018天猫双11全球潮流盛典，一身白衣帅气炸裂，引发现场无数粉丝尖叫。
              </div>
              <img src="https://img.alicdn.com/bao/upload///img.alicdn.com/imgextra/i4/3378002866/O1CN011X2faoWNnB7xpgO_!!3378002866-0-daren.jpg"/>
              <div>
                今年的天猫双11全球潮流盛典已经是第三届，如今已经发展成为超级时尚IP，在业内被誉为“全球第五大时装秀”
              </div>
              <img src="https://img.alicdn.com/bao/upload///img.alicdn.com/imgextra/i2/3378002866/O1CN011X2famPqufqx8OI_!!3378002866-0-daren.jpg"/>
              <div>
                去年天猫双11全球潮流盛典，李宇春就曾压轴出场。
              </div>
              <img src="https://img.alicdn.com/bao/upload///img.alicdn.com/imgextra/i4/3378002866/O1CN011X2fandowWtv5Dl_!!3378002866-0-daren.jpg"/>
              <div>
                今年时尚女王再次惊艳亮相，网友纷纷评论：白衣甜葱、白流苏女王……
              </div>
              <img src="https://img.alicdn.com/bao/upload///img.alicdn.com/imgextra/i1/3378002866/O1CN011X2faolgTlBuavh_!!3378002866-0-daren.jpg"/>
              <div>
                出道十多年来，李宇春除了现场台风霸气、唱功不俗，穿衣风格也是可圈可点，一直走在时尚潮流的前沿。
              </div>
              <img src="https://img.alicdn.com/bao/upload///img.alicdn.com/imgextra/i3/3378002866/O1CN011X2fapNLcgan4Cx_!!3378002866-0-daren.jpg"/>
              <div>
                当晚，李宇春演唱了《流行》、《一趟》，保持了一贯稳定的超高现场live水平，完美致敬天猫双11全球潮流盛典。
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
</template>

<script>
  import Nav from '../../../common/nav-nosearch/Nav'
  export default {
    name: "Line2",
    components:{
      "nav-common":Nav
    }
  }
</script>

<style lang="stylus" scoped>
  .line{
    width: 100%;
    height: 100%;
    background :#fff;
    font-family "Microsoft Yahei";
    .line-container{
      width :100%;
      height:100%;
      position: absolute;
      .line-wrapper{
        position: absolute;
        width:1286px;
        margin :20px auto;
        background :#e7f4f0;
        height :auto;
        padding-bottom :40px;
        left :50%;
        margin-left -643px;
        border-radius 5px;
        .line-title{
          width 100%;
          height 60px;
          line-height 60px;
          padding-left 20px;
          span{
            font-size 16px;
            display inline-block;
            vertical-align middle;
          }
          .title1{
            color red;
          }
        }
        .line-splice{
          width 100%;
          height 2px;
          background white;
        }
        .line-content{
          h1{
            font-size 24px;
            padding-left 20px;
            padding-top 20px;
          }
          .line-content-time{
            font-size 18px;
            color #969896
            padding-left 20px;
            padding-bottom 20px;
            margin-top 20px;
          }
          .line-content-info{
            img{
              width 90%;
              padding-left 5%;
            }
            div{
              font-size 18px;
              padding-left 5%;
              padding-right 5%;
              padding-top 10px;
              padding-bottom 10px;
              line-height 30px;
            }
          }
        }
      }
    }
  }
</style>
