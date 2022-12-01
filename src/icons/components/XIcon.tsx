import React from 'react';
import { BaseSVGIcon, BaseSVGIconProps } from './BaseSVGIcon';

export const XIcon: React.FC<BaseSVGIconProps> = (props) => (
  <BaseSVGIcon
    {...props}
  >
    <path xmlns="http://www.w3.org/2000/svg" d="M13.5 4.5L4.5 13.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path xmlns="http://www.w3.org/2000/svg" d="M4.5 4.5L13.5 13.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </BaseSVGIcon>
);
