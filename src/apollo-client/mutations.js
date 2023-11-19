import { gql } from "@apollo/client";

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

export const CREATE_AID_REQUEST = gql`
  mutation createAidRequest($aidType: String!, $description: String!, $organizationId: ID!) {
    createAidRequest(aidType: $aidType, description: $description, organizationId: $organizationId) {
      id
      aidType
      description
      organization {
        id
        name
      }
    }
  }
`;
