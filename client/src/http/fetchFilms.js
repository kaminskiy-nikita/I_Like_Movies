import axios from 'axios';
import { parseMoneyAmount } from '../utils/parseMoneyAmount'

export const fetchFilms = async (searchType, queryInput, page) => {
  let query = 'https://api.themoviedb.org/3/';
    
  if (searchType === 'byName') {
    query += `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ru&page=${page}&include_adult=false&query=`;
    query += queryInput;
  } else {
    query += `movie/${searchType}?api_key=${process.env.REACT_APP_API_KEY}&language=ru&page=${page}`;
  }
  
  const response = await axios(query);
  return response;
}

export const fetchFilmInfo = async (filmId) => {
  const response = await axios(`https://api.themoviedb.org/3/movie/${filmId}?api_key=${process.env.REACT_APP_API_KEY}&language=ru`);
    const filmFromDB = response.data;
    const imgpath = 'https://image.tmdb.org/t/p/w500';
    const genres = filmFromDB.genres.map((genre) => genre.name).join(', ');

    return {
      title: filmFromDB.title,
      img: `${imgpath}${filmFromDB.poster_path}`,
      description: filmFromDB.overview,
      date: filmFromDB.release_date,
      budget: parseMoneyAmount(filmFromDB.budget),
      IMDBlink: `https://www.imdb.com/title/${filmFromDB.imdb_id}/?ref_=nv_sr_srsg_0`,
      rating: filmFromDB.vote_average,
      tagline: filmFromDB.tagline,
      genres,
    };
}
