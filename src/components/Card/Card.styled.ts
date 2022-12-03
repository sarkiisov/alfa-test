import styled, { css } from 'styled-components';
import { Typography } from '../Typography';

export const CardWrapper = styled.div`
  min-width: 220px;
  max-width: 480px;
  width: 100%;
  min-height: 302px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  display: flex;
  flex-direction: column;
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  height: 170px;
  position: relative;
  background: ${({ theme }) => theme.colors.grey200};
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  outline: none;
  object-fit: cover; 
`;

export const CardControls = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  display: flex;
  opacity: 0;
  visibility: hidden;
  transition: opacity ${({ theme }) => theme.durations.ms200}ms,
              visibility ${({ theme }) => theme.durations.ms200}ms;

  ${CardWrapper}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

export const CardIconButton = styled.button`
  width: 40px;
  height: 40px;
  outline: none;
  background: ${({ theme }) => theme.colors.grey200};
  color: ${({ theme }) => theme.colors.grey800};
  border: 1px solid ${({ theme }) => theme.colors.grey800};
  border-radius: 50%;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity ${({ theme }) => theme.durations.ms200}ms;
  
  & + & {
    margin-left: 10px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const CardLikeButton = styled(CardIconButton)<{
  isActive: boolean;
}>`
  transition: color ${({ theme }) => theme.durations.ms200};

  ${({ theme, isActive }) => isActive && css`
    color: ${theme.colors.red};
  `}
`;

export const CardInfoWrapper = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const limitLinesStyles = css<{
  maxLines: number;
}>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ maxLines }) => maxLines};
          line-clamp: ${({ maxLines }) => maxLines}; 
  -webkit-box-orient: vertical;
`;

export const CardTitle = styled(Typography)`
  ${limitLinesStyles}
  margin-bottom: 8px;
`;

export const CardArtistBiography = styled(Typography)`
  ${limitLinesStyles}
`;
