import React from 'react';

function SubmitButton({name}) {
  return (
    <div className='mt-5'>
      <button className='w-full bg-tertiary text-primary rounded-lg h-8'>{name}</button>
    </div>
  );
}

export default SubmitButton;