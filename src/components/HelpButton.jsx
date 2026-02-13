import React from 'react';
import styled from 'styled-components';

const HelpCircle = styled.button`
  position: fixed;
  right: 32px;
  bottom: 32px;

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
