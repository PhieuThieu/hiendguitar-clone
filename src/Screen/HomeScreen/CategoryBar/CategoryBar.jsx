import React from 'react';
import Btn from "./Btn";
import {useSelector} from "react-redux";
import {selectBtn, selectCategory} from "../../../reduxSlice/categorySlice";
import {nanoid} from "nanoid";

function CategoryBar() {
  const category = useSelector(selectCategory)
  const btn = useSelector(selectBtn)

  return (
    <div className='my-5 h-10 w-full block overflow-x-scroll overflow-y-hidden whitespace-nowrap lg:hidden'>
      {category.map(btnName => {
        if (btnName === btn.name) {
          return <Btn key={nanoid()} name={btnName} active={btn.active}/>
        }
        return <Btn key={nanoid()} name={btnName}/>
      })}
    </div>
  );
}

export default CategoryBar;