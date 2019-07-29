import { gql } from "apollo-server-express";

export default gql`
  scalar Date

  type Query {
    comments: [Comment!]!
  }

  type Mutation {
    createComment(body: String!): Comment!
    deleteComment(id: ID!): Comment!
  }

  type Comment {
    id: ID!
    body: String!
    createdAt: Date
  }
`;
