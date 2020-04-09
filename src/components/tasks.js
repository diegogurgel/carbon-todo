import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../actions/taskAction';
import { Add24 } from '@carbon/icons-react';
import {
  Button,
  OrderedList,
  ListItem,
  TextInput,
  DataTable,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
  TableHead,
  Table,
  TableBody,
} from 'carbon-components-react';
const Tasks = () => {
  const dispatch = useDispatch();
  const { task } = useSelector((state) => state);
  const [inputTaskValue, setInputTaskValue] = useState('');
  return (
    <div className="bx--grid task-container bx--grid--full-width bx--grid--no-gutter">
      <div className="bx--row">
        <TextInput
          id="add-task-input"
          labelText="Task text"
          className="bx--col"
          value={inputTaskValue}
          onChange={(change) => {
            setInputTaskValue(change.target.value);
          }}
        ></TextInput>
        <Button
          kind="primary"
          hasIconOnly
          tooltipPosition="bottom"
          iconDescription="Add task"
          className="bx--col-1 add-task-button"
          disabled={!inputTaskValue}
          onClick={() => {
            dispatch(addTask(inputTaskValue));
            setInputTaskValue('');
          }}
        >
          <Add24 />
        </Button>
      </div>

      <div className="bx--row">
        <DataTable
          headers={[{ header: 'Description', key: 'description' }]}
          rows={Object.keys(task).length ? Object.values(task) : []}
          render={({ headers, getHeaderProps, rows }) => {
            return (
              <TableContainer title="Tasks" description="Latest added tasks">
                {rows.length && (
                  <Table>
                    <TableHead>
                      <TableRow>
                        {headers.map((header) => {
                          return (
                            <TableHeader {...getHeaderProps({ header })}>
                              {header.header}
                            </TableHeader>
                          );
                        })}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => {
                        return (
                          <TableRow key={row.id}>
                            {row.cells.map((cell) => {
                              return (
                                <TableCell key={cell.id}>
                                  {cell.value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                )}
              </TableContainer>
            );
          }}
        ></DataTable>
      </div>
    </div>
  );
};

export default Tasks;
