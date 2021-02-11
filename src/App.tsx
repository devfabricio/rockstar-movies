import React, { useEffect } from 'react'
import { listMoviesByPopularity } from './services/requests'

const App = () => {
  useEffect(() => {
    listMoviesByPopularity()
      .then(data => console.log(data))
      .catch(error => console.log(error))
  })
  return (
    <div className="App">
      This is my rockstar movies baby
    </div>
  )
}

export default App
