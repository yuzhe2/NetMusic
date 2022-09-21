<script setup lang="ts">
import { useState } from '../../utils/store'
import { SongItem } from '../../libs/song'
import { nextTick, ref, watch } from 'vue'
import { useStore } from 'vuex'
import Process from '../../common/Process.vue'
import Detail from '../Detail/index.vue'

const song = useState(['song']).song as SongItem
const music = ref<HTMLAudioElement>()
const playState = ref<boolean>(false)
const detailShow = ref<boolean>(false)
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
        <span class="prev player-btn" title="上一首" @click="handleFunc('prev')"></span>
        <span
          class="play player-btn"
          :class="playState ? 'playing' : ''"
          title="播放"
          @click="playMusic"
        ></span>
        <span class="next player-btn" title="下一首" @click="handleFunc('next')"></span>
      </div>
      <div class="process">
        <Process width="400px" :time="song.time" color="#f00" :process="processNum"></Process>
      </div>
    </div>
    <div class="func"></div>
  </div>
  <audio :src="song.url" ref="music"></audio>
  <Transition>
    <Detail v-if="detailShow" @closeDetail="detailShow = false"></Detail>
  </Transition>
</template>

<style scoped lang="scss">
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
  height: 44px;
  padding: 10px 15px;
  border: 1px solid #000;
  background-color: rgba(62, 78, 153, .7);

  .info {
    display: flex;
    align-items: center;
    width: 120px;
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
        background-image: url(../../assets/img/player.png);
      }

      .player-btn.playing {
        background-position: -30px 0;
      }

      .prev {
        background-position: 0 -30px;
        width: 19px;
        height: 20px;
      }

      .play {
        width: 19px;
        height: 29px;
      }

      .next {
        background-position: 0 -52px;
        width: 19px;
        height: 20px;
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