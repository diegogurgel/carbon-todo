import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import './app.scss';
import { store } from './store';
import Tasks from './components/Tasks';

function App() {
  return (
    <Provider store={store}>
      <section className="app-container">
        <h1 className="app-title">Carbon to-do</h1>
        <Tasks></Tasks>
      </section>
    </Provider>
  );
}

export default App;
