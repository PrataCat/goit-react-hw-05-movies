import axios from 'axios';

const API_KEY = 'dcb571cd23b92080c89a6cccb7d6e9ea';
const MAIN_URL = 'https://api.themoviedb.org/3/trending/movie/day';

export const GetTrending = async () => {
  const URL = `${MAIN_URL}?api_key=${API_KEY}`;

  const response = await axios.get(URL);

  return response.data.results;
};

export default GetTrending;
