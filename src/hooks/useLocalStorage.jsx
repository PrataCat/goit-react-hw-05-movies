import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const KEY_MOVIES = 'movies';
const KEY_KEYWORD = 'keyword';

const useLocalStorageMovies = defaultValue => {
  const [data, setData] = useState(() => {
    return JSON.parse(window.localStorage.getItem(KEY_MOVIES)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(KEY_MOVIES, JSON.stringify(data));
  }, [data]);

  return [data, setData];
};

const useLocalStorageKeyword = defaultValue => {
  const [data, setData] = useState(() => {
    return JSON.parse(window.localStorage.getItem(KEY_KEYWORD)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(KEY_KEYWORD, JSON.stringify(data));
  }, [data]);

  return [data, setData];
};

useLocalStorageMovies.propTypes = {
  defaultValue: PropTypes.array,
};
useLocalStorageKeyword.propTypes = {
  defaultValue: PropTypes.string,
};

export { useLocalStorageMovies, useLocalStorageKeyword };
