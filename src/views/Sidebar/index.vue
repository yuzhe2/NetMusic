<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { SheetItem } from '../../libs/aside'

defineProps<{
  sheetList: SheetItem[]
}>()

let listShow = ref<boolean>(true)

const router = useRouter()

const emit = defineEmits(['changeSheet'])
function handleChangeSheet (sheet: SheetItem) {
  router.push(`/main/${sheet.id}`)
  emit('changeSheet', sheet)
}
</script>

<template>
  <div class="aside">
    <div class="header">
      <span class="title" @click="listShow = !listShow">创建的歌单</span>
    </div>
    <ul class="list" v-show="listShow">
      <li v-for="item of sheetList" :key="item.id" class="item" @click="handleChangeSheet(item)">
        <i class="iconfont icon-sousuo"></i>
        <span class="title">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import '/@assets/scss/_handle.scss';
.aside {
  width: 200px;
  height: 100%;
  padding: 10px;
  border-right: 1px solid;
  box-sizing: border-box;
  border-color: #e0e0e0;
  @include border_color("border_aside");
  @include background_color("background_middle");
  @include font_color("font_some");
  .title {
    padding-left: 10px;
    cursor: pointer;
    user-select: none;
  }

  .list {
    .item {
      display: flex;
      align-items: center;
      padding: 8px 10px;

      .title {
        display: inline-block;
        margin-left: 5px;
      }
    }
    .item:hover {
      background-color: rgba(102, 102, 102, 0.302);
    }
  }
}
</style>