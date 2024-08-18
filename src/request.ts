const API_KEY: string = "49f42031a4352f64a67906b26c5a6c49"

interface Request {
    fetchTrending: string,
    fetchNetflixOriginals: string,
    fetchTopRated: string,
    fetchActionMovies: string,
    fetchComedyMovies: string,
    fetchHorrorMovies: string,
    fetchRomanceMovies: string, 
    fetchDocumentryMovies: string

}

const request: Request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,    
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,    
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,    
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,    
    fetchDocumentryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,    
}

export default request 