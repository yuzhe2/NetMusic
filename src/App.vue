<script setup lang="ts">
import Header from './views/Header/index.vue'
import Aside from './views/Sidebar/index.vue'
import Main from './views/Main/index.vue'
import Footer from './views/Footer/index.vue'
import { SheetItem } from './libs/aside'
import { ref } from 'vue'
import { useStore } from 'vuex'

import musicData from './utils/data'
import { SongItem } from './libs/song'

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

const store = useStore()
store.commit('switchSheet', musicData[0].data)

let curSheet = ref<SheetItem>(sheetList[0]),
    curMusicData = ref<SongItem[]>(musicData[0].data)
function handleChangeSheet (item: any) {
  curSheet.value = item
  let id = curSheet.value.id,
    curData = musicData.find(val => val.id === id)
    
  curMusicData.value = curData?.data as any
  store.commit('switchSheet', curData?.data)
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
    <Main :sheet="curSheet" :musicData="curMusicData"></Main>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped>

</style>
