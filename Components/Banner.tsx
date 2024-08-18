import React, { useState, useEffect } from 'react'
import axios from '../src/axios.ts'
import requests from "../src/request.ts"
import '../public/style/banner.css'

interface Movie {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string,
    title: string,
    original_name: string,
    overview: string
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


    //used in the banner description to make it short(...) if it is lengthier
    function truncate(str: any, n: number) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

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
            <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner_buttons">
                <button className="banner_button"> Play </button>
                <button className="banner_button"> My List </button>
            </div>
            
            <h1 className="banner_description"> {truncate(movie?.overview, 150)} </h1>

          </div>
          <div className="banner_fadeBottom " />
       </header>
   )
}

export default Banner