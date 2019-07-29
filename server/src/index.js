import "dotenv/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
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
server.applyMiddleware({ app });

app.listen({ port }, () => {
  console.log(`Server is running on localhost:${port}`);
});
