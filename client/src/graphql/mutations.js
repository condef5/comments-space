import { gql } from "apollo-boost";

const CREATE_COMMENT = gql`
  mutation CREATE_COMMENT($body: String!) {
    createComment(body: $body) {
      id
      body
    }
  }
`;

const DELETE_COMMENT = gql`
  mutation DELETE_COMMENT($id: ID!) {
    deleteComment(id: $id) {
      id
    }
  }
`;

export { CREATE_COMMENT, DELETE_COMMENT };
