import {useRecoilValue} from 'recoil';
// import {useSelector} from 'react-redux';

import {authState} from '../atoms/auth';

export default function useUser() {
  const auth = useRecoilValue(authState);
  return auth.user;
  // return useSelector(state => state.auth.user);
}
