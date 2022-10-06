<script setup lang="ts">
import Header from './views/Header/index.vue'
import Aside from './views/Sidebar/index.vue'
import Main from './views/Main/index.vue'
import Footer from './views/Footer/index.vue'

import { useStore } from 'vuex'

import { SheetItem } from './libs/aside'
import { SongItem } from './libs/song'

import { useState } from './utils/store'

const { sheetList } = useState(['sheetList'])

const store = useStore()

// 切换当前播放的歌单(用于切歌,切歌是在当前播放的歌单中切换的)
function handleChangeSheet (item: any) {

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
