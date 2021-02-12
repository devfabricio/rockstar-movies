export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  genres?: Genre[]
  id: number
  homepage?: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies?: ProductionCompany[]
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieList {
  page: number,
  results: Movie[]
  total_pages: number,
  total_results: number
}
