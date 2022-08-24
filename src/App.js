
import './App.css';
import { BrowserRouter,Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/movieList';
import MovieDetail from './pages/movieDetail/movieDetail'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      
        <Header />
       <Routes>
     
     <Route index element={<Home />} />
     <Route exact path="movie/:id" element={<MovieDetail />} />
     <Route exact path="movies/:type" element={<MovieList />} />
     {/* <Route path="*" element={<NoPage />} /> */}
  
 </Routes>
     
   
    </BrowserRouter>
    </div>
  );
}

export default App;
