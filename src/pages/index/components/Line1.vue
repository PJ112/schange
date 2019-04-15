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
              <h1>双11潮流盛典男神齐聚！张艺兴霸气开场 </h1>
              <div class="line-content-time">
                2018-10-21 (来源: 头条统一流入帐号)
              </div>
              <div class="line-content-info">
                <img src="https://img.alicdn.com/bao/upload///img.alicdn.com/imgextra/i1/3378002866/O1CN011X2fanIYYdmaFQn_!!3378002866-0-daren.jpg"/>
                <div>
                  10月20日晚上，天猫双11潮流盛典在北京水立方盛大开幕！潮流盛典分为“元气乐活”、“东方国潮”、“艺术美力”和“时髦潮范”四大部分，张艺兴、陈学冬、盛一伦、Jaden Smith等一众时尚弄潮儿分别作为代表空降现场激情开唱！让我们一起来看看！
                </div>
                <img src="https://img.alicdn.com/bao/upload///img.alicdn.com/imgextra/i4/3378002866/O1CN011X2fanIa25CXqXj_!!3378002866-0-daren.jpg"/>
                <div>
                  记得当年电影《当幸福来敲门》里的小男孩吗？他是巨星Will Smith之子Jaden Smith，现在的他已经长大成为一名电影人，小时候就潮出了名。今晚，他作为时髦潮范的代表空降现场！一场Solo表演再次涨粉无数。
                </div>
                <img src="https://img.alicdn.com/bao/upload///img.alicdn.com/imgextra/i1/3378002866/O1CN011X2fanqGWdHFTBs_!!3378002866-0-daren.jpg"/>
                <div>
                  前方高能！张艺兴也来到了潮流盛典现场，这一次，他的身份是MAC中国区代言人。
                </div>
                <img src="https://img.alicdn.com/bao/upload///img.alicdn.com/imgextra/i3/3378002866/O1CN011X2fahc9zMuNUqs_!!3378002866-0-daren.jpg"/>
                <div>
                  张艺兴穿一身金色上衣激情开唱，眼眸里都是光，和Rihanna机器人舞团的表演引爆全场！
                </div>
                <img src="https://img.alicdn.com/bao/upload///img.alicdn.com/imgextra/i2/3378002866/O1CN011X2fanta5w3O1XQ_!!3378002866-0-daren.jpg"/>
                <div>
                  高冷超模脸盛一伦则是一如既往地酷，双11潮流盛典上的他穿着一黄色外套，在T台上霸气走秀。
                </div>
                <img src="https://img.alicdn.com/bao/upload///img.alicdn.com/imgextra/i3/3378002866/O1CN011X2fapLT98j3h4M_!!3378002866-0-daren.jpg"/>
                <div>
                  《明日之子第二季》年度“最强厂牌” 蔡维泽也来了！作为元气乐活的代表，他身穿kappa新款Banda战服，和乐队一起盛典现场原声献唱！
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
        name: "Line1",
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
            padding-top 20px;
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
              line-height 28px;
            }
          }
        }
      }
    }
  }
</style>
