 import './App.css'
import Row from './Row.tsx'
import request from './request.ts'

function App() { 

  return (
    <div className="App">
       <h1>Netflix-clone</h1>
       <Row title="Trending" fetchUrl={request.fetchTreding}/>
       <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
       <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals}/>
       <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
       <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
       <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      </div>
  )
}

export default App
