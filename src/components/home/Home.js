import React, {useEffect} from 'react'
import MovieListing from '../movieListing/MovieListing';
import MovieApi from '../../common/api/MovieAPI'
import { APIKey } from '../../common/api/MovieAPIKey'
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/MovieSlice';

function Home() {
  
  const movieText = 'Harry';
  const dispatch = useDispatch(); 
  
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi
      .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("Err :", err)
      });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, [dispatch]);

  return (
    <div>
      <div className='banner-img'>
        <MovieListing/>
      </div>
    </div>
  )
}

export default Home