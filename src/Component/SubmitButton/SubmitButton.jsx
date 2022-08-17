import React from 'react';

function SubmitButton({name, type, onClick}) {
  return (
    <div className='mt-5'>
      <button onClick={onClick} type={type} className='w-full bg-tertiary text-primary rounded-lg h-10'>{name}</button>
    </div>
  );
}

export default SubmitButton;