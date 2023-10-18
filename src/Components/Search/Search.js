import { useEffect, useState } from 'react';
import {
  GET_ALL_LOCATIONS,
  GET_ALL_REQUESTS_BY_AREA,
} from '../../apollo-client/queries';
import { useLazyQuery, useQuery } from '@apollo/client';
import SearchResults from '../SearchResults/SearchResults';
import './Search.scss';

export default function Search({ selectOrganization }) {
  // filter by type
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [locations, setLocations] = useState([]);

  const locationsQuery = useQuery(GET_ALL_LOCATIONS);

  useEffect(() => {
    setLocations(locationsQuery.data);
  }, [locationsQuery.data]);

  const [findOrgs, { loading, error, data }] = useLazyQuery(
    GET_ALL_REQUESTS_BY_AREA,
  );

  

  return (
    <div className='search-section'>
      <form
        className='search-bar'
        onSubmit={e => {
          document.querySelector('.search-bar').reportValidity();
          e.preventDefault();
          findOrgs({ variables: { city, state } });
        }}
      >
        <input
          type='text'
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder='City (optional)'
        />
        <input
          type='text'
          value={state}
          onChange={e => setState(e.target.value)}
          placeholder='State'
          required
        />
        <label htmlFor='filter'>Filter Requests by</label>
        <select
          id='filter'
          onChange={e => {
            setSearchFilter(e.target.value);
          }}
        >
          <option value=''>None</option>
          <option value='food'>Food</option>
          <option value='language'>Language</option>
          <option value='legal'>Legal</option>
          <option value='medical'>Medical</option>
          <option value='other'>Other</option>
        </select>
        <button>Find</button>
      </form>
      <SearchResults
        searchFilter={searchFilter}
        selectOrganization={selectOrganization}
        data={data}
        loading={loading}
        error={error}
      />
    </div>
  );
}
