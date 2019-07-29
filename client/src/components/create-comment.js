import React from "react";
import { Button, TextArea } from "./ui";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import styled from "styled-components";

const CREATE_COMMENT = gql`
  mutation CREATE_COMMENT($body: String!) {
    createComment(body: $body) {
      id
      body
    }
  }
`;

const WrapButton = styled.div`
  margin-top: 2em;
  text-align: right;
`;

function CreateComment({ createComment }) {
  const [comment, setComment] = React.useState("");

  function handleChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(comment);
    createComment({ body: comment });
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextArea rows="5" onChange={handleChange} value={comment} />
      <WrapButton>
        <Button type="submit" style={{ width: "150px" }}>
          Send Comment
        </Button>
      </WrapButton>
    </form>
  );
}

const withMutation = graphql(CREATE_COMMENT, {
  props: ({ mutate }) => ({
    createComment: variables => mutate({ variables })
  })
});

export default withMutation(CreateComment);
