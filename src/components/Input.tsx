import moment from 'moment';
import { FC, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../pages/index';
interface InputType {
  addTask: (todo: Todo) => void;
}

const Input = ({ addTask }: InputType) => {
  const [deadline, setDeadline] = useState<string>(
    moment().format('YYYY-MM-DD')
  );
  const [hours, setHours] = useState<string>(
    moment().add(1, 'hours').format('HH:mm')
  );
  const [task, setTask] = useState<string>('');

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      task,
      date: new Date(`${deadline} ${hours}`),
      done: false,
    };

    addTask(todo);
    setTask('');
    setDeadline(moment().format('YYYY-MM-DD'));
    setHours(moment().add(1, 'hours').format('HH:mm'));
  };

  useEffect(() => {
    ((): void => {
      if (moment(`${deadline} ${hours}`).isBefore()) {
        setDeadline(moment().format('YYYY-MM-DD'));
      }
      if (moment(hours, 'h:mma').isBefore()) {
        setDeadline(moment().add(1, 'day').format('YYYY-MM-DD'));
      }
    })();
  }, [hours, deadline]);
  return (
    <form
      className='max-w-2xl flex flex-col items-center '
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Task Title'
        className='input w-96'
        name='query'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <label htmlFor='date' className='bg-teal text-white '>
        what is your deadline?
      </label>
      <input
        type='date'
        className='input w-96'
        name='deadline'
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <input
        type='time'
        className='input w-96'
        name='time'
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <button className='button my-4'>Add Task</button>
    </form>
  );
};

export default Input;
