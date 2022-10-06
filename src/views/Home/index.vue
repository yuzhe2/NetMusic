<script setup lang="ts">
import recommendSheet from './data'
</script>

<template>
  <div class="home">
    <ul class="sheets">
      <li class="sheet" v-for="(item, index) in recommendSheet" :key="index">
        <img :src="item.img" class="img" />
        <span class="title">{{ item.title }}</span>
        <span class="volume">{{ item.volume }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import '/@assets/scss/_handle.scss';
.home {
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
  @include background_color("background_middle");

  .sheets {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 60px 230px;
    box-sizing: border-box;
    .sheet {
      position: relative;
      width: 150px;
      color: #000;
      @include font_color("font_some");
      margin-bottom: 20px;
      .title {
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .volume {
        position: absolute;
        right: 0px;
        top: 0px;
        color: #fff;
      }
      .img {
        border-radius: 4px;
      }
    }
  }
}
</style>