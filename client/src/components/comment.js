import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "./ui";
import { Delete } from "./icons";

const CommentWrap = styled(motion.li)`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1em;
  padding: 1em 0;
`;

function Comment({ comment, deleteComment }) {
  return (
    <CommentWrap
      key={comment.id}
      initial={{
        opacity: 0,
        x: -50
      }}
      transition={{ duration: 0.5 }}
      animate={{
        opacity: 1,
        x: 0
      }}
      exit={{
        opacity: 0,
        x: 10
      }}
    >
      <div>{comment.body}</div>
      <Button
        style={{ width: "45px" }}
        onClick={() => deleteComment({ id: comment.id })}
      >
        <Delete width="20px" />
      </Button>
    </CommentWrap>
  );
}

export default Comment;
