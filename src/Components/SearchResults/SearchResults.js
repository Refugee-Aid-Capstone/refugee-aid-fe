import { useState, useEffect } from 'react';
import RequestCard from '../RequestCard/RequestCard';
import Spinner from '../Spinner/Spinner';
import './SearchResults.scss';
import PropTypes from 'prop-types';


export default function SearchResults({
  selectOrganization,
  data,
  loading,
  error,
  searchFilter,
}) {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    let results = data
      ? data.aidRequests.filter(request => request.status === 'active')
      : [];

    if (searchFilter) {
      results = results.filter(
        aidRequest => aidRequest.aidType === searchFilter,
      );
    }

    setSearchResults(results);
  }, [data, searchFilter]);

  const cards = searchResults.map(request => (
    <RequestCard
      key={request.id}
      selectOrganization={selectOrganization}
      request={request}
    />
  ));

  return (
    <div className='search-results'>
      {loading && <Spinner />}
      {error && error}
      {searchResults.length ? cards : <p>Start by inputting a location!</p>}
    </div>
  );
}

SearchResults.propTypes = {
  selectOrganization: PropTypes.func,
  searchFilter: PropTypes.string,
}