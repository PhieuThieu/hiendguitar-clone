import React from 'react';
import Title from "../../Component/TitleContainer/Title/Title";
import CountQuantityButton from "../../Component/CountQuantityButton/CountQuantityButton";
import SubmitButton from "../../Component/SubmitButton/SubmitButton";

function ProductFooter() {
  return (
    <div className='p-5 shadow-top'>
      <div className="flex justify-between">
        <CountQuantityButton  className='w-20 gap-x-2'/>
        <Title element='USD 4,577.99'/>
      </div>
      <SubmitButton name='Add to Cart'/>
    </div>
  );
}

export default ProductFooter;