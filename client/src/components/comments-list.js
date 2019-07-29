import React from "react";
import styled from "styled-components";
import { graphql } from "react-apollo";
import { AnimatePresence } from "framer-motion";
import Comment from "./comment";
import { PulseLoader } from "halogenium";
import { DELETE_COMMENT } from "../graphql/mutations";
import { COMMENTS_QUERY } from "../graphql/queries";

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const Spinner = styled(PulseLoader)`
  text-align: center;
`;

function CommentList({ data: { loading, comments }, deleteComment }) {
  return (
    <>
      <h2>Comments</h2>
      <List>
        {loading && <Spinner size="14px" margin="4px" color="#000" />}
        <AnimatePresence>
          {!loading &&
            comments.map(comment => (
              <Comment
                key={comment.id}
                comment={comment}
                deleteComment={deleteComment}
              />
            ))}
        </AnimatePresence>
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
