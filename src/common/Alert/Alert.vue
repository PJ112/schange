<template>

    <!-- alert -->
    <div id="alert" class="flex-con" v-if="alertDara">
      <div class="con">
        <div class="title" :style="{color:alertDara.titleColor}">{{alertDara.title}}</div>
        <div class="content" :style="{color:alertDara.contentColor}">{{alertDara.content}}</div>
        <div class="btn">
          <div
            class="btn-back flex-con"
            v-if="alertDara.btn[0]"
            :style="{background:alertDara.btnBColor[0],color:alertDara.btnColor[0]}"
            @click="alertBackFn"
          >{{alertDara.btn[0]}}</div>
          <div
            class="btn-sure flex-con"
            v-if="alertDara.btn[1]"
            :style="{background:alertDara.btnBColor[1],color:alertDara.btnColor[0]}"
            @click="alertSureFn"
          >{{alertDara.btn[1]}}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "Alert",
  props:['alertDara'],
  methods: {
    alertBackFn(){
      this.$emit('alertBack', '这是子组件传递的消息');
    },
    alertSureFn(){
      this.$emit('alertBack', '这是子组件传递的消息');
    }
  },
}
</script>

<style scoped>
  .flex-con{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #alert{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    z-index: 100;
    font-size: 16px;
    border:1px solid transparent;
  }
  #alert .con{
    width:28%;
    background: #fff;
  }
  #alert .title{
    padding: .8em 0;
    font-weight: 400;
    text-align: center;
    font-size: 1.1em;
  }
  #alert .content{
    padding: 0 1em .5em;
    text-align: center;
  }
  #alert .btn{
    height: 2em;
    background: #efefef;
    border-top: 1px solid gray;
    display: flex;
    justify-content: center;
  }
  #alert .btn div{
    width: 100%;
  }
  #alert .btn .btn-sure{
    border-left: 1px solid gray;
  }
</style>
