import "dotenv/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import models from "../models";

const port = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

const app = express();
app.use(cors());
server.applyMiddleware({ app });

app.listen({ port }, () => {
  console.log(`Server is running on http://localhost:${port}/graphql ʕ￫ᴥ￩ʔ`);
});
