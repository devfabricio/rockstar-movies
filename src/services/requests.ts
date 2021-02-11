import { MovieList } from './types'
import api from './api'
import { key } from '../api-key'

export const listMoviesByPopularity = async (): Promise<MovieList> => {
  const response = await api.get(`/discover/movie?api_key=${key}&sort_by=popularity.desc`)
  return response.data
}
