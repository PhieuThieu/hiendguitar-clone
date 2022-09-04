import React from 'react';
import {nanoid} from "nanoid";

function SgvIcon({paths, viewBox, sgvStyle}) {
  return (
    <svg className={`${sgvStyle} h-8 w-8 text-tertiary inline-block align-middle`} viewBox={viewBox}>
      <g>
        {paths.map(path => <path key={nanoid()} fillRule="evenodd" d={path}/>)}
      </g>
    </svg>
  );
}

export default SgvIcon;