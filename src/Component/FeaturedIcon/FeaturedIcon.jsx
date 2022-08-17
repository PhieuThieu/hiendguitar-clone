import React from 'react';
import {Link} from "react-router-dom";


function FeaturedIcon({active, activeType, normalType, name}) {
  return (
    <div className={`${active} px-5 py-1 `}>
      <Link to={name}>
        { active ? activeType : normalType}
      </Link>
    </div>
  );
}

export default FeaturedIcon;