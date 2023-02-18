import { CardPropsType } from './Card.types';
import * as Styled from './Card.styles';

function Card(props: CardPropsType) {
  return <Styled.Card {...props} />;
}

export { Card };
