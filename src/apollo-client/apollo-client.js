import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'backendserver',
  cache: new InMemoryCache
})

