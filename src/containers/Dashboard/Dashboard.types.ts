import { ReportType } from '@app/services/actions/dashboard/dashboard.types';
import { ProfileType } from '@app/services/actions/user/user.types';

type PercentageType = 'up' | 'down';

interface DashboardPropsType {
  report: ReportType;
  profile: ProfileType;
}

interface DiffPercentageType {
  percentage: number;
  type: PercentageType;
}

export type { DashboardPropsType, DiffPercentageType, PercentageType };
