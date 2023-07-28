import React from 'react';

import { styled, keyframes } from '@mui/material/styles';

type LogoProps = {
  sx?: Record<string, unknown>;
};

const LogoSvg = styled('svg')({
  paddingBottom: '8px',
  height: '48px',
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

function Logo(props: LogoProps) {
  return (
    <LogoSvg {...props.sx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="0" y="0" width="100" height="100" fill="transparent" />
      <text x="50" y="70" fontSize="64" fill="#be3455" textAnchor="middle">
        ★
      </text>
    </LogoSvg>
  );
}

export default Logo;