import React from "react";
import styled from "styled-components";
import { Button } from "./ui";
import { Delete } from "./icons";

const comments = [
  { id: "1", body: "The pillows is pure nostalgic" },
  { id: "2", body: "Hajime no ippo is the best anime" }
];

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

function CommentList() {
  return (
    <>
      <h2>Comments</h2>
      <List>
        {comments.map(comment => (
          <Comment key={comment.id}>
            <div>{comment.body}</div>
            <Button style={{ width: "45px" }}>
              <Delete width="20px" />
            </Button>
          </Comment>
        ))}
      </List>
    </>
  );
}

export default CommentList;
