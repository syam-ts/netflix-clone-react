 import './App.css'
import Row from './Row.tsx'
import request from './request.ts'

function App() { 

  return (
    <div className="App">
       <h1>Netflix-clone</h1>
       <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
       <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals}/>
    </div>
  )
}

export default App
