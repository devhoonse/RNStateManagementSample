import {useMemo} from 'react';
import {useSetRecoilState} from 'recoil';
// import {useDispatch} from 'react-redux';
// import {bindActionCreators} from 'redux';

import {authState, User} from '../atoms/auth';
// import {authorize, logout} from '../slices/auth';

export default function useAuthActions() {
  const set = useSetRecoilState(authState);
  // const dispatch = useDispatch();

  return useMemo(
    () => ({
      authorize: (user: User) => {
        set({user});
      },
      logout: () => {
        set({user: null});
      },
    }),
    [set],
  );
  // return useMemo(
  //   () => bindActionCreators({authorize, logout}, dispatch),
  //   [dispatch],
  // );
  // return {
  //   authorize: (user: User) => dispatch(authorize(user)),
  //   logout: () => dispatch(logout()),
  // };
}
