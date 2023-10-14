import { useQuery } from "@apollo/client";

export default function SearchResults({ queryType }) {
  const { loading, error, data } = useQuery(queryType);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.requests.map(
    ({ id }) => (
      <article key={id}>
       {id}
      </article>
    ),
  );
  // ask backend for the org name in allrequests nearby
}
