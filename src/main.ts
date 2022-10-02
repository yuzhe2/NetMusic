import { createApp } from 'vue'
import { store } from './store'
import { router } from './router'
import './style.css'
import './assets/font/iconfont.css'
import App from './App.vue'

document.documentElement.setAttribute('data-theme', 'pink')

createApp(App).use(store).use(router).mount('#app')
