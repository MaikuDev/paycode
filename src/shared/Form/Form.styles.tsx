import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field as FieldShared } from '@app/shared/Field';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  display: block;
`;

const FieldIcon = styled(FontAwesomeIcon)``;

const Field = styled(FieldShared)``;

export { Form, Field, FieldIcon };
