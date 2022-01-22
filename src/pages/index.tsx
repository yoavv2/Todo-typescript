import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import Window from '../components/Window';
import Input from '../components/Input';

export type Todo = Readonly<{
  id: string;
  date: Date;
  task: string;
  done: boolean;
}>;

const Home: NextPage = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<string>(
    moment().format('YYYY-MM-DD')
  );
  const [todos, setTodos] = useState<Todo[]>([]);
  const [time, setTime] = useState<string>(
    moment().add(1, 'hours').format('HH:mm')
  );

  const addTask = (e: Event): Todo => {
    e.preventDefault();
    const todo = {
      id: uuidv4(),
      task,
      date: new Date(`${deadline} ${time}`),
      done: false,
    };
    setTodos((prev) => [...prev, todo]);
    return { id: uuidv4(), task, date: new Date(deadline), done: false };
  };

  useEffect(() => {
    ((): void => {
      if (moment(`${deadline} ${time}`).isBefore()) {
        setDeadline(moment().format('YYYY-MM-DD'));
      }
      if (moment(time, 'h:mma').isBefore()) {
        setDeadline(moment().add(1, 'day').format('YYYY-MM-DD'));
      }
    })();
  }, [time, deadline]);

  return (
    <div className='max-w-2xl mx-auto my-10'>
      <form className='max-w-2xl flex flex-col items-center' onSubmit={addTask}>
        <input
          type='text'
          placeholder='What do you want todo?'
          className='input'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <label htmlFor='date' className='bg-teal text-white '>
          what is your deadline?
        </label>
        <input
          type='date'
          className='input'
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <input
          type='time'
          className='input'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button
          className='w-96 py-2 text-xl text-center 
        text-white transition-colors duration-300 bg-sky-900
         rounded-full hover:bg-sky-600 ease px-9 md:w-auto my-10'
        >
          add todo
        </button>
      </form>
      <Input />
      {todos.map((todo) => (
        <Window key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default Home;
