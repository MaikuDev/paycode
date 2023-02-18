import { i18next } from '@app/translations';

const ENTER = i18next.t('auth.enter', 'Create an account');
const EMAIL_ERROR = i18next.t(
  'errors.email',
  'Please enter a valid email address'
);
const PLACEHOLDER_EMAIL = i18next.t('auth.email.placeholder', 'Email');
const PLACEHOLDER_PASSWORD = i18next.t('auth.password.placeholder', 'Password');

export { ENTER, EMAIL_ERROR, PLACEHOLDER_EMAIL, PLACEHOLDER_PASSWORD };
