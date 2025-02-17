import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const DottedBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveSpot = () => {
      // Get random position for the bright spot
      setPosition({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    };

    // Move spot every 2 seconds
    const interval = setInterval(moveSpot, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundContainer>
      <SpotContainer x={position.x} y={position.y} />
    </BackgroundContainer>
  );
};

export default DottedBackground;

// Styled-components

const fadeEffect = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.2;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  overflow: hidden;
`;

const SpotContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  // Bright spot
  &:before {
    content: "";
    position: absolute;
    top: ${(props) => props.y}px;
    left: ${(props) => props.x}px;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 5rem rgba(255, 255, 255, 0.6),
      0 0 10rem rgba(255, 255, 255, 0.3), 0 0 15rem rgba(255, 255, 255, 0.1),
      0 0 20rem rgba(255, 255, 255, 0);
    animation: ${fadeEffect} 5s linear infinite;
  }

  // Random spots with varying size
  &:after {
    content: "";
    position: absolute;
    top: ${(props) => props.y + 5}rem;
    left: ${(props) => props.x + 5}rem;
    width: ${() =>
      `${Math.random() * 4 + 1}px`}; // Random size between 1px and 5px
    height: ${() => `${Math.random() * 4 + 1}px`};
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
  }
`;
