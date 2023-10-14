import { gql } from '@apollo/client';

export const GET_ORG_REQUESTS = gql`
  query {
    organization(id: 1) {
      id
      name
      contactPhone
      contactEmail
      streetAddress
      website
      city
      state
      zip
      latitude
      longitude
      shareAddress
      sharePhone
      shareEmail
      aidRequests {
        id
        orgnizationId
        aidType
        language
        description
        status
      }
    }
  }
`;
