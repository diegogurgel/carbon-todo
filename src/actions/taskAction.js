export const taskActions = {
  ADD_TASK: 'ADD_TASK',
  TASK_ADDED: 'TASK_ADDED',
};

export const addTask = (descrition) => {
  return { type: taskActions.ADD_TASK, payload: descrition };
};
