import { makeExecutableSchema } from "graphql-tools";
import { graphql } from "graphql";
import resolvers from "../src/resolvers";
import typeDefs from "../src/schema";
import models from "../models";

const comments = [
  { id: "1", body: "The pillows is pure nostalgic" },
  { id: "2", body: "Hajime no ippo is the best anime" }
];

describe("Schema", () => {
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  test("Query comments", async () => {
    await models.Comment.bulkCreate(comments);
    const query = `
      {
        comments {
          id
          body
        }
      }
    `;
    const { data } = await graphql(schema, query, null, { models });

    expect(data.comments.length).toEqual(comments.length);
    expect(data.comments).toEqual(comments);
  });

  test("Create comment", async () => {
    const query = `
      mutation {
        createComment(
          body: "Nujabes is the best"
        ) {
          body
        }
      }
    `;

    const { data } = await graphql(schema, query, null, { models });
    expect(data.createComment).toEqual({ body: "Nujabes is the best" });
  });

  test("Delete comment", async () => {
    const query = `
      mutation {
        deleteComment(
          id: 1
        ) {
          id
        }
      }
    `;

    const { data } = await graphql(schema, query, null, { models });
    expect(data.deleteComment.id).toEqual("1");
  });
});
