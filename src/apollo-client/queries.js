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

export const GET_AID_REQUESTS_WITH_ORG_NAME = gql`
  query {
    aidRequests(city: "Cincinatti", state: "OH") {
      id
      aidType
      status
      organization {
        name
      }
    }
  }
`;

export const TEST_ERROR_500 = gql`
  query TestError500 {
    someFieldOrQueryThatWillCauseAnError
  }
`;