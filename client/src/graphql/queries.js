import { gql } from "apollo-boost";

const COMMENTS_QUERY = gql`
  {
    comments {
      id
      body
    }
  }
`;

export { COMMENTS_QUERY };
