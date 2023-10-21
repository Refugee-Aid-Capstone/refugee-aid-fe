import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_LOCATIONS } from '../../apollo-client/queries';
import './DropDown.scss';
import { useCombobox } from 'downshift';

export default function DropDown({ city, setSearchLocation }) {
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_LOCATIONS);
  const [selectedItem, setSelectedItem] = useState('')

  useEffect(() => {
    document.addEventListener('click', e => console.log(e));
  }, []);

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
              const [city, state] = location.split(', ')

              if (inputValue.toLowerCase() === city.toLowerCase()) {
                suggestions = []
              }
              
            });
        }

        setAutocompleteSuggestions(suggestions);
      },
      selectedItem,
      onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
        const [city, state] = newSelectedItem.split(', ')

        setSearchLocation(city, state);
        setSelectedItem(city)
      },
    });

  return (
    <>
      <input
        className='city-input'
        {...getInputProps({
          'aria-expanded': autocompleteSuggestions.length > 0,
          'aria-label': 'Search for a place on the map',
          'aria-labelledby': null,
          autoFocus: 'true',
          inputMode: 'search',
          placeholder: 'City (optional)',
          type: 'search',
        })}
      />
      <ul
        className='suggestion-dropdown'
        {...getMenuProps({
          'aria-label': 'Autocomplete suggestions',
          'aria-labelledby': null,
        })}
      >
        {autocompleteSuggestions.length > 0 &&
          autocompleteSuggestions.map((location, index) => {
            return (
              <li
                data-highlighted={index === highlightedIndex}
                className='suggestion'
                key={`suggestion-${index}`}
                {...getItemProps({
                  location,
                  index,
                })}
              >
                {location}
              </li>
            );
          })}
      </ul>
    </>
  );
}
