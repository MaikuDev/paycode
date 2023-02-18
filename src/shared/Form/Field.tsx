import { FieldPropsType } from '@app/shared/Field/Field.types';
import React, { useContext, useMemo, useState } from 'react';
import {
  faCircleExclamation,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FormContext } from './Form.context';
import * as Styled from './Form.styles';

function Field({
  inputProps = {},
  ...props
}: FieldPropsType): React.ReactElement {
  const [isBlur, setIsBlur] = useState<boolean>();
  const { fields = {}, isSubmitting } = useContext(FormContext);

  const { name = '' } = inputProps;

  const field = useMemo(() => {
    return fields[name];
  }, [fields, name]);

  const isReject = useMemo(() => {
    return !!field?.error && (isBlur || isSubmitting);
  }, [field, isBlur, isSubmitting]) as boolean;

  const isSuccess = useMemo(() => {
    return !field?.error && !!field?.value?.trim();
  }, [field]) as boolean;

  const variant = useMemo(() => {
    if (isReject) {
      return 'error';
    } else if (isSuccess) {
      return 'success';
    }

    return;
  }, [isReject, isSuccess]);

  const rightElement = useMemo(() => {
    if (props?.rightElement) {
      return props?.rightElement;
    } else if (isReject) {
      return <Styled.FieldIcon color="#c65656" icon={faCircleExclamation} />;
    } else if (isSuccess) {
      return <Styled.FieldIcon color="#5bc777" icon={faCircleCheck} />;
    }

    return;
  }, [isReject, isSuccess, props]);

  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsBlur(false);
    inputProps?.onFocus?.(event);
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsBlur(true);
    inputProps?.onBlur?.(event);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isBlur === undefined) {
      /* Browser autofill show error */
      setIsBlur(true);
    }

    inputProps?.onChange?.(event);
  };

  return (
    <Styled.Field
      {...props}
      inputProps={{ ...inputProps, onFocus, onBlur, onChange }}
      variant={variant}
      rightElement={rightElement}
      helptext={variant && field?.error}
    />
  );
}

export { Field };
