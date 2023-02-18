import { FormPropsType } from './Form.types';
import { FormProvider } from './Form.context';

function Form({ children, ...props }: FormPropsType): React.ReactElement {
  return <FormProvider {...props}>{children}</FormProvider>;
}

export { Form };
