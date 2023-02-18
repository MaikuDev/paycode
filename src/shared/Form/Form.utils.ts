import { IsSameOptionsType } from '@app/types/constraints';
import {
  FormValuesType,
  ConstraintType,
  ValidationsType,
  FieldsType,
  ValidatorContextType,
} from './Form.types';
import * as constraints from '@app/utils/constraints';

class FieldValidator {
  constraints: Array<ConstraintType> = [];
  value = '';
  values: FormValuesType = {};
  field?: HTMLInputElement;

  isRequired(): FieldValidator {
    this.constraints = [...this.constraints, constraints.isRequired];
    return this;
  }

  isEmail(): FieldValidator {
    this.constraints = [...this.constraints, constraints.isEmail];

    return this;
  }

  isPassword(): FieldValidator {
    this.constraints = [...this.constraints, constraints.isPassword];

    return this;
  }

  isSame(options: IsSameOptionsType): FieldValidator {
    const constraint = (value: string, values: FormValuesType) =>
      constraints.isSame(value, values, options);
    this.constraints = [...this.constraints, constraint];

    return this;
  }

  validator(value: string, values: FormValuesType, field?: HTMLInputElement) {
    this.value = value;
    this.values = values;
    this.field = field;

    return this;
  }

  validity(): string {
    const error = this.error;

    if (error) {
      this?.field?.setCustomValidity(error as string);
      this?.field?.reportValidity();
    }

    return error;
  }

  get error(): string {
    const constraints = this.constraints;
    const value = this.value;
    const values = this.values;

    for (let i = 0; i < constraints.length; i++) {
      const constraint = constraints[i];
      const message = constraint(value, values);

      if (message) {
        return message;
      }
    }

    return '';
  }
}

class FormValidator {
  validations: ValidationsType = {};
  form: HTMLFormElement;

  constructor(form: HTMLFormElement, validations: ValidationsType = {}) {
    this.validations = validations;
    this.form = form;
  }

  get entries(): Array<[string, string]> {
    const values = this.values;
    const entries = Object.entries(values);

    return entries;
  }

  get formData(): FormData {
    const form = this.form;
    const formData = new FormData(form);

    return formData;
  }

  get values(): FormValuesType {
    const formData = this.formData;
    const values = Object.fromEntries(formData) as FormValuesType;

    return values;
  }

  get fields(): FieldsType {
    const entries = this.entries;
    const form = this.form;
    const validations = this.validations;
    const values = this.values;

    const fields = entries.reduce<Partial<FieldsType>>((acc, [name, value]) => {
      const field = form.querySelector(`[name=${name}]`) as HTMLInputElement;
      const validator = validations[name]?.validator?.(value, values, field);
      const error = validator?.error;

      acc[name] = {
        value,
        field,
        error,
        validator,
      };
      return acc;
    }, {}) as FieldsType;

    return fields;
  }

  get isValid(): [FieldsType, boolean] {
    const fields = this.fields;
    const isValid = !Object.values(fields).some(({ error }) => !!error);

    return [fields, isValid];
  }

  get context(): ValidatorContextType {
    const values = this.values;
    const form = this.form;
    const [fields, isValid] = this.isValid;

    return {
      values,
      form,
      fields,
      isValid,
    };
  }
}

export { FieldValidator, FormValidator };
