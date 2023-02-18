import {
  FormPropsType,
  ValidatorContextType,
  FormContextType,
} from './Form.types';
import React, { createContext, useEffect, useRef, useState } from 'react';
import { FormValidator } from './Form.utils';
import * as Styled from './Form.styles';

const FormContext = createContext<FormContextType>({});

function FormProvider({
  children,
  validations,
  ...props
}: FormPropsType): React.ReactElement {
  const [validatorContextType, setValidatorContextType] =
    useState<ValidatorContextType>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const formValidator = useRef() as React.MutableRefObject<
    InstanceType<typeof FormValidator>
  >;
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;

  useEffect(() => {
    if (form.current) {
      const instance = new FormValidator(form.current, validations);
      formValidator.current = instance;
      setValidatorContextType(instance?.context);
    }
  }, [form, validations]);

  const onChange = (event: React.ChangeEvent<HTMLFormElement>): void => {
    const context = formValidator.current.context;
    setValidatorContextType(context);
    props?.onChange?.(event, context);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const context = formValidator.current.context;
    setValidatorContextType(context);
    setIsSubmitting(true);
    props?.onSubmit?.(event, context);
  };

  return (
    <FormContext.Provider value={{ ...validatorContextType, isSubmitting }}>
      <Styled.Form
        ref={form}
        {...props}
        onSubmit={onSubmit}
        onChange={onChange}
      >
        {children}
      </Styled.Form>
    </FormContext.Provider>
  );
}

export { FormContext, FormProvider };
