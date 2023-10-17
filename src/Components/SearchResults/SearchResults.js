import { useState, useEffect } from 'react';
import RequestCard from '../RequestCard/RequestCard';
import Spinner from '../Spinner/Spinner';
import './SearchResults.scss';

export default function SearchResults({
  selectOrganization,
  data,
  loading,
  error,
  searchFilter,
}) {
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(true);

  useEffect(() => {
    const noResults = data?.aidRequests.length ? false : true;
    setNoResults(noResults);

    let results = data ? data.aidRequests : [];

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
