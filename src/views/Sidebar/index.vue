<script setup lang="ts">
import { ref } from 'vue';
import { SongItem } from '../../libs/aside'

let sheetList: SongItem[] = [
  {
    title: '游戏用',
    id: 7,
    createTime: '2022-5-19 16:31:21'
  },
  {
    title: 'clannad',
    id: 8,
    createTime: '2022-3-13 14:12:31'
  }
]

let listShow = ref<boolean>(true)
</script>

<template>
  <div class="aside">
    <div class="header">
      <span class="title" @click="listShow = !listShow">创建的歌单</span>
    </div>
    <ul class="list" v-show="listShow">
      <li class="item">
        <i class="iconfont icon-yinle"></i>
        <span class="title">我喜欢的音乐</span>
      </li>
      <li v-for="item of sheetList" :key="item.id" class="item">
        <i class="iconfont icon-sousuo"></i>
        <span class="title">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.aside {
  float: left;
  width: 200px;
  padding: 0px 10px;
  box-sizing: border-box;
  .title {
    padding-left: 10px;
    cursor: pointer;
    user-select: none;
  }

  .list {
    .item {
      display: flex;
      align-items: center;
      padding: 8px 10px;

      .title {
        display: inline-block;
        margin-left: 5px;
      }
    }
  }
}
</style>