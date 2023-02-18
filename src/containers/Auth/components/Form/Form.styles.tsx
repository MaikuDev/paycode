import styled from 'styled-components';
import { Typography } from '@app/shared/Typography';
import { Field as FieldShared } from '@app/shared/Form';
import { Button as ButtonShared } from '@app/shared/Button';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Field = styled(FieldShared)`
  margin-bottom: 10px;
`;

const Button = styled(ButtonShared)``;

const Show = styled(Typography)`
  cursor: pointer;
  font-size: 12px;
  color: #18b9b4;
  text-decoration: underline;
  text-transform: capitalize;
`;

export { Content, Field, Button, Show };
