import { gql } from '@apollo/client';

export const GET_ONE_ORG = gql`
  query getOneOrg($id: ID!) {
    organization(id: $id) {
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
        organizationId
        aidType
        language
        description
        status
      }
    }
  }
`;

export const GET_ALL_ORGS_BY_AREA = gql`
  query getAllOrgs($city: String!, $state: String!) {
    organizations(city: $city, state: $state) {
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
        organizationId
        aidType
        language
        description
        status
      }
    }
  }
`;

export const GET_ALL_REQUESTS_BY_AREA = gql`
  query getAllRequestsByArea($city: String!, $state: String!) {
    aidRequests(city: $city, state: $state) {
      id
      organizationId
      aidType
      language
      description
      status
      organization {
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
      }
    }
  }
`;
