import { gql } from "@apollo/client";

// Mutation for updating an aid request

export const UPDATE_AID_REQUEST = gql`
  mutation updateAidRequest($id: ID!, $status: String) {
    updateAidRequest(id: $id, status: $status) {
      id
      status
      organization {
        name
        id
      }
    }
  }
`;

// Mutation for creating a new aid request

export const CREATE_AID_REQUEST = gql`
  mutation createAidRequest($aidType: String!, $description: String!, $organizationId: Int!, $language: String) {
    createAidRequest(aidType: $aidType, description: $description, organizationId: $organizationId, language: $language) {
      id
      aidType
      description
      language
      organization {
        id
        name
      }
    }
  }
`;


