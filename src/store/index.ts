import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'

interface State {
  username: string,
  userImg: string
}

const store = createStore<State>({
  state: {
    username: '沉默的低语',
    userImg: 'https://p3.music.126.net/YsWpOmNBMI2zWnqRs0X2bA==/18502581674220647.jpg?param=300y300'
  }
})

export {
  store
}