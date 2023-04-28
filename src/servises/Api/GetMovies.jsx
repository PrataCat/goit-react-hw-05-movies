import axios from 'axios';

const API_KEY = 'dcb571cd23b92080c89a6cccb7d6e9ea';
const MAIN_URL = 'https://api.themoviedb.org/3';

const MOVIE_BY_WORD_ENDPOINT = '/search/movie';

export const GetMovies = async keyWord => {
  const URL = `${MAIN_URL}${MOVIE_BY_WORD_ENDPOINT}?api_key=${API_KEY}&query=${keyWord}&page=1`;

  const response = await axios.get(URL);

  return response.data.results;
};

export default GetMovies;
