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

const ButtonIcon = styled(Button)`
  width: 150px;
`;

function CreateComment({ createComment }) {
  const [comment, setComment] = React.useState("");

  function handleChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (comment === "") return;
    createComment({ body: comment });
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextArea rows="5" onChange={handleChange} value={comment} />
      <WrapButton>
        <ButtonIcon type="submit" style={{}}>
          Send Comment
        </ButtonIcon>
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
