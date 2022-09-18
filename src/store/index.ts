import { createStore, Store } from 'vuex'

import { SongItem } from '../libs/song'

interface State {
  username: string,
  userImg: string,
  song: SongItem,
  list: SongItem[]
}

const store = createStore<State>({
  state: {
    username: '沉默的低语',
    userImg: 'https://p3.music.126.net/YsWpOmNBMI2zWnqRs0X2bA==/18502581674220647.jpg?param=300y300',
    song: {
      title: '千百度',
      singer: '许嵩',
      album: '苏格拉没有底',
      time: '03.16',
      url: 'https://music.163.com/song/media/outer/url?id=759852.mp3',
      img: 'http://p2.music.126.net/vM-5UTVh7ri0XQ3tS90-jQ==/2484896278797452.jpg?param=300y300'
    },
    list: []
  },
  mutations: {
    // 更新播放的歌曲
    switchSong (state: State, song: SongItem) {
      state.song = song
    }
  }
})

export {
  store
}