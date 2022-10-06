import { createStore } from 'vuex'
import createPersistedSatte from 'vuex-persistedstate'

import { SongItem } from '../libs/song'
import { SheetItem } from '../libs/aside'

interface State {
  username: string,
  userImg: string,
  userId: string,
  song: SongItem,
  list: SongItem[]
  isLogin: boolean,
  sheetList: SheetItem[]
}

const store = createStore<State>({
  state: {
    username: '沉默者的低语',
    userImg: 'https://p3.music.126.net/YsWpOmNBMI2zWnqRs0X2bA==/18502581674220647.jpg?param=300y300',
    userId: '',
    song: {
      title: '千百度',
      singer: '许嵩',
      album: '苏格拉没有底',
      time: '03.16',
      url: 'https://music.163.com/song/media/outer/url?id=759852.mp3',
      img: 'http://p2.music.126.net/vM-5UTVh7ri0XQ3tS90-jQ==/2484896278797452.jpg?param=300y300'
    },
    list: [],
    isLogin: false,
    sheetList: []
  },
  mutations: {
    // 更新播放的歌曲
    switchSong (state: State, song: SongItem) {
      state.song = song
    },
    // 更新正在播放的歌单
    switchSheet (state: State, musicData: SongItem[]) {
      state.list = musicData
    },
    // 更新用户的歌单
    updateSheetList (state: State, sheetList: SheetItem[]) {
      state.sheetList = sheetList
    },
    // 根据指令切换到下一首或者上一首
    changeTypeSong (state: State, type: string) {
      let idx = state.list.findIndex(val => val.url == state.song.url)
      if (type === 'prev') {
        idx = idx === 0 ? state.list.length - 1 : idx - 1
      } else {
        idx = idx === state.list.length - 1 ? 0 : idx + 1
      }
      state.song = state.list[idx]
    },
    changeLoginStatus (state: State, flag: boolean) {
      state.isLogin = flag
    }
  },
  plugins: [createPersistedSatte()]
})

export {
  store
}