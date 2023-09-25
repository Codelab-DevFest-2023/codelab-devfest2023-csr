import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MoviePage from './pages/movie/MoviePage';
import MoviesPage from './pages/movies/MoviesPage';
import HomePage from './pages/home/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movie/:movieId" element={<MoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
