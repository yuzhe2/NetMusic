<script setup lang="ts">
import Header from './views/Header/index.vue'
import Aside from './views/Sidebar/index.vue'
import Main from './views/Main/index.vue'
import Footer from './views/Footer/index.vue'
import { SheetItem } from './libs/aside'
import { ref } from 'vue'

let sheetList: SheetItem[] = [
  {
    title: '我喜欢的音乐',
    id: 9,
    createTime: '2022-3-9 16:31:21' 
  },
  {
    title: '游戏用',
    id: 7,
    createTime: '2022-5-19 16:31:21'
  },
  {
    title: 'clannad',
    id: 8,
    createTime: '2022-3-13 14:12:31'
  }
]

let curSheet = ref<SheetItem>(sheetList[0])
function handleChangeSheet (item: any) {
  curSheet.value = item
}
</script>

<template>
  <header>
    <Header></Header>
  </header>
  <aside>
    <Aside @changeSheet="handleChangeSheet" :sheetList="sheetList"></Aside>
  </aside>
  <main>
    <Main :sheet="curSheet"></Main>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped>

</style>
