import type { ValidationsType } from '@app/shared/Form/Form.types';
import { FieldValidator } from '@app/shared/Form/Form.utils';

function getValidations(): ValidationsType {
  return {
    email: new FieldValidator().isRequired().isEmail(),
    password: new FieldValidator().isRequired(),
  };
}

export { getValidations };
