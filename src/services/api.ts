import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export const imgBaseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'

export default api
