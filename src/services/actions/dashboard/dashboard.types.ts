interface ReportDateType {
  averageTicket: number;
  topTicket: number;
  topPaymentMethod: string;
  revenuePerHour: number[];
}

interface ReportType extends ReportDateType {
  previousDay: ReportDateType;
}

export type { ReportType };
