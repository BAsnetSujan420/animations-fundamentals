import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  background: transparent;
  padding: 0;
`;

const ButtonContents = styled.span`
  display: grid;
  place-content: center;
  height: 100%;
  border-radius: 50%;
  background: slateblue;
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  transition: transform 250ms;

  ${Button}:hover & {
    transform: translateY(-10px);
  }
`;

export default function DoomFlicker() {
  return (
    <Button>
      <ButtonContents>Hello World</ButtonContents>
    </Button>
  );
}
