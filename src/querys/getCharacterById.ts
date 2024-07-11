import { gql } from "@apollo/client";

export const GET_CHARACTER_BY_ID = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      gender
      origin {
        name
      }
      location {
        name
      }
      episode {
        name
      }
    }
  }
`;
