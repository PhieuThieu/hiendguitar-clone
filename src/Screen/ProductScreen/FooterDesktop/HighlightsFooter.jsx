import React from 'react';
import HighLightsCell from "./HighLightsCell";
import {useSelector} from "react-redux";
import {selectHighlights} from "../../../reduxSlice/footerSlice";
import {nanoid} from "nanoid";

function HighlightsFooter() {
  const highlights = useSelector(selectHighlights)

  return (
    <div className='bg-secondary-100'>
      <div className='grid grid-cols-4 max-w-screen-lg mx-auto p-11'>
        {highlights && highlights.map(highlight => <HighLightsCell key={nanoid()} title={highlight.title} description={highlight.description} paths={highlight.path}/>)}
      </div>
    </div>
  );
}

export default HighlightsFooter;