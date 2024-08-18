import "./App.css";
import Row from "./Row.tsx";
import request from "./request.ts";

function App() {
  return (
    <div className="App">
      <h1>Netflix-clone</h1>
      <Row 
      title="Netflix Originals"
       fetchUrl={request.fetchNetflixOriginals} 
       isLargeRow={true}
       />
      <Row title="Trending" fetchUrl={request.fetchTreding} isLargeRow={false} />
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
