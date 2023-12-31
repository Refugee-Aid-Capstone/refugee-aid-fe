import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_LOCATIONS } from '../../apollo-client/queries';
import { useCombobox } from 'downshift';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';
import './DropDown.scss';

export default function DropDown({ setSearchLocation }) {
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_LOCATIONS);
  const [selectedItem, setSelectedItem] = useState('');
  const navigate = useNavigate();

  const { getInputProps, getMenuProps, getItemProps, highlightedIndex } =
    useCombobox({
      items: autocompleteSuggestions,
      onInputValueChange: ({ inputValue }) => {
        if (inputValue === '') {
          setAutocompleteSuggestions([]);
          return;
        }

        let suggestions = [];

        if (data) {
          suggestions = data.locations
            .filter(location =>
              location.city.toLowerCase().includes(inputValue.toLowerCase()),
            )
            .map(location => `${location.city}, ${location.state}`)
            .slice(0, 5);

          suggestions.forEach(location => {
            const [city] = location.split(', ');

            if (inputValue.toLowerCase() === city.toLowerCase()) {
              suggestions = [];
            }
          });
        }

        setAutocompleteSuggestions(suggestions);
      },
      selectedItem,
      onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
        const [city, state] = newSelectedItem.split(', ');

        setSearchLocation(city, state);
        setSelectedItem(city);
      },
    });

  if (error) {
    navigate('/error500');
    return null;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <input
        className='city-input'
        {...getInputProps({
          'aria-expanded': autocompleteSuggestions.length > 0,
          'aria-label': 'Search for a place on the map',
          autoFocus: true,
          inputMode: 'search',
          placeholder: 'City (optional)',
          type: 'search',
        })}
      />
      <ul
        className='suggestion-dropdown'
        {...getMenuProps({
          'aria-label': 'Autocomplete suggestions',
        })}
      >
        {autocompleteSuggestions.length > 0 &&
          autocompleteSuggestions.map((location, index) => (
            <li
              data-highlighted={index === highlightedIndex}
              className='suggestion'
              key={`suggestion-${index}`}
              {...getItemProps({
                item: location,
                index,
              })}
            >
              {location}
            </li>
          ))}
      </ul>
    </>
  );
}


DropDown.propTypes = {
  setSearchLocation: PropTypes.func.isRequired
}