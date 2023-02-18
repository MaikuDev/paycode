import { FieldValidator } from './Form.utils';

type ConstraintType = (
  value: string,
  values: { [key: string]: string }
) => string;
type FieldsType = { [key: string]: FieldType };
type ErrorsType = { [key: string]: string };
type FormValuesType = { [key: string]: string };
type ValidationsType = { [key: string]: InstanceType<typeof FieldValidator> };

interface FieldType {
  error: string;
  value: string;
  field: HTMLInputElement;
  validator?: InstanceType<typeof FieldValidator>;
}
interface ValidatorContextType {
  isValid?: boolean;
  values?: FormValuesType;
  fields?: FieldsType;
  form?: HTMLFormElement;
}
interface FormContextType extends ValidatorContextType {
  isSubmitting?: boolean;
}
interface FormPropsType
  extends Omit<
    React.FormHTMLAttributes<HTMLFormElement>,
    'onSubmit' | 'onChange'
  > {
  validations?: ValidationsType;
  onChange?: (
    event: React.ChangeEvent<HTMLFormElement>,
    FormContext: FormContextType
  ) => void;
  onSubmit?: (
    event: React.FormEvent<HTMLFormElement>,
    FormContext: FormContextType
  ) => void;
}

export type {
  FieldsType,
  FieldType,
  ErrorsType,
  FormValuesType,
  ValidationsType,
  ValidatorContextType,
  FormContextType,
  ConstraintType,
  FormPropsType,
};
