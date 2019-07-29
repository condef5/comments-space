import React from "react";
import { render } from "react-dom";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import App from "./components/App";
import { register } from "./service-worker";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL || "http://localhost:4000"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const $root = document.getElementById("root");

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  $root
);

register();
