import { FC, useEffect } from 'react';
import Todo from '../pages/index';
import moment from 'moment';
import 'quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';

const Window: FC = ({ id, task, date, done }: any) => {
  const theme = 'snow';
  // const theme = 'bubble';

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ align: [] }],

      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],

      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['link', 'image', 'video'],
      [{ color: [] }, { background: [] }],

      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const placeholder = 'What do you want todo?';

  const formats = [
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'list',
    'indent',
    'size',
    'header',
    'link',
    'image',
    'video',
    'color',
    'background',
    'clean',
  ];

  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
    placeholder,
  });

  useEffect(() => {
    if (quill) {
      if (quill) {
        quill.clipboard.dangerouslyPasteHTML(
          ` The purpose of an <b>FAQ</b> is generally to 
         provide information on frequent questions or concerns; however, 
         the format is a useful means of organizing information, and text consisting of
          questions and their answers may thus be called an FAQ regardless of whether the
           questions are actually frequently asked. <br/><br/> While the name may be recent,
            the FAQ format itself is quite old. For example, <a href="/wiki/Matthew_Hopkins" title="Matthew Hopkins">Matthew Hopkins</a> wrote <i>The Discovery of Witches</i> in 1647 as a list of questions and answers, introduced as "Certain Queries answered". Many old <a href="/wiki/Catechism" 
         title="Catechism">catechisms</a> are in a question-and-answer (Q&amp;A) format. `
        );
      }
    }
  }, [quill]);

  return (
    <div className='max-w-2xl mx-auto my-10 '>
      <div
        className='w-full h-11 rounded-t-lg
       bg-gray-600 flex justify-start
        items-center space-x-1.5 px-3'
      >
        <span
          className='w-3 h-3 rounded-full bg-red-400 icon'
          onClick={() => console.log('red')}
        ></span>
        <span
          className='w-3 h-3 rounded-full bg-yellow-400 icon'
          onClick={() => console.log('yellow')}
        ></span>
        <span
          className='w-3 h-3 rounded-full bg-green-400 icon'
          onClick={() => console.log('green')}
        ></span>
        <h1 className='text-white'> {task}</h1>
        <div>{moment(date).calendar()}</div>
      </div>

      {true && (
        <main className='bg-gray-300 border-t-0 w-full h-96'>
          <article className='text-gray-700 text-center'>
            <div className='w-[100%] h-[100%] mx-auto border-0 outline-none bg-gray-300 '>
              <div ref={quillRef} className='text-2xl' />
            </div>
          </article>
        </main>
      )}
    </div>
  );
};

export default Window;
