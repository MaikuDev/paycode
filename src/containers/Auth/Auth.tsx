import { useState } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';
import { FormContextType } from '@app/shared/Form/Form.types';
import { SignInResolveResponseType } from './Auth.types';
import Brand from '@app/images/brand.svg';
import { useSignIn } from '@app/services/hooks/user';
import { Form } from './components/Form';
import { getValidations } from './Auth.utils';
import * as TR from './Auth.translations';
import * as Styled from './Auth.styles';

function Auth() {
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const { run: onSignIn, isPending } = useSignIn({
    onResolve: (data: SignInResolveResponseType) => onResolve(data),
    onReject: () => onReject(),
  });

  const validations = getValidations();

  const onResolve = ({ token }: SignInResolveResponseType) => {
    setCookie('token', token);
    router.replace('/dashboard');
  };

  const onReject = () => {
    setError(true);
  };

  const onSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    { values }: FormContextType
  ) => {
    setError(false);
    onSignIn(values);
    event.preventDefault();
  };

  const onChangeForm = () => {
    setError(false);
  };

  return (
    <Styled.Container>
      <Styled.Card elevation={2}>
        <Styled.Brand as={Brand} />
        <Styled.Form
          onChange={onChangeForm}
          autoComplete="off"
          validations={validations}
          onSubmit={onSubmit}
        >
          <Form isPending={isPending} />
        </Styled.Form>
        {error && <Styled.Error>{TR.ERROR}</Styled.Error>}
      </Styled.Card>
    </Styled.Container>
  );
}

export { Auth };
