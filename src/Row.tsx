import React, { useState } from 'react'
import axios from './axios.ts'


const base_url = "https://image.tmdb.org/t/p/original/"

interface RowProps {
    title: string,
    fetchUrl: {}
}

const Row: React.FC<RowProps> = ({ title, fetchUrl }) => {

    const [movies, setMovies] = useState([])

    useEffect: React.useEffect(() => {
         async function fetchData()  {
            const request = await axios.get(fetchUrl)
            console.table(request.data.results)
           setMovies(request.data.results)
            return request
        }
        
      fetchData()
    }, [fetchUrl])

    console.log(movies)

  return (
    <div className="row"> 
       <h2>{title }</h2>  

       <div className="row_posters">
         
        {movies.map(movie => (
            <img src={`${base_url}${movie.poster_path}`} alt={movie.name} className="src" />
        ))}
       </div>
    </div>
  )
}

export default Row