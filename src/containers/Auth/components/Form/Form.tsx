import { FormPropsType } from './Form.types';
import { useContext } from 'react';
import { FormContext } from '@app/shared/Form/Form.context';
import * as TR from './Form.translations';
import * as Styled from './Form.styles';

function Form({ isPending }: FormPropsType): React.ReactElement {
  const { isValid } = useContext(FormContext);
  const isEnabled: boolean = (isValid as boolean) && !isPending;

  return (
    <Styled.Content>
      <Styled.Field
        data-test="signin-email"
        inputProps={{
          placeholder: TR.PLACEHOLDER_EMAIL,
          autoComplete: 'off',
          name: 'email',
          type: 'email',
          required: true,
          title: TR.EMAIL_ERROR,
        }}
      />
      <Styled.Field
        data-test="signin-password"
        inputProps={{
          placeholder: TR.PLACEHOLDER_PASSWORD,
          autoComplete: 'off',
          name: 'password',
          type: 'password',
          required: true,
        }}
      />
      <Styled.Button
        type="submit"
        data-test="signin-submit"
        disabled={!isEnabled}
      >
        {TR.ENTER}
      </Styled.Button>
    </Styled.Content>
  );
}

export { Form };
