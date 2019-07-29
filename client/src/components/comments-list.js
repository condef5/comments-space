import React from "react";
import styled from "styled-components";
import { Button } from "./ui";
import { Delete } from "./icons";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const COMMENTS_QUERY = gql`
  {
    comments {
      id
      body
    }
  }
`;

const DELETE_COMMENT = gql`
  mutation DELETE_COMMENT($id: ID!) {
    deleteComment(id: $id) {
      id
    }
  }
`;

const Comment = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1em;
  padding: 1em 0;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

function CommentList({ data: { loading, comments }, deleteComment }) {
  if (loading) return "loading...";

  return (
    <>
      <h2>Comments</h2>
      <List>
        {comments.map(comment => (
          <Comment key={comment.id}>
            <div>{comment.body}</div>
            <Button
              style={{ width: "45px" }}
              onClick={() => deleteComment({ id: comment.id })}
            >
              <Delete width="20px" />
            </Button>
          </Comment>
        ))}
      </List>
    </>
  );
}

const withComments = graphql(COMMENTS_QUERY);

const withMutation = graphql(DELETE_COMMENT, {
  props: ({ mutate }) => ({
    deleteComment: variables => mutate({ variables })
  })
});

export default withComments(withMutation(CommentList));
