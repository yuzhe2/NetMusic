import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5173/api',
  timeout: 10000
})

export default instance