// components/SearchBar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWord, addToHistory } from '../actions/wordActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [word, setWord] = useState('');

  const handleSearch = () => {
    if (word) {
      dispatch(fetchWord(word));
      dispatch(addToHistory(word));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
