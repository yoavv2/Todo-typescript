import { useState, FC } from 'react';

const Input: FC = () => {
  type Drag = {
    active: boolean;
    x: string;
    y: string;
  };

  const [drag, setDrag] = useState<Drag>({
    active: false,
    x: '',
    y: '',
  });

  const [dims, setDims] = useState({
    w: 200,
    h: 200,
  });

  const boxStyle = {
    width: `${dims.w}px`,
    height: `${dims.h}px`,
  };

  const startResize = (e: any): void => {
    setDrag({
      active: true,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const resizeFrame = (e: any): void => {
    const { active, x, y } = drag;
    if (active) {
      const xDiff = Math.abs(Number(x) - e.clientX);
      const yDiff = Math.abs(Number(y) - e.clientY);
      const newW = x > e.clientX ? dims.w - xDiff : dims.w + xDiff;
      const newH = y > e.clientY ? dims.h + yDiff : dims.h - yDiff;

      setDrag({ ...drag, x: e.clientX, y: e.clientY });
      setDims({ w: newW, h: newH });
    }
    console.log(e.clientX, e.clientY);
  };

  const stopResize = (e: Event) => {
    setDrag({ ...drag, active: false });
  };

  return (
    <div
      className='flex h-[100vh] justify-center items-center'
      onMouseMove={resizeFrame}
      onMouseUp={stopResize}
    >
      <div className='bg-red'>
        <button
          onMouseDown={startResize}
          className='bg-white cursor-pointer border-black float-right m-0'
        >
          Size Me
        </button>
      </div>
    </div>
  );
};

export default Input;
