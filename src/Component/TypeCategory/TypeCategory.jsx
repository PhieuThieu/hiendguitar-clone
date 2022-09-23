import React from 'react';
import Title from "../TitleContainer/Title/Title";
import {useDispatch, useSelector} from "react-redux";
import {clicked, selectBtn} from "../../reduxSlice/categorySlice";
import {nanoid} from "nanoid";
import Description from "../TitleContainer/Description/Description";

function TypeCategory({category, itemQuantity}) {
  const btn = useSelector(selectBtn)
  const dispatch = useDispatch()

  const handleClick = (name) => {
    dispatch(clicked({name, active:'btn-active'}))
  }


  return (
    <div className='col-span-1 mr-2 hidden lg:block'>
      <div className="px-2 pb-1 border-b border-secondary-300">
        <Title element='TYPE'/>
      </div>
      <div className="mb-2">
        {category.map((btnName, index) => {
          if (btnName === btn.name) {
            return <div key={nanoid()} className='flex justify-between py-2'>
              <label className='flex pr-auto font-bold'>
                <input type='radio' name='category' key={nanoid()} className='accent-tertiary' defaultChecked={btn.active}/>
                <Description className='ml-1 hover:underline hover:font-bold' element={btnName}/>
              </label>
              <Description element={`(${itemQuantity[index] || 0})`}/>
            </div>
          }
          return <div onClick={() => handleClick(btnName)} key={nanoid()} className='flex justify-between py-2'>
            <label className='flex'>
              <input type='radio' name='category' className='accent-tertiary' key={nanoid()} />
              <Description className='ml-1 hover:underline hover:font-bold' element={btnName}/>
            </label>
            <Description element={`(${itemQuantity[index] || 0})`}/>
          </div>
        })}
      </div>
    </div>
  );
}

export default TypeCategory;
