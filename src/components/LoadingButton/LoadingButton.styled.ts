import styled, { keyframes } from 'styled-components';
import { DotsIcon } from '../icons';

export const LoadingButtonWrapper = styled.button<{
  isLoading: boolean;
}>`
  min-width: 180px;
  min-height: 48px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  color: ${({ theme }) => theme.colors.grey800};
  background: none;
  padding: 8px 24px;

  &:hover {
    cursor: ${({ isLoading }) => (isLoading ? 'default' : 'pointer')};
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs})  {
    width: 100%;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.25, 1.25, 1.25);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`;

export const LoadingIcon = styled(DotsIcon)`
  animation: ${pulse} 2s ease infinite;
  color: ${(props) => props.theme.colors.grey800};
`;
