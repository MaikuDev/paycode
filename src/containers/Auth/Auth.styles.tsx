import styled from 'styled-components';
import { Card as CardShared } from '@app/shared/Card';
import { Form as FormShared } from '@app/shared/Form';
import { Typography } from '@app/shared/Typography';

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled(CardShared)`
  padding: 30px 16px;
  background-color: #ffffff;
  width: calc(100% - 30px);
  max-width: 400px;
`;

const Brand = styled.svg`
  margin: auto;
  width: 214px;
  height: auto;
  margin-bottom: 30px;
  display: block;
`;

const Form = styled(FormShared)``;

const Error = styled(Typography)`
  color: #c65656;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
`;

export { Container, Card, Brand, Form, Error };
