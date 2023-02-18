import { RequestConfigType } from '@app/services/utils/utils.types';
import { ProfileType, SignInArgsType } from './user.types';
import { request } from '@app/services/utils';

function signIn([user = {}]: SignInArgsType) {
  return request.post('/login', user);
}

function profile(config: RequestConfigType) {
  return request.get<ProfileType>('/me', config);
}

export { signIn, profile };
