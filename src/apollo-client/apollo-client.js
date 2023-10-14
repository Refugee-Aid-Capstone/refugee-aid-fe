import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://4f71dde4-4ca6-4a29-b363-5b329b3036f0.mock.pstmn.io/graphql',
  cache: new InMemoryCache
})

