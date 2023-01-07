import React, { FC, useState, useRef } from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('mas');
  };

  const dropHander = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const LeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const OverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" placeholder="Контролируется " />
      <input value={value} ref={inputRef} type="text" placeholder="Не контролируется " />

      <button onClick={clickHandler}></button>
      <div
        draggable
        onDrag={dragHandler}
        style={{ width: 200, height: 200, background: 'red' }}></div>
      <div
        onDrop={dropHander}
        onDragLeave={LeaveHandler}
        onDragOver={OverHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? 'green' : 'red',
          marginTop: 10,
        }}></div>
    </div>
  );
};

export default EventsExample;
