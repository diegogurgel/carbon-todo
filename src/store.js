import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { taskReducer } from './reducers/taskReducer';
import { createEpicMiddleware } from 'redux-observable';
import { taskEpic } from './epics/taskEpic';

const epicMiddleware = createEpicMiddleware();

export const rootReducer = combineReducers({
  task: taskReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(taskEpic);
