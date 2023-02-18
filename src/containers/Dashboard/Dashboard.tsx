import { DashboardPropsType } from './Dashboard.types';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { deleteCookie } from 'cookies-next';
import {
  faArrowRight,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { getIncome, getDiffPercentage } from './Dashboard.utils';
import { PAYMENT_METHODS } from './Dashboard.constants';
import * as TR from './Dashboard.translations';
import * as Styled from './Dashboard.styles';

const LineChart = dynamic(
  () => import('./components/LineChart').then((mod) => mod.LineChart),
  {
    ssr: false,
  }
);

function Dashboard({ report, profile }: DashboardPropsType) {
  const router = useRouter();
  const income = getIncome(report.revenuePerHour);
  const topDiff = getDiffPercentage(
    report.topTicket,
    report.previousDay.topTicket
  );
  const averageDiff = getDiffPercentage(
    report.averageTicket,
    report.previousDay.averageTicket
  );

  const onLogut = () => {
    deleteCookie('token');
    router.replace('/auth');
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Welcome>{TR.WELCOME(profile.name)}</Styled.Welcome>
        <Styled.Logout onClick={onLogut}>
          <Styled.LogoutIcon color="#9998A1" icon={faRightFromBracket} />
          <p>Logout</p>
        </Styled.Logout>
      </Styled.Header>
      <Styled.Title dangerouslySetInnerHTML={{ __html: TR.TITLE }} />
      <Styled.Content>
        <Styled.Section>
          <Styled.Chart elevation={2}>
            <Styled.CardTitle>{TR.INCOME}</Styled.CardTitle>
            <Styled.Amount>
              ${income?.toLocaleString('es-MX')} <span>MXN</span>
            </Styled.Amount>
            <Styled.Line>
              <LineChart revenue={report.revenuePerHour} />
            </Styled.Line>
          </Styled.Chart>
        </Styled.Section>
        <Styled.Section>
          <Styled.Details elevation={2}>
            <Styled.CardTitle>{TR.TICKET_AVERAGE}</Styled.CardTitle>
            <Styled.Amount>
              ${report?.averageTicket?.toLocaleString('es-MX')} <span>MXN</span>
            </Styled.Amount>
            <Styled.Tag type={averageDiff.type}>
              <Styled.TagIcon type={averageDiff.type} icon={faArrowRight} />
              <p>%{averageDiff.percentage}</p>
            </Styled.Tag>
          </Styled.Details>
          <Styled.Details elevation={2}>
            <Styled.CardTitle>{TR.TICKET_TOP}</Styled.CardTitle>
            <Styled.Amount>
              ${report?.topTicket?.toLocaleString('es-MX')} <span>MXN</span>
            </Styled.Amount>
            <Styled.Tag type={topDiff.type}>
              <Styled.TagIcon type={topDiff.type} icon={faArrowRight} />
              <p>%{topDiff.percentage}</p>
            </Styled.Tag>
          </Styled.Details>
          <Styled.Details elevation={2}>
            <Styled.CardTitle>{TR.PAYMENT}</Styled.CardTitle>
            <Styled.Payment>
              {PAYMENT_METHODS[report.topPaymentMethod]}
            </Styled.Payment>
          </Styled.Details>
        </Styled.Section>
      </Styled.Content>
    </Styled.Container>
  );
}

export { Dashboard };
