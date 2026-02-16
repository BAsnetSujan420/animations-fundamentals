import React from 'react';
import styled from 'styled-components';

const Pushable = styled.button`
  background: hsl(340deg 100% 32%);
  border: none;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
`;

const Front = styled.span`
  display: block;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  background: hsl(345deg 100% 47%);
  color: white;

  transform: translateY(-4px);
  transition: transform 500ms;

  ${Pushable}:hover & {
    transform: translateY(-6px);
    transition: transform 250ms;
  }

  ${Pushable}:active & {
    transform: translateY(-2px);
    transition: transform 50ms;
  }
`;

export default function Button3D() {
  return (
    <Pushable>
      <Front>Push me</Front>
    </Pushable>
  );
}
