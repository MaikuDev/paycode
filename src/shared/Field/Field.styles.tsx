import { ContainerPropsType } from './Field.types';
import { Typography } from '@app/shared/Typography';
import styled, { css } from 'styled-components';

const HelpText = styled(Typography)`
  font-size: 12px;
  margin-top: 4px;
`;

const Content = styled.div`
  width: 100%;
  height: 40px;
  background-color: #efeff0;
  border: 1px solid #eaeaea;
  display: flex;
  border-radius: 6px;
`;

const cssFieldError = css`
  ${Content} {
    border-color: #c65656;
  }
  ${HelpText} {
    color: #c65656;
  }
`;

const cssFieldSuccess = css`
  ${Content} {
    border-color: #5bc777;
  }
`;

const Container = styled.div<ContainerPropsType>`
  width: 100%;
  display: block;
  height: 56px;
  ${({ variant }) => variant === 'error' && cssFieldError};
  ${({ variant }) => variant === 'success' && cssFieldSuccess};
`;

const Input = styled.input`
  padding: 10px 14px;
  appearance: none;
  border: none;
  background-color: transparent;
  flex: 1;
  :autofill,
  :autofill:hover,
  :autofill:focus,
  :autofill:active {
    box-shadow: 0 0 0 30px #efeff0 inset;
  }
`;

const Left = styled.div``;

const Right = styled.div`
  padding: 10px 14px;
  padding-left: 0px;
`;

export { Container, Content, Input, HelpText, Left, Right };
