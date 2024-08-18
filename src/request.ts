const API_KEY: string = "49f42031a4352f64a67906b26c5a6c49"

interface Request {
    fetchTreding: string,
    fetchNetflixOriginals: string,
    fetchTopRated: string,
    fetchActionMovies: string,
    fetchComedyMovies: string,
    fetchHorrorMovies: string

}

const request: Request = {
    fetchTreding: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,    
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,    
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,    
}

export default request 