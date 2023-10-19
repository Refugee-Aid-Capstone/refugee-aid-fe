import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_LOCATIONS } from '../../apollo-client/queries';

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
      <option key={location.city} value={`${location.city} ${location.state}`}>
        {location.city}, {location.state}
      </option>
    ));

  return (
    <select
      onChange={e => {
        setSelection(e.target.value);
        setSearchLocation(e.target.value);
      }}
      value={selection}
    >
      {locationOptions.slice(0, 5)}
    </select>
  );
}
