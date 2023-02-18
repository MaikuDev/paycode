import { ButtonPropsType } from './Button.types';
import * as Styled from './Button.styles';

function Button(props: ButtonPropsType): React.ReactElement {
  return <Styled.Button {...props} />;
}

export { Button };
