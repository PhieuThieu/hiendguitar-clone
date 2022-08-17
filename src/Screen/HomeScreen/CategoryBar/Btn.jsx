import React from 'react';
import '../../../App.css'
import {useDispatch} from "react-redux";
import {clicked} from "../../../reduxSlice/categorySlice";

function Btn({name, active}) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(clicked({name, active:'btn-active'}))
  }

  return (
    <button onClick={handleClick} className={active ? active : 'btn'}>
      {name}
    </button>
  );
}

export default Btn;
