import { useState , useEffect} from 'react';
import RequestCard from '../RequestCard/RequestCard';

export default function SearchResults({selectOrganization, data, loading, error }) {
  const [cards, setCards] = useState([])
  const [noResults, setNoResults] = useState(true)

  useEffect(() => {
    const noResults = data ? false : true;
    setNoResults(noResults)

    if (data) {
      setCards(data.aidRequests.map(request => <RequestCard key={request.id} selectOrganization={selectOrganization} request={request} />));
    } else {
      setCards([])
    }
  }, [data])

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && error}
      {noResults ? <p>There are no aid oportunities here</p>: cards}
    </div>
  );
}
