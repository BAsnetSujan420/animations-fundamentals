import React from 'react';
import styled, { keyframes } from 'styled-components';

const wave = keyframes`
from {
transform: rotate(-10deg);
}
to {
transform: rotate(30deg);
}
`;

const Wave = styled.span`
  font-size: 3rem;
  display: inline-block;
  animation: ${wave} 1000ms infinite alternate ease-in-out;
  transform-origin: 75% 80%;
`;

export default function WavingHand() {
  return (
    <p>
      <Wave role="img" aria-label="Waving hand">
        👋
      </Wave>
    </p>
  );
}
