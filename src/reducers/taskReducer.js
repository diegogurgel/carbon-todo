import { taskActions } from '../actions/taskAction';

export const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case taskActions.ADD_TASK:
      return {
        ...state,
        [Object.keys(state).length]: action.payload,
      };
    default:
      return state;
  }
};
