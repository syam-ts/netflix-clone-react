import React, { useState } from 'react'
import axios from '../src/axios.ts'
import '../public/style/row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/"

interface RowProps {
    title: string,
    fetchUrl: string,
    isLargeRow: boolean
}

interface Movie {
    id: number;
    name?: string;
    title?: string;
    original_name?: string;
    poster_path: string;
    backdrop_path: string;
}

const Row: React.FC<RowProps> = ({ title, fetchUrl , isLargeRow }) => {

    var [movies, setMovies] = useState<Movie []>([])
    const [trailerUrl, setTrailerUrl] = useState(" ")

    useEffect: React.useEffect(() => {
        async function fetchData() {
            var request = await axios.get(fetchUrl) 
            setMovies(request.data.results)
            return request
        }

        fetchData()
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

            autoplay: 1
        }
    }

    const handleClick = (movie: Movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            const movieName = movie.name || movie.title || movie.original_name || "";
            movieTrailer(movieName)
                .then((url: string) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v') ?? '');
                })
                .catch((error: any) => {
                    console.error('Error fetching trailer:', error);
                });
        }
    };

    // console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className={`row_posters`}>

                {movies.map(movie => (
                    <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow ? 
                            movie.poster_path : 
                            movie.backdrop_path}`} 
                            alt={movie.name}  />
                   ))}
            </div>
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}
                                      
export default Row