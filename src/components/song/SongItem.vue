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
    <span class="title" style="width: 300px;">{{ song.title }}</span>
    <span class="singer" style="width: 150px;">{{ song.singer }}</span>
    <span class="album" style="width: 200px;">{{ song.album }}</span>
    <span class="time" style="width: 100px;">{{ song.time }}</span>
  </div>
</template>

<style scoped lang="scss">
.song-item {
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  .operate {
    display: flex;
    justify-content: space-around;
    padding: 0px 4px;
    box-sizing: border-box;
  }
}

.song-item:hover {
  background-color: rgba($color: #333, $alpha: .3);
}
</style>