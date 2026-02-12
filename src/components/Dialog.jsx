import React from 'react';
import styled from 'styled-components';

const DialogWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: hsl(0deg 0% 0% / 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogContent = styled.div`
  width: 600px;
  max-width: 100vw;
  height: 400px;
  background: white;
  border-radius: 6px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  padding: 16px;
  background: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-end;
`;

export default function Dialog({ onClose }) {
  return (
    <DialogWrapper>
      <DialogContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        {/* Add your dialog content here */}
      </DialogContent>
    </DialogWrapper>
  );
}
