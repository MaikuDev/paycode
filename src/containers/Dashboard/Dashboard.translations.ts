import { i18next } from '@app/translations';

const TITLE = i18next.t('dashboard.title', "<p><b>Today's</b> Report</p>");
const PAYMENT = i18next.t('dashboard.payment', 'Most used payment method');
const TICKET_AVERAGE = i18next.t('dashboard.ticket.average', 'Average ticket');
const TICKET_TOP = i18next.t('dashboard.ticket.top', 'Top ticket');
const INCOME = i18next.t('dashboard.chart.income', 'Income');
const PAYMENT_CARD = i18next.t('dashboard.payments.card', 'Credit/debit card');

const WELCOME = (name: string) => {
  const translation = i18next.t('dashboard.welcome', 'Welcome {{name}}', {
    name,
  });

  return translation;
};

export {
  TITLE,
  PAYMENT,
  TICKET_AVERAGE,
  TICKET_TOP,
  INCOME,
  PAYMENT_CARD,
  WELCOME,
};
