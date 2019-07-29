import styled from "styled-components";

const Button = styled.button`
  background-color: #000;
  border: 1px solid #000;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.75rem 0;
  transition: all 200ms ease;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  &:hover {
    background-color: white;
    color: #000;
  }
`;

const TextArea = styled.textarea`
  background: none;
  border: 1px solid #a9a9a9;
  border-radius: 0.25rem;
  box-sizing: border-box;
  display: block;
  font-size: 1rem;
  padding: 0.5rem;
  color: #333;
  width: 100%;
  font-family: inherit;
  &:focus {
    outline: none;
    border-color: #000;
  }
`;

export { Button, TextArea };
