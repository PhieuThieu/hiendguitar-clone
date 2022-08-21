import React from 'react';

function CheckRadio({className, content, checked, name}) {
  return (
    <div className={`${className} grid grid-cols-8`}>
      <div className="col-span-7 mr-auto">{content}</div>
      <input name={name} className='col-span-1 h-5 accent-tertiary my-auto' type="radio" defaultChecked={checked}/>
    </div>
  );
}

export default CheckRadio;