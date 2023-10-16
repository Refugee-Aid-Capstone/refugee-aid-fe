import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { ApolloLink } from "@apollo/client/core";

const httpLink = createHttpLink({
  uri: 'https://refugee-aid-capstone-be-fb1ab84cf89d.herokuapp.com/graphql',
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

