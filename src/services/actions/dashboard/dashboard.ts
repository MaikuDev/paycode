import { RequestConfigType } from '@app/services/utils/utils.types';
import { ReportType } from './dashboard.types';
import { request } from '@app/services/utils';

function report(config: RequestConfigType) {
  return request.get<ReportType>('/report', config);
}

export { report };
