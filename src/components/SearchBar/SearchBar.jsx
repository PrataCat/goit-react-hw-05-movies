import { toast } from 'react-toastify';
import { useState } from 'react';
import {
  SearchbarWrap,
  SearchForm,
  SearchButton,
  SearchInput,
} from './SearchBar.styled';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ changeKeyWord }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const hendleSubmit = e => {
    e.preventDefault();

    const q = e.target.lastChild.value.trim();

    if (q === '') {
      toast.info('Enter a keyword.');
      return;
    }

    changeKeyWord(q);
    setInputValue('');
  };

  return (
    <SearchbarWrap>
      <SearchForm onSubmit={hendleSubmit}>
        <SearchButton type="submit">
          <BsSearch size={20} fill="black" />
        </SearchButton>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchbarWrap>
  );
};

export default SearchBar;
