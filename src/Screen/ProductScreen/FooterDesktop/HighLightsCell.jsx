import React from 'react';
import TitleContainer from "../../../Component/TitleContainer/TitleContainer";
import SgvIcon from "../../../Component/SgvIcon/SgvIcon";

function HighLightsCell({title, description, paths}) {

  return (
    <div className='m-3.5'>
      <div className="flex justify-center items-center">
        <div className="p-5 border rounded-full border-secondary-600 p-7 mb-2 bg-primary">
          <SgvIcon viewBox="0 0 40 40" paths={paths}/>
        </div>
      </div>
      <TitleContainer title={title} description={description} titleStyle='text-center' descriptionStyle='text-center'/>
    </div>
  );
}

export default HighLightsCell;