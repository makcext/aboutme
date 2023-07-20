import React from 'react';

import { styled, keyframes } from '@mui/material/styles';

const LogoSvg = styled('svg')({
  padding: '8px',
  height: '10vmin',
  pointerEvents: 'none',
  animation: `${keyframes({
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  })} infinite 50s linear`,
});

function Logo() {
  return (
    <LogoSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="0" y="0" width="100" height="100" fill="transparent" />
      <text x="50" y="60" fontSize="50" fill="#fff" textAnchor="middle">
        dev
      </text>
    </LogoSvg>
  );
}

export default Logo;