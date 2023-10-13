import { gql } from "@apollo/client";

export const GET_ORG_REQUESTS = gql`
  query {
    organization(id:${id}) {
      id
      name
      requests {
        id
        organization_id
        type
        language
        description
        status
      }
    }

  }`