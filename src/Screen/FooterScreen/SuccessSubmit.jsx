import React from 'react';

function SuccessSubmit({content, active}) {
  return (
    <div className={`${active ? 'block' : 'hidden'} absolute bg-fade left-0 bottom-0 w-full h-[100vh] flex justify-center items-center`}>
      <h1 className='w-2/3 p-5 bg-secondary-100 text-lg font-medium text-center align-middle rounded-2xl'>{content}</h1>
    </div>
  );
}

export default SuccessSubmit;