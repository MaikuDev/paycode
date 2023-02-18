import { useAsync } from 'react-async';
import { signIn } from '../../actions/user';

function useSignIn(params = {}) {
  return useAsync({ deferFn: signIn, ...params });
}

export { useSignIn };
