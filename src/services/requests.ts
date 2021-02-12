import { Movie, MovieList } from './types'
import api from './api'
import { key } from '../api-key'

export const listMoviesByPopularity = async (rating?: number): Promise<MovieList> => {
  let url = `/discover/movie?api_key=${key}`

  if (rating) {
    url = `${url}&vote_average.lte=${rating}&sort_by=vote_average.desc`
  } else {
    url = `${url}&sort_by=popularity.desc`
  }

  const response = await api.get(url)
  return response.data
}

export const searchMovies = async (query: string): Promise<MovieList> => {
  const response = await api.get(`/search/movie?api_key=${key}&query=${query}`)
  return response.data
}

export const getMovieDetail = async (id: string): Promise<Movie> => {
  const response = await api.get(`/movie/${id}?api_key=${key}`)
  return response.data
}
