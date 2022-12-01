import styled, { css } from 'styled-components';
import { TypographyProps } from './Typography';

export const DynamicTypography = styled.div<
Pick<TypographyProps, 'variant'>
>`
  ${({ theme, variant }) => variant === 'h2' && css`
    font-size: ${theme.fontSizes.large};
    font-weight: 700;
    color ${theme.colors.black};
  `}
  ${({ theme, variant }) => variant === 'h3' && css`
    font-size: ${theme.fontSizes.medium};
    font-weight: 700;
    color ${theme.colors.black};
  `}
  ${({ theme, variant }) => variant === 'body1' && css`
    font-size: ${theme.fontSizes.medium};
    font-weight: 400;
    color ${theme.colors.grey800};
  `}
  ${({ theme, variant }) => variant === 'body2' && css`
    font-size: ${theme.fontSizes.small};
    font-weight: 400;
    color ${theme.colors.grey800};
  `}
`;
