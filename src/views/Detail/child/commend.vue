<script setup lang="ts">
defineProps<{
  img: string,
  title: string
}>()
</script>

<template>
  <div class="commend">
    <span class="img-wrap">
      <img :src="img" class="img" />
    </span>
    <span class="text-wrap">{{ title }}</span>
  </div>
</template>

<style scoped lang="scss">
.commend {
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;

  .img-wrap {

    .img {
      width: 30px;
      border-radius: 4px;
      overflow: hidden;
      margin-right: 10px;
    }

  }

  .text-wrap {
    font-size: 12px;
    color: #fff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}

.commend:hover {
  background-color: rgba($color: #666, $alpha: .7);
}
</style>