// import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

// export const client = new ApolloClient({
//   uri: 'https://4f71dde4-4ca6-4a29-b363-5b329b3036f0.mock.pstmn.io/graphql',
//   cache: new InMemoryCache
// })

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { ApolloLink } from "@apollo/client/core";

const httpLink = createHttpLink({
  uri: 'https://4f71dde4-4ca6-4a29-b363-5b329b3036f0.mock.pstmn.io/graphql',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((error) => {
      console.error('GraphQL Error:', error);
    });
  }
  if (networkError && networkError.statusCode === 500) {
    console.log('Network Error:', networkError);
  }
});

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

