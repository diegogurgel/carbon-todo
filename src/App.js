import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import './app.scss';
import { store } from './store';
import Tasks from './components/tasks';

function App() {
  return (
    <Provider store={store}>
      <Tasks></Tasks>
    </Provider>
  );
}

export default App;
