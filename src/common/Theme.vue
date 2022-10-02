<script setup lang="ts">
import { ref } from 'vue';

const themeList = [
  {
    color: '#2b2b2b',
    text: '酷炫黑'
  },
  {
    color: '#ec4141',
    text: '官方红'
  },
  {
    color: '#faa2c6',
    text: '可爱粉'
  },
  {
    color: '#5bb8fe',
    text: '天际蓝'
  },
  {
    color: '#5cc385',
    text: '清新绿'
  },
  {
    color: '#e0b060',
    text: '土豪金'
  }
]

const themeShow = ref<boolean>(false)
</script>

<template>
  <div class="theme">
    <i class="iconfont icon-yunxiazai_o icon" @click="themeShow = !themeShow"></i>
    <div class="wrap" v-show="themeShow">
      <ul class="list">
        <li
          class="item"
          v-for="(item, index) of themeList"
          :key="index"
          :style="{ background: item.color }"
        >
          <span class="text">{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.theme {
  position: relative;
  .wrap {
    position: absolute;
    left: -200px;
    z-index: 999;
    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 400px;

      .item {
        position: relative;
        width: 120px;
        height: 120px;
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