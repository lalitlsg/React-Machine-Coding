import React from 'react';
import { useState } from 'react';
import { searchResultsFromServer } from './data';
import style from './style.module.css';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
    if (value.length === 0) {
      setSearchResults([]);
      setSelectedSuggestion(-1);
    } else {
      const currentResults = searchResultsFromServer.filter((result) => {
        const { title } = result;
        return value.length > 0 && title.startsWith(value);
      });
      setSearchResults(currentResults);
    }
  };

  const setCurrentSelecteSuggestion = (currentSelectedIndex) => {
    setSelectedSuggestion(currentSelectedIndex);
    const currentSelected = searchResults.find((el, index) => index === currentSelectedIndex);
    const { title } = currentSelected;
    setSearchText(title);
  };

  const closeSearchResults = () => {
    setSearchResults([]);
    setSelectedSuggestion(-1);
  };

  const handleKeyDown = (e) => {
    const { keyCode } = e;
    console.log(keyCode);
    switch (keyCode) {
      case 38: {
        e.preventDefault();
        if (selectedSuggestion > 0) {
          setCurrentSelecteSuggestion(selectedSuggestion - 1);
        }
        break;
      }
      case 40: {
        e.preventDefault();
        if (selectedSuggestion < searchResults.length - 1) {
          setCurrentSelecteSuggestion(selectedSuggestion + 1);
        }
        break;
      }
      case 13: {
        closeSearchResults();
        break;
      }
      default: {
      }
    }
  };

  const onSearchSuggestionClick = () => closeSearchResults();

  return (
    <div>
      <section>
        <input
          className={style.searchBar}
          type="text"
          placeholder="Search keywords (mens / womens)"
          onChange={handleChange}
          value={searchText}
          onKeyDown={handleKeyDown}
        />
      </section>
      {searchResults.length > 0 && (
        <section className={style.searchResults}>
          {searchResults.map((result, index) => (
            <div
              key={result.id}
              className={`${style.searchItem} ${index === selectedSuggestion ? style.selectedSuggestion : ''}`}
              onClick={onSearchSuggestionClick}
            >
              {result.title}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default SearchBar;
