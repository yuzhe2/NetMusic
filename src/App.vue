<script setup lang="ts">
import Header from './views/Header/index.vue'
import Aside from './views/Sidebar/index.vue'
import Main from './views/Main/index.vue'
import Footer from './views/Footer/index.vue'
import { SheetItem } from './libs/aside'
import { ref } from 'vue'
import { useStore } from 'vuex'

import { musicData, sheetList } from './utils/data'
import { SongItem } from './libs/song'

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
  <div class="container">
    <aside>
    <Aside @changeSheet="handleChangeSheet" :sheetList="sheetList"></Aside>
    </aside>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  position: absolute;
  top: 52px;
  bottom: 72px;
  width: 100%;

  .main {
    flex: 1;
  }
}
</style>
