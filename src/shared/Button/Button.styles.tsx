import { ButtonPropsType } from './Button.types';
import styled, { css } from 'styled-components';

const cssFullButton = css`
  width: 100%;
`;

const cssDisabledButton = css`
  opacity: 0.6;
  cursor: not-allowed;
  :hover {
    background-color: #000000;
  }
  &[disabled],
  :disabled {
    pointer-events: auto;
    cursor: not-allowed;
  }
`;

const Button = styled.button<ButtonPropsType>`
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%);
  padding: 8px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  background-color: #000000;
  border: none;
  color: #ffffff;
  font-weight: 700;
  height: 40px;
  padding: 0px 20px;
  border-radius: 10px;
  width: fit-content;
  appearance: none;
  :hover {
    background-color: #000000;
  }
  ${({ full }) => full && cssFullButton};
  ${({ disabled }) => disabled && cssDisabledButton};
`;

export { Button };
