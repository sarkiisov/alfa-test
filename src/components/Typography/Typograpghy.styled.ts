import styled, { css } from 'styled-components';
import { TypographyProps } from './Typography';

export type DynamicComponentProps = Pick<TypographyProps, 'variant'>;

export const DynamicComponent = styled.div<DynamicComponentProps>`
  ${(props) => props.variant === 'h2' && css`
    font-size: ${props.theme.fontSizes.medium};
    font-weight: 700;
    color ${props.theme.colors.black};
  `}
  ${(props) => props.variant === 'h3' && css`
    font-size: ${props.theme.fontSizes.small};
    font-weight: 700;
    color ${props.theme.colors.black};
  `}
  ${(props) => props.variant === 'body1' && css`
    font-size: ${props.theme.fontSizes.medium};
    font-weight: 400;
    color ${props.theme.colors.grey800};
  `}
  ${(props) => props.variant === 'body2' && css`
    font-size: ${props.theme.fontSizes.small};
    font-weight: 400;
    color ${props.theme.colors.grey800};
  `}
`;
