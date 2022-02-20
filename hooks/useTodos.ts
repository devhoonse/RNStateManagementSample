import {useRecoilValue} from 'recoil';
// import {useSelector} from 'react-redux';

import {todosState} from '../atoms/todos';

export default function useTodos() {
  return useRecoilValue(todosState);
  // return useSelector(state => state.todos);
}
