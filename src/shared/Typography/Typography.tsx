import * as Styled from './Typography.styles';

function Typography(
  props: React.ParamHTMLAttributes<HTMLParagraphElement>
): React.ReactElement {
  return <Styled.Typography {...props} />;
}

export { Typography };
