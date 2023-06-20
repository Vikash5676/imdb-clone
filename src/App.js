import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Movie from './components/Movie';
import Movielist from './components/Movielist';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie/>}></Route>
                <Route path="movies/:type" element={<Movielist/>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
