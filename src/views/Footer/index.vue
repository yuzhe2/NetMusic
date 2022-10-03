<script setup lang="ts">
import { useState } from '../../utils/store'
import { SongItem } from '../../libs/song'
import { nextTick, ref, watch } from 'vue'
import { useStore } from 'vuex'
import Process from '../../common/Process.vue'
import Detail from '../Detail/index.vue'

const song = useState(['song']).song as SongItem
const music = ref<HTMLAudioElement>()
let playState = ref<boolean>(false)
let detailShow = ref<boolean>(false)
const store = useStore()

watch(song, () => {
  nextTick(() => {
    music.value?.play()
    playState.value = true
  })
})

function handleTimeChange () {
  let musicDom = music.value as HTMLAudioElement
  if (isNaN(musicDom.currentTime) || isNaN(musicDom.duration)) {
    processNum.value = 0
    return
  }
  processNum.value = (musicDom.currentTime / musicDom.duration) * 100
}

const processNum = ref<number>(0)

function playMusic () {
  let state = music.value?.paused
  if (state) {
    music.value?.play()
    playState.value = true
  } else {
    music.value?.pause()
    playState.value = false
  }
}

function handleFunc (type: string) {
  store.commit('changeTypeSong', type)
}

nextTick(() => {
  music.value?.addEventListener('timeupdate', handleTimeChange, false)
})
</script>

<template>
  <div class="footer">
    <div class="info">
      <img :src="song.img" class="img" @click="detailShow = true" />
      <div class="name">
        <span class="title">{{ song.title }}</span>
        <div class="singer">{{ song.singer }}</div>
      </div>
    </div>
    <div class="middle">
      <div class="control">
        <span class="prev player-btn" title="上一首" @click="handleFunc('prev')">
          <i class="iconfont icon-shangyishou"></i>
        </span>
        <span
          class="play player-btn"
          title="播放"
          @click="playMusic"
        >
          <i class="iconfont icon-bofang" v-if="!playState"></i>
          <i class="iconfont icon-zanting" v-else></i>
        </span>
        <span class="next player-btn" title="下一首" @click="handleFunc('next')">
          <i class="iconfont icon-xiayishou"></i>
        </span>
      </div>
      <div class="process">
        <Process width="400px" :time="song.time" :process="processNum"></Process>
      </div>
    </div>
    <div class="func"></div>
  </div>
  <audio :src="song.url" ref="music"></audio>
  <Transition>
    <Detail v-show="detailShow" @closeDetail="detailShow = false" :state="playState" :process="processNum"></Detail>
  </Transition>
</template>

<style scoped lang="scss">
@import '/@assets/scss/_handle.scss';
.v-enter-active,
.v-leave-active {
  transition: top 0.25s linear;
}

.v-enter-from,
.v-leave-to {
  top: 100vh !important;
}
.footer {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 6px 15px;
  border-top: 1px solid;
  border-color: #e0e0e0;
  @include border_color("border_aside");
  box-sizing: border-box;
  @include background_color("background_footer");
  z-index: 9999;

  .info {
    display: flex;
    align-items: center;
    width: 120px;
    @include font_color("font_some");
    .img {
      width: 60px;
      border-radius: 4px;
      margin-right: 10px;
    }
    .name {
      .title {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 16px;
      }
      .singer {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;
      }
    }
  }

  .middle {
    .control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 200px;
      margin: 0px auto;
      margin-bottom: 4px;
      .player-btn {
        display: inline-block;
        width: 19px;
        height: 19px;
        
        .iconfont {
          font-size: 24px;
          color: #2e2e2e;
          @include font_color("color_play");
        }

        .icon-shangyishou:hover,
        .icon-xiayishou:hover {
          @include font_color("color_hover");
        }
      }

    }
    .process {
      width: 480px;
    }
  }

  .func {
    width: 200px;
  }
}
</style>