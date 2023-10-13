import { useQuery } from "@apollo/client";

export default function SearchResults({ queryType }) {
  const { loading, error, data } = useQuery(queryType);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.requests.map(
    ({ id, organization_id, organization_name, type, description, status }) => (
      <article key={id}>
        <h3>{type}</h3>
        <p id={organization_id}> {organization_name}</p>
        <p>{description}</p>
        <p>{status}</p>
      </article>
    ),
  );
  // ask backend for the org name in allrequests nearby
}
