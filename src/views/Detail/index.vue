<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useState } from '../../utils/store'
import { transformToNum } from '../../utils/date'
import Commend from './child/commend.vue'
import CommentItem from '../../components/comment/CommentItem.vue'

import { listenData, sheetData, lyric, commentData } from './data'

const { song } = useState(['song'])
let allTime = transformToNum(song.value.time)

const props = defineProps<{
  state: boolean,
  process: number
}>()
const imgTransform = ref<number>(0)
let timer: any = null

// 监听播放状态的变化
watch(() => props.state, (newVal) => {
  rotateImg(newVal)
})

const activeIdx = ref<number>(0)
const scrollLyric = ref<HTMLElement>()
// 监听播放进度滚动歌词并高亮显示
watch(() => props.process, (newVal) => {
  let curAct = allTime * (newVal / 100)
  let index = 0
  lyric.forEach((val, idx) => {
    if (curAct >= val.time && curAct <= (lyric[idx + 1].time || Infinity)) {
      index = idx
      return
    }
  })
  activeIdx.value = index
})

let LyricTimer = null as any
watch(activeIdx, (newVal) => {
  let num = (newVal - 1) * 40,
    range = 0
  if (LyricTimer) {
    clearInterval(LyricTimer)
  }
  LyricTimer = setInterval(() => {
    if (range <= 40) {
      scrollLyric.value?.scrollTo(0, num + range)
      range = range + 0.5
    } else {
      clearInterval(LyricTimer)
    }
  }, 10) as any
})

// 旋转图片
function rotateImg (flag: boolean) {
  if (flag) {
    timer = setInterval(() => {
      imgTransform.value += 0.05
    })
  } else {
    clearInterval(timer)
  }
}

const emit = defineEmits(['closeDetail'])

</script>

<template>
  <div class="detail">
    <i class="iconfont icon-xiangxiajiantou" @click="emit('closeDetail')"></i>
    <div class="header">
      <div class="title">{{ song.title }}</div>
      <div class="info">{{ song.singer + '-' + song.album }}</div>
    </div>
    <div class="main">
      <div class="img-wrap">
        <img :src="song.img" class="img" :style="{ transform: `rotate(${imgTransform}deg)` }" />
      </div>
      <div class="lyric" ref="scrollLyric">
        <ul class="list">
          <li class="item"
            v-for="(item, index) of lyric"
            :key="index"
            :style="activeIdx === index ? { color: '#fff' } : {}"
          >
            <span class="text">{{ item.content }}</span>
          </li>
        </ul>
      </div>
      <div class="recommend">
        <div class="item">
          <p class="">包含这首歌的歌单</p>
          <ul class="wrap">
            <Commend
              v-for="(item, index) of sheetData"
              :key="index"
              v-bind="item"
            ></Commend>
          </ul>
        </div>
        <div class="item">
          <p class="">喜欢这首歌的人也听</p>
          <ul class="wrap">
            <Commend
              v-for="(item, index) of listenData"
              :key="index"
              v-bind="item"
            ></Commend>
          </ul>
        </div>
      </div>
    </div>
    <div class="comment">
      <p class="num">全部评论(31073)</p>
      <CommentItem
        v-for="(item, index) of commentData"
        v-bind="item"
        :key="index"
      ></CommentItem>
    </div>
  </div>
</template>

<style scoped lang="scss">
.detail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 66px);
  padding-bottom: 30px;
  background-color: #333;
  color: #fff;
  overflow: auto;
  box-sizing: border-box;

  .iconfont {
    position: fixed;
    top: 20px;
    left: 20px;
  }

  .header {
    padding: 0px 150px;
    padding-top: 20px;
    padding-bottom: 10px;
    .title,
    .info {
      width: 100%;
      text-align: center;
    }

    .title {
      font-size: 20px;
    }
  }

  .main {
    display: flex;
    height: 400px;
    align-items: center;
    justify-content: space-between;
    padding: 0px 150px;
    margin-bottom: 20px;

    .lyric {
      width: 400px;
      height: 100%;
      overflow: auto;
      padding-top: 204px;
      box-sizing: border-box;

      .list {
        text-align: center;

        .item {
          line-height: 40px;
          height: 40px;
          color: #666;
        }
      }

    }

    .lyric::-webkit-scrollbar {
      width: 8px;
      background-color: #333;
    }

    .lyric::-webkit-scrollbar-thumb {
      background-color: transparent;
      border: 2px solid #333;
      border-radius: 10px;
    }

    .lyric:hover::-webkit-scrollbar-thumb {
      background-color: rgba(102, 102, 102, .7);
    }

    .img-wrap {

      .img {
        width: 270px;
        border-radius: 50%;
        overflow: hidden;
      }

    }

    .recommend {
      width: 270px;
      height: 200px;
      overflow: auto;
    }

    .recommend::-webkit-scrollbar {
      width: 8px;
      background-color: #333;
    }

    .recommend::-webkit-scrollbar-thumb {
      background-color: transparent;
      border: 2px solid #333;
      border-radius: 10px;
    }

    .recommend:hover::-webkit-scrollbar-thumb {
      background-color: rgba(102, 102, 102, .7);
    }

    .recommend::-webkit-scrollbar-thumb:hover {
      background-color: rgba(102, 102, 102, 1);
    }

  }

  .comment {
    width: 800px;
    margin: 0px auto;

    .num {
      font-weight: bold;
    }
  }
}

.detail::-webkit-scrollbar {
  width: 8px;
  background-color: #333;
}

.detail::-webkit-scrollbar-thumb {
  background-color: rgba(102, 102, 102, .7);
  border: 2px solid #333;
  border-radius: 10px;
}
</style>