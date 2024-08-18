import React, { useState, useEffect } from 'react'
import axios from '../src/axios.ts'
import requests from "../src/request.ts";

interface Movie {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string,
    title: string,
    original_name: string
}

 
const Banner: React.FC  = () => {

    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect: React.useEffect(() => {
        async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals)
          setMovie(
              request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1)
              ]
          )
            return request
        }
        fetchData()
    }, [])

    console.log(movie)

   return (
       <header className="banner"
       style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center"
       }}
       >
          <div className="banner_contents">
            <h1>
            {movie?.title || movie?.name || movie?.original_name}     
           </h1>
          </div>
       </header>
   )
}

export default Banner