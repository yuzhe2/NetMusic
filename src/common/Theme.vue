<script setup lang="ts">
import { ref } from 'vue';

const themeList = [
  {
    color: '#2b2b2b',
    text: '酷炫黑',
    name: 'dark'
  },
  {
    color: '#ec4141',
    text: '官方红',
    name: 'red'
  },
  {
    color: '#faa2c6',
    text: '可爱粉',
    name: 'pink'
  },
  {
    color: '#5bb8fe',
    text: '天际蓝',
    name: 'blue'
  },
  {
    color: '#5cc385',
    text: '清新绿',
    name: 'green'
  },
  {
    color: '#e0b060',
    text: '土豪金',
    name: 'gold'
  }
]

const themeShow = ref<boolean>(false)

function handleChangeTheme (theme: string) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

document.documentElement.onclick = function () {
  if (!themeShow.value) return
  themeShow.value = false
}
</script>

<template>
  <div class="theme">
    <i class="iconfont icon-yunxiazai_o icon" @click.stop="themeShow = !themeShow"></i>
    <div class="wrap" v-show="themeShow">
      <ul class="list">
        <li
          class="item"
          v-for="(item, index) of themeList"
          :key="index"
          :style="{ background: item.color }"
          @click.stop="handleChangeTheme(item.name)"
        >
          <span class="text">{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/@assets/scss/_handle.scss';
.theme {
  position: relative;
  .icon {
    color: #fff;
    font-size: 20px;
  }
  .wrap {
    position: absolute;
    top: 37px;
    left: -160px;
    z-index: 999;
    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 320px;
      padding: 10px;
      background-color: #fff;
      @include background_color("background_theme");
      border-radius: 4px;

      .item {
        position: relative;
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
        border-radius: 5px;

        .text {
          position: absolute;
          bottom: 0px;
          width: 100%;
          color: #fff;
          text-indent: 10px;
          background-color: rgba(0, 0, 0, .3);
        }
      }
    }
  }
}
</style>