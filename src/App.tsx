import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/home/HomePage';
import MovieDetailsPage from './pages/movies/MovieDetailsPage';
import MoviesListPage from './pages/movies/MoviesListPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesListPage />} />
          <Route path="movie/:movieId" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
