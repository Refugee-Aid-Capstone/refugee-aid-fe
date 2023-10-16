import { useState , useEffect} from 'react';
import RequestCard from '../RequestCard/RequestCard';
import Spinner from '../Spinner/Spinner'
import './SearchResults.scss'

export default function SearchResults({selectOrganization, data, loading, error }) {
  const [cards, setCards] = useState([])
  const [noResults, setNoResults] = useState(true)

  useEffect(() => {
    const noResults = data?.aidRequests.length ? false : true;
    setNoResults(noResults)

    if (data) {
      setCards(data.aidRequests.map(request => <RequestCard key={request.id} selectOrganization={selectOrganization} request={request} />));
    } else {
      setCards([])
    }
  }, [data])

  return (
    <div className='search-results'>
      {loading && <Spinner/>}
      {error && error}
      {cards.length ? cards: <p>Start by inputting a location!</p>}
    </div>
  );
}
