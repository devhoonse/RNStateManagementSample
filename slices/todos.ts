import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const initialState: Todo[] = [
  {id: 1, text: 'react-native', done: true},
  {id: 2, text: 'state management', done: false},
];

let nextId = 3;

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: {
      prepare(text: string) {
        const prepared = {payload: {id: nextId, text}};
        nextId += 1;
        return prepared;
      },
      reducer(state, action: PayloadAction<{id: number; text: string}>) {
        state.push({
          ...action.payload,
          done: false,
        });
      },
    },
    remove(state, action: PayloadAction<number>) {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggle(state, action: PayloadAction<number>) {
      const selected = state.find(todo => todo.id === action.payload);
      if (!selected) {
        return;
      }
      selected.done = !selected.done;
    },
  },
});

export const {add, remove, toggle} = todosSlice.actions;
export default todosSlice.reducer;
