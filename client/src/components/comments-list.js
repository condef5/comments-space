import React from "react";
import styled from "styled-components";
import { Button } from "./ui";
import { Delete } from "./icons";
import { graphql } from "react-apollo";
import { DELETE_COMMENT } from "../graphql/mutations";
import { COMMENTS_QUERY } from "../graphql/queries";

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
  }),
  options: props => ({
    update: (cache, { data: { deleteComment } }) => {
      const { comments } = cache.readQuery({
        query: COMMENTS_QUERY
      });

      const updateComments = comments.filter(
        comment => comment.id !== deleteComment.id
      );

      cache.writeQuery({
        query: COMMENTS_QUERY,
        data: {
          comments: updateComments
        }
      });
    }
  })
});

export default withComments(withMutation(CommentList));
