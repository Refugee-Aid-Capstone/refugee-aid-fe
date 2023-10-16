import { useEffect, useState } from 'react';
import {
  GET_ALL_ORGS_BY_AREA,
  GET_ALL_REQUESTS_BY_AREA,
} from '../../apollo-client/queries';
import { useLazyQuery } from '@apollo/client';
import SearchResults from '../SearchResults/SearchResults';
import './Search.scss';

export default function Search({ selectOrganization }) {
  // filter by type
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [results, setResults] = useState([]);

  const [findOrgs, { loading, error, data }] = useLazyQuery(
    GET_ALL_REQUESTS_BY_AREA,
    {
      variables: {
        city,
        state,
      },
    },
  );

  return (
    <div className='search-section'>
      <form className='search-bar'>
        <input
          type='text'
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder='City'
        />
        <input
          type='text'
          value={state}
          onChange={e => setState(e.target.value)}
          placeholder='State'
        />
        <button
          onClick={e => {
            e.preventDefault();
            findOrgs();
          }}
        >
          Find
        </button>
        {/* <select>
          <option value='filter1'>Filter 1</option>
          <option value='filter2'>Filter 2</option>
          <option value='filter3'>Filter 3</option>
        </select> */}
      </form>
      <SearchResults
        selectOrganization={selectOrganization}
        data={data}
        loading={loading}
        error={error}
      />
    </div>
  );
}
