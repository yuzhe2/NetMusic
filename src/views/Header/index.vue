<script setup lang="ts">
import { useState } from '../../utils/store'
import Theme from '../../common/Theme.vue'
import Sign from '../../components/sign/Sign.vue'
import { ref } from 'vue';

const { userImg, username, isLogin } = useState(['username', 'userImg', 'isLogin'])

const signPop = ref<boolean>(false)

// 由于采用的是history模式,用来控制前进和后退的过程
// 0 -> 前进; 1 -> 后退
function handleHistoryView (number: number) {
  if (number === 1) {
    let flag = history.state.back
    if (flag) history.back()
  } else {
    let flag = history.state.forward
    if (flag) history.go()
  }
}
</script>

<template>
  <div class="header">
    <div class="logo">
      <i class="iconfont icon-yinle"></i>
      <span>网易云音乐</span>
    </div>
    <div class="view">
      <i class="iconfont icon-houtui" @click="handleHistoryView(1)" title="后退"></i>
      <i class="iconfont icon-qianjin" @click="handleHistoryView(0)" title="前进"></i>
    </div>
    <div class="search">
      <input type="text" class="input" />
    </div>
    <div class="user">
      <template v-if="isLogin">
        <span class="user-img">
          <img :src="userImg" alt="" class="img" />
        </span>
        <span class="user-name">{{ username }}</span>
      </template>
      <template v-else>
        <span class="tips" @click="signPop = true">未登录</span>
        <Sign v-if="signPop" @closeSign="signPop = false"></Sign>
      </template>
    </div>
    <div class="func">
      <Theme></Theme>
    </div>
    <div class="size">
      <span class="small" title="最小化">
        <i class="iconfont icon-zuixiaohua"></i>
      </span>
      <span class="switch">
        <i class="iconfont icon-24gl-minimize"></i>
      </span>
      <span class="close" title="关闭">
        <i class="iconfont icon-guanbi"></i>
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/@assets/scss/_handle.scss';
.header {
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 52px;
  padding: 10px 20px;
  box-sizing: border-box;
  @include background_color("background_header");

  .logo {
    margin-right: 75px;
    color: #fff;
  }

  .view {
    display: flex;
    justify-content: space-between;
    width: 40px;
    padding: 0px 5px;
    color: #fff;
  }

  .search {

    .input {
      border: 1px solid #333;
      height: 30px;
      padding: 6px 4px;
      box-sizing: border-box;
      background-color: rgba(102, 102, 102, 0.3);
    }

  }

  .user {
    position: absolute;
    right: 180px;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 12px;
    cursor: pointer;

    .user-img {
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-right: 5px;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .func {
    position: absolute;
    right: 312px;
  }

  .size {
    position: absolute;
    right: 20px;
    display: flex;
    justify-content: space-between;
    width: 80px;
    color: #fff;
  }
}
</style>