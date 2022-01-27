import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav>
      <div
        className='w-full bg-gradient-to-tr
       from-slate-800 to-slate-900 py-6 
       flex items-center justify-center md:px-20 xl:px-60 '
      >
        <div className='flex items-center space-x-60 '>
          <h1 className='text-white text-2xl font-medium '>Task Manager</h1>
          <div className='relative mt-4 lg:mt-0 lg:mx-4 '>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                className='w-4 h-4 text-slate-600 dark:text-slate-300'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </svg>
            </span>

            <input
              type='search'
              className='w-full lg:w-96  py-1 pl-10 pr-4 text-slate-700 
              placeholder-gray-600 bg-white border-b border-slate-600
               dark:placeholder-gray-300 dark:focus:border-gray-300  
               lg:border-transparent dark:bg-slate-900 
              dark:text-gray-300 focus:outline-none focus:border-slate-600'
              placeholder='Search'
            />
          </div>
          <button
            // className='border border-white px-4 py-1 rounded-md text-white text-xl'
            className='button'
          >
            Create Task
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
