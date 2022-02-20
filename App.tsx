import React from 'react';
// import {Provider} from 'react-redux';
// import {configureStore} from '@reduxjs/toolkit';
import {RecoilRoot} from 'recoil';

// import rootReducer from './slices';
import PostsApp from './components/PostsApp';
// import TodoApp from './components/TodoApp';
// import AuthApp from './components/AuthApp';

// const store = configureStore({reducer: rootReducer});
// const store = createStore(rootReducer);

function App() {
  return (
    <RecoilRoot>
      <PostsApp />
    </RecoilRoot>
    // <Provider store={store}>
    //   <PostsApp />
    //   {/*<TodoApp />*/}
    //   {/*<AuthApp />*/}
    // </Provider>
  );
}
export default App;
