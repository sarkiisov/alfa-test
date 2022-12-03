import React from 'react';

export interface BaseSVGIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  viewBox?: string;
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  htmlColor?: string;
}

export const BaseSVGIcon: React.FC<BaseSVGIconProps> = ({ children, ...props }) => (
  <svg
    viewBox="0 0 18 18"
    width="18px"
    height="18px"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    {children}
  </svg>
);
