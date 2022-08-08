import React from 'react';
import '../../../App.css'

function Btn({name, active}) {

  return (
    <button onClick={() => name} className={active ? active : 'btn'}>
      {name}
    </button>
  );
}

export default Btn;
