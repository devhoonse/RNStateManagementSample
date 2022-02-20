import {atom, selector} from 'recoil';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const todosState = atom<Todo[]>({
  key: 'todosState',
  default: [
    {id: 1, text: 'react-native', done: true},
    {id: 2, text: 'state management', done: false},
  ],
});

export const nextTodoId = selector({
  key: 'nextTodoId',
  get: ({get}) => {
    const todos = get(todosState);
    const lastId = todos[todos.length - 1]?.id ?? 0;
    return lastId + 1;
  },
});
