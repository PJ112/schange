<template>
  <div>
    <div class="goTop" @click="goTop">goTop</div>
  </div>
</template>
<script>
export default {
  name: 'Link',
  // mounted(){
  //   window.addEventListener('scroll',this.scrollToTop)
  // },
  // destroyed(){
  //   window.removeEventListener('scroll',this.scrollToTop)
  // },
  methods:{
    goTop () {
      if(document.documentElement.scrollTop>0){
        document.documentElement.scrollTop=0;
      }
    }
    // scrollToTop () {
    //   let that = this
    //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   that.scrollTop = scrollTop
    //
    // }
  }
}
</script>

<style lang="stylus" scoped>
  .goTop
    margin-top:200px;
    cursor:pointer;
</style>
