import React from 'react';
import styled from 'styled-components';

const Wave = styled.span`
  font-size: 3rem;
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
