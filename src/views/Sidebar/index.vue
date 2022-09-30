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
.aside {
  width: 200px;
  padding: 10px;
  border: 1px solid #000;
  box-sizing: border-box;
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
      background-color: rgba(51, 51, 51, 0.3);
    }
  }
}
</style>