<script setup lang="ts">
import { SongItem } from '../../libs/song'
import { useStore } from 'vuex'

defineProps<{
  song: SongItem
}>()

const store = useStore()
function switchMusic (song: SongItem) {
  store.commit('switchSong', song)
}
</script>

<template>
  <div class="song-item" @dblclick="switchMusic(song)">
    <slot name="prefix"></slot>
    <div class="operate" style="width: 50px;">
      <i class="iconfont icon-yinle like"></i>
      <i class="iconfont icon-yinle download"></i>
    </div>
    <span class="title" style="width: 39%;">{{ song.title }}</span>
    <span class="singer" style="width: 19%;">{{ song.singer }}</span>
    <span class="album" style="width: 25%;">{{ song.album }}</span>
    <span class="time" style="width: 9%;">{{ song.time }}</span>
  </div>
</template>

<style scoped lang="scss">
@import '/@assets/scss/_handle.scss';
.song-item {
  display: flex;
  align-items: center;
  padding: 8px 5px;
  font-size: 14px;
  cursor: pointer;
  color: #666;

  .operate {
    display: flex;
    justify-content: space-around;
    padding: 0px 4px;
    box-sizing: border-box;
  }
  
  .title {
    @include font_color("font_some");
  }

  .album {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.song-item:hover {
  background-color: #6666664d !important;
}
</style>