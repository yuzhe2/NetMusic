<script setup lang="ts">
defineProps<{
  img: string,
  nickName: string,
  content: string,
  time: string
}>()
</script>

<template>
  <div class="comment">
    <div class="left">
      <img :src="img" class="img" />
    </div>
    <div class="right">
      <div class="content">
        <span class="nickName">{{ nickName + ': ' }}</span>
        <span class="text">{{ content }}</span>
      </div>
      <div class="info">
        <span class="time">{{ time }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment {
  display: flex;
  padding: 15px 0px;
  border-bottom: 1px solid #666;
  .left {
    .img {
      width: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .right {
    font-size: 14px;
    .content {
      margin-bottom: 10px;
      .nickName {
        color: #0c73c2;
      }
    }
    .info {
      font-size: 12px;
      color: #666;
    }
  }
}
</style>