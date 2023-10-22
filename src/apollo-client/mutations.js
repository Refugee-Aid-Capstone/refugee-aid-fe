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
