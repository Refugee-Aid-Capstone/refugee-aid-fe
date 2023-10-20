import { useEffect, useReducer, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_LOCATIONS } from '../../apollo-client/queries';
import './DropDown.scss'

export default function DropDown({ city, setSearchLocation }) {
  const [selection, setSelection] = useState('');
  const [filter, setFilter] = useState('');
  const { loading, error, data } = useQuery(GET_ALL_LOCATIONS);


  useEffect(() => {
    setFilter(city);
  }, [city]);

  if (loading || error) return;
  const locationOptions = data.locations
    .filter(location => location.city.toLowerCase().includes(filter.toLowerCase()))
    .map(location => (
      <li className='suggestion' key={location.city} value={`${location.city} ${location.state}`}>
        {location.city}, {location.state}
      </li>
    ));

  return (
    <ul className='suggestion-dropdown'
      // onChange={e => {
      //   setSelection(e.target.value);
      //   setSearchLocation(e.target.value);
      // }}
      // value={selection}
    >
      {locationOptions.slice(0, 5)}
    </ul>
  );
}
