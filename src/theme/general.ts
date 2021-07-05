import { css } from 'styled-components';

const General = {
  notSelectable: css`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `,
  clickable: css`
    cursor: pointer;

    :hover {
      transform: scale(1.03);
      box-shadow: 0 0 30px #00000006;
    }
    transition: 200ms ease;
  `,
};

export default General;
