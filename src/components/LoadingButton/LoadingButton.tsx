import React from 'react';
import { Typography } from '../Typography';
import { LoadingButtonWrapper, LoadingIcon } from './LoadingButton.styled';

export type LoadingButtonProps = {
  isLoading: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
};

export const LodaingButton: React.FC<LoadingButtonProps> = ({ isLoading, onClick, children }) => (
  <LoadingButtonWrapper disabled={isLoading} isLoading={isLoading} onClick={onClick}>
    {isLoading
      ? <LoadingIcon />
      : <Typography>{children}</Typography>}
  </LoadingButtonWrapper>
);
