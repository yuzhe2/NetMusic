<script setup lang="ts">
import { SongItem } from '@/libs/aside'

let sheetList: SongItem[] = [
  {
    title: '游戏玩',
    id: 7,
    createTime: '2022-5-19 16:31:21'
  }
]
</script>

<template>
  <div class="aside">
    <div class="header">
      <span class="title">创建的歌单</span>
    </div>
    <ul class="list">
      <li class="item">
        <i class="iconfont icon-yinle"></i>
        <span class="title">我喜欢的音乐</span>
      </li>
    </ul>
  </div>
</template>

<script scoped lang="scss">

</script>