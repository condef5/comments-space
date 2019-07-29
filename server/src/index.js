import "dotenv/config";
import express from "express";
import { ApolloServer, gql } from "apollo-server";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import models from "../models";

const port = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { models }
});

server.listen({ port }, () => {
  console.log(`Server is running on localhost:${port}`);
});
