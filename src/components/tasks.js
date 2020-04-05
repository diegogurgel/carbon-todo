import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../actions/taskAction';
import { Add24 } from '@carbon/icons-react';
import {
  Button,
  OrderedList,
  ListItem,
  TextInput,
} from 'carbon-components-react';
const Tasks = () => {
  const dispatch = useDispatch();
  const { task } = useSelector((state) => state);
  const [inputTaskValue, setInputTaskValue] = useState('');
  return (
    <div className='bx--grid task-container'>
      <div className='bx--row'>
        <TextInput
          id='add-task-input'
          labelText='Task text'
          className='bx--col'
          value={inputTaskValue}
          onChange={(change) => {
            setInputTaskValue(change.target.value);
          }}
        ></TextInput>
        <Button
          kind='primary'
          hasIconOnly
          tooltipPosition='bottom'
          iconDescription='Add task'
          className='bx--col-1 add-task-button'
          onClick={() => {
            dispatch(addTask(inputTaskValue));
          }}
        >
          <Add24 />
        </Button>
      </div>

      <OrderedList>
        {Object.values(task).map((task, index) => (
          <ListItem key={index}>{task}</ListItem>
        ))}
      </OrderedList>
    </div>
  );
};

export default Tasks;
