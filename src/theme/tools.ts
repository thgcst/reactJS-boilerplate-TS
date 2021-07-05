import { css } from 'styled-components';
import { breakpoints } from './variables';

const responsiveFunc = (bp: string) => {
  return (...args: any[]) => css`
    @media (max-width: ${bp}) {
      ${css`
        ${args}
      `};
    }
  `;
};

export const mixinRespondTo = {
  xxs: responsiveFunc(breakpoints.xxs),
  xs: responsiveFunc(breakpoints.xs),
  sm: responsiveFunc(breakpoints.sm),
  md: responsiveFunc(breakpoints.md),
  lg: responsiveFunc(breakpoints.lg),
};
