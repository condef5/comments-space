import React from "react";
import CommentList from "./comments-list";
import CreateComment from "./create-comment";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fdfdfd;
    margin: 0;
    color: rgba(0,0,0,0.87);
    font-family: 'Roboto', sans-serif;
  }
`;

const Main = styled.main`
  max-width: 750px;
  margin: 2em auto;
  padding: 1em;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
  transition: box-shadow 0.3s;
  border-radius: 6px;
  @media (max-width: 768px) {
    margin: 2em;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <CreateComment />
        <CommentList />
      </Main>
    </>
  );
}

export default App;
