import styled from 'styled-components';
import { PercentageType } from './Dashboard.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@app/shared/Card';
import { Typography } from '@app/shared/Typography';

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Section = styled.section`
  width: calc(50% - 10px);
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Chart = styled(Card)`
  padding: 30px 16px;
  background-color: #ffffff;
  width: 100%;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Details = styled(Card)`
  padding: 30px 16px;
  background-color: #ffffff;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Welcome = styled(Typography)`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
  flex: 1;
`;

const Title = styled.div`
  margin-bottom: 10px;
  p {
    color: #6e7583;
    font-size: 16px;
    font-weight: 600;
    b {
      color: #000000;
    }
  }
`;

const CardTitle = styled(Typography)`
  color: #6e7583;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 14px;
`;

const Amount = styled(Typography)`
  color: #414b5a;
  font-weight: bold;
  font-size: 24px;
  span {
    font-size: 14px;
  }
`;

const Payment = styled(Typography)`
  color: #414b5a;
  font-weight: bold;
  font-size: 22px;
`;

const Tag = styled.div<{ type: PercentageType }>`
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 10px;
  background-color: red;
  border-radius: 20px;
  padding: 6px;
  background-color: ${({ type }) => (type === 'down' ? '#FBE5E6' : '#BFF2D6')};
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 14px;
    color: ${({ type }) => (type === 'down' ? '#A72132' : '#428366')};
  }
`;

const TagIcon = styled(FontAwesomeIcon).attrs(({ type }) => ({
  color: type === 'down' ? '#A72132' : '#428366',
}))`
  margin-right: 8px;
  height: 14px;
  transform: ${({ type }) =>
    type === 'down' ? 'rotate(45deg)' : 'rotate(-45deg)'};
`;

const Line = styled.div`
  width: 100%;
  height: 290px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logout = styled.button`
  background-color: #e3e2e7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 96px;
  cursor: pointer;
  border-radius: 10px;
  p {
    color: #9998a1;
    font-weight: bold;
    font-size: 16px;
  }
`;

const LogoutIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export {
  Container,
  Content,
  Section,
  Chart,
  Details,
  Welcome,
  Title,
  CardTitle,
  Payment,
  Amount,
  Tag,
  TagIcon,
  Line,
  Header,
  Logout,
  LogoutIcon,
};
