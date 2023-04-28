import axios from 'axios';

const API_KEY = 'dcb571cd23b92080c89a6cccb7d6e9ea';
const MAIN_URL = 'https://api.themoviedb.org/3';

export const GetMovieDetails = async movieId => {
  const URL = `${MAIN_URL}/movie/${movieId}?api_key=${API_KEY}`;

  const response = await axios.get(URL);

  return response.data;
};

export default GetMovieDetails;
