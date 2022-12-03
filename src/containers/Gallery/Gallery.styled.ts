import styled, { css } from 'styled-components';
import { Typography } from '../../components/Typography/Typography';

export const GalleryWrapper = styled.div`
`;

export const GalleryHeader = styled.div`
  padding: 32px 0px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;

export const GalleryIconButton = styled.button`
  width: 40px;
  height: 40px;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.colors.grey500};
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity ${({ theme }) => theme.durations.ms200}ms;

  &:hover {
    cursor: pointer;
  }
`;

export const GalleryLikeButton = styled(GalleryIconButton)<{
  isActive: boolean;
}>`
  transition: color ${({ theme }) => theme.durations.ms200};

  ${({ theme, isActive }) => isActive && css`
    color: ${theme.colors.red};
  `}
`;

export const GalleryEmptyMessage = styled(Typography)`
  padding: 16px 0px;
  text-align: center;
`;

export const GalleryFiltersWrapper = styled.div`
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-gap: 24px;
  justify-content: stretch;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm})  {
    grid-gap: 12px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs})  {
    justify-items: center;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GalleryControls = styled.div`
  padding: 24px 0px;
  display: flex;
  justify-content: center;
`;
