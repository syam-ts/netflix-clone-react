import "./App.css";
import Row from "../Components/Row.tsx";
import request from "./request.ts";
import Banner from '../Components/Banner.tsx'
import Nav from '../Components/Nav.tsx'

function App() {
  return (
    <div className="app">

     <Nav />

      <Banner />
      <Row 
      title="NETFLIX ORIGINALS"
       fetchUrl={request.fetchNetflixOriginals} 
       isLargeRow
       />
      <Row title="Trending" fetchUrl={request.fetchTrending} isLargeRow={false} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} isLargeRow={false} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} isLargeRow={false} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} isLargeRow={false} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} isLargeRow={false} />
      <Row title="Romantic Movies" fetchUrl={request.fetchRomanceMovies} isLargeRow={false} />
      <Row title="Documentry Movies" fetchUrl={request.fetchDocumentryMovies} isLargeRow={false} />
    </div>
  );
}

export default App;
