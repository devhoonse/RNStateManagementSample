import {useMemo} from 'react';
import {useRecoilCallback, useSetRecoilState} from 'recoil';
// import {useDispatch} from 'react-redux';
// import {bindActionCreators} from 'redux';

import {nextTodoId, todosState} from '../atoms/todos';
// import {add, remove, toggle} from '../slices/todos';

export default function useTodosActions() {
  const set = useSetRecoilState(todosState);

  const add = useRecoilCallback(
    ({snapshot}) =>
      async (text: string) => {
        const nextId = await snapshot.getPromise(nextTodoId);
        set(prevState =>
          prevState.concat({
            id: nextId,
            text,
            done: false,
          }),
        );
      },
    [],
  );
  // const nextId = useRecoilValue(nextTodoId);
  // const dispatch = useDispatch();

  return useMemo(
    () => ({
      add,
      remove: (id: number) =>
        set(prevState => prevState.filter(todo => todo.id !== id)),
      toggle: (id: number) =>
        set(prevState =>
          prevState.map(todo =>
            todo.id === id ? {...todo, done: !todo.done} : todo,
          ),
        ),
    }),
    [add, set],
  );
  // return useMemo(
  //   () => ({
  //     add: (text: string) =>
  //       set(prevState =>
  //         prevState.concat({
  //           id: nextId,
  //           text,
  //           done: false,
  //         }),
  //       ),
  //     remove: (id: number) =>
  //       set(prevState => prevState.filter(todo => todo.id !== id)),
  //     toggle: (id: number) =>
  //       set(prevState =>
  //         prevState.map(todo =>
  //           todo.id === id ? {...todo, done: !todo.done} : todo,
  //         ),
  //       ),
  //   }),
  //   [set, nextId],
  // );
  // return useMemo(
  //   () => bindActionCreators({add, remove, toggle}, dispatch),
  //   [dispatch],
  // );
}
