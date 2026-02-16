import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
from {
 transform: translateY(calc(100% +  var(--spacing)));
 }
 to {
 transform: translateY(0%);
 }
`;

const fadeIn = keyframes`
from {
 opacity: 0;
 }
 to {
 opacity: 1;
 }
`;

const HelpCircle = styled.button`
  --spacing: 32px;
  position: fixed;
  right: var(--spacing);
  bottom: var(--spacing);

  display: grid;
  place-content: center;
  width: 60px;
  height: 60px;
  color: white;
  background: slateblue;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow:
    0px 2px 8px hsl(0deg 0% 0% / 0.1),
    0px 4px 16px hsl(0deg 0% 0% / 0.1),
    0px 8px 32px hsl(0deg 0% 0% / 0.1);
  cursor: pointer;
  animation: ${fadeIn} 500ms backwards;
  animation-delay: 1000ms;
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${slideIn};
  }
`;

const HelpIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const VisuallyHidden = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

export default function HelpButton() {
  return (
    <HelpCircle>
      <HelpIcon
        src="https://courses.joshwcomeau.com/cfj-mats/help-white.svg"
        alt=""
      />
      <VisuallyHidden>Access help center</VisuallyHidden>
    </HelpCircle>
  );
}
