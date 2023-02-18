import { FieldPropsType } from './Field.types';
import { useMemo } from 'react';
import { PATTERNS } from './Field.constants';
import * as Styled from './Field.styles';

function Field({
  leftElement,
  rightElement,
  helptext,
  showPassword = false,
  inputProps = {},
  ...props
}: FieldPropsType): React.ReactElement {
  const { type = 'text', name = '' } = inputProps;

  const fieldType = useMemo(() => {
    return type === 'password' && showPassword ? 'text' : type;
  }, [type, showPassword]);

  const pattern = inputProps?.pattern ?? PATTERNS[type];

  return (
    <Styled.Container {...props}>
      <Styled.Content>
        {leftElement && <Styled.Left>{leftElement}</Styled.Left>}
        <Styled.Input
          {...inputProps}
          type={fieldType}
          pattern={pattern || undefined}
          name={name}
          role="field"
        />
        {rightElement && <Styled.Right>{rightElement}</Styled.Right>}
      </Styled.Content>
      {helptext && (
        <Styled.HelpText role="helptext">{helptext}</Styled.HelpText>
      )}
    </Styled.Container>
  );
}

export { Field };
