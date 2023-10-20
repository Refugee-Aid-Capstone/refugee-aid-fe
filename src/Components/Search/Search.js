import { useState } from 'react';
import {
  GET_ALL_REQUESTS_BY_AREA,
} from '../../apollo-client/queries';
import { useLazyQuery } from '@apollo/client';
import SearchResults from '../SearchResults/SearchResults';
import './Search.scss';

export default function Search({ selectOrganization }) {
  // filter by type
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const [findOrgs, { loading, error, data }] = useLazyQuery(
    GET_ALL_REQUESTS_BY_AREA,
  );

  return (
    <div className='search-section'>
      <form className='search-bar' onSubmit={e => {
        document.querySelector('.search-bar').reportValidity()
        e.preventDefault()
        findOrgs({ variables: { city, state } })
      }}>
        <input
          type='text'
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder='City'
          required
        />
        <input
          type='text'
          value={state}
          onChange={e => setState(e.target.value)}
          placeholder='State'
          required
        />
        <button className="find-button"> Find</button>
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
