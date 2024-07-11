import { gql } from "@apollo/client";

export const GET_CHARACTERS_BY_PAGE_AND_NAME = gql`
  query GetCharactersByPageAndName($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
      }
      results {
        id
        name
        gender
        status
        image
      }
    }
  }
`;
