type PatternsType = Partial<{ [key in React.HTMLInputTypeAttribute]: string }>;

interface ContainerPropsType extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'error' | 'success';
}
interface FieldPropsType {
  helptext?: string;
  showPassword?: boolean;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  variant?: 'error' | 'success';
}

export type { FieldPropsType, ContainerPropsType, PatternsType };
