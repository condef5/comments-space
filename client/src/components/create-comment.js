import React from "react";
import { Button, TextArea } from "./ui";
import { graphql } from "react-apollo";
import styled from "styled-components";
import { CREATE_COMMENT } from "../graphql/mutations";
import { COMMENTS_QUERY } from "../graphql/queries";

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
  }),
  options: props => ({
    update: (cache, { data: { createComment } }) => {
      const { comments } = cache.readQuery({
        query: COMMENTS_QUERY
      });

      cache.writeQuery({
        query: COMMENTS_QUERY,
        data: {
          comments: [...comments, createComment]
        }
      });
    }
  })
});

export default withMutation(CreateComment);
