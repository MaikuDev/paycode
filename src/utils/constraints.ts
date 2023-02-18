import type { FormValuesType } from '@app/shared/Form/Form.types';
import type { IsSameOptionsType } from '@app/types/constraints';
import { i18next } from '@app/translations';

function isRequired(value: string) {
  const message = i18next.t('errors.required', 'Fill in this field');
  const isValid = !!value?.trim();

  if (isValid) {
    return '';
  }

  return message;
}

function isEmail(value: string) {
  const message = i18next.t(
    'errors.email',
    'Please enter a valid email address'
  );
  const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z0-9-.]+/g;
  const isValid = regex.test(value as string);

  if (isValid) {
    return '';
  }

  return message;
}

function isPassword(value: string) {
  const message = i18next.t(
    'errors.password',
    'Your password must contain 8 characters, at least 1 letter and 1 number'
  );
  const regex = /(?=.*[0-9])(?=.*[A-Z])([a-zA-Z0-9!@#$%]+){8,}/g;
  const isValid = regex.test(value as string);

  if (isValid) {
    return '';
  }

  return message;
}

function isSame(
  value: string,
  values: FormValuesType,
  options: IsSameOptionsType
) {
  const { field } = options;

  const message = i18next.t('errors.same', 'fields do not match');
  const isValid = values[field] === value;

  if (isValid) {
    return '';
  }

  return message;
}

export { isRequired, isPassword, isEmail, isSame };
