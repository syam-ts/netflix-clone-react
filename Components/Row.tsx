import React, { useState } from 'react'
import axios from '../src/axios.ts'
import '../public/style/row.css'

const base_url = "https://image.tmdb.org/t/p/original/"

interface RowProps {
    title: string,
    fetchUrl: {},
    isLargeRow: boolean
}

interface Movie {
    id: number, 
    name: string,
    poster_path: string,
    backdrop_path: string
}

const Row: React.FC<RowProps> = ({ title, fetchUrl , isLargeRow }) => {

    const [movies, setMovies] = useState<Movie []>([])

    useEffect: React.useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl) 
            setMovies(request.data.results)
            return request
        }

        fetchData()
    }, [fetchUrl])

    // console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className={`row_posters`}>

                {movies.map(movie => (
                    <img
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow ? 
                            movie.poster_path : 
                            movie.backdrop_path}`} 
                            alt={movie.name}  />
                ))}
            </div>
        </div>
    )
}

export default Row