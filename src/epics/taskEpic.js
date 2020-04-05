import { mapTo, filter } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { taskActions } from '../actions/taskAction';

export const taskEpic = (action$) =>
  action$.pipe(
    ofType(taskActions.ADD_TASK),
    mapTo({ type: taskActions.TASK_ADDED })
  );
