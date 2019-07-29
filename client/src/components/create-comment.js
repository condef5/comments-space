import React from "react";
import { Button, TextArea } from "./ui";
import styled from "styled-components";

const WrapButton = styled.div`
  margin-top: 2em;
  text-align: right;
`;

function CreateComment() {
  const [comment, setComment] = React.useState("");

  function handleChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(comment);
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

export default CreateComment;
