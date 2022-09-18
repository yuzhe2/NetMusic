<script setup lang="ts">
let { time } =  defineProps<{
  color: string,
  time: string,
  width: string,
  process: number
}>()

let minute = parseInt(time.split('.')[0])
let second = parseInt(time.split('.')[1])
let allTime = minute * 60 + second

function getWidth (width: string, process: number) {
  return (parseInt(width) / 100) * process
}

function getCurTime (process: number) {
  let time = Math.round((allTime /  100) * process)
  let minute = Math.floor(time / 60) > 9 ? Math.floor(time / 60) : `0${Math.floor(time / 60)}`
  let second = time % 60 > 9 ? time % 60 : `0${time % 60}`
  return `${minute}:${second}`
}
</script>

<template>
  <div class="process-wrap">
    <span class="cur-time">{{ getCurTime(process) }}</span>
    <div class="process" :style="{ 'width': width }">
      <div class="bar"></div>
      <div class="cur" :style="{ 'background-color': color, width: `${getWidth(width, process)}px` }"></div>
      <div class="dot" :style="{ 'transform': `translateX(${getWidth(width, process)}px)` }"></div>
    </div>
    <span class="all-time">{{ time }}</span>
  </div>
</template>

<style scoped lang="scss">
.process-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cur-time,
  .all-time {
    font-size: 12px;
    color: #666;
  }

  .process {
    position: relative;
    height: 4px;

    .bar {
      background-color: #666;
      height: 100%; 
    }

    .cur {
      position: absolute;
      top: 0px;
      height: 100%;
      transition: all .3s ease;
    }

    .dot {
      position: absolute;
      top: -3px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #f00;
      transition: all .3s ease;
      z-index: 900;
    }
    .dot:hover {
      box-shadow: 0 0 0px #fff;
    }

  }
}
</style>