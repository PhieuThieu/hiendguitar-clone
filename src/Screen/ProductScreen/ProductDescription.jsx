import React from 'react';
import TitleContainer from "../../Component/TitleContainer/TitleContainer";

function ProductDescription({title ,description}) {
  return (
    <div>
      <TitleContainer
        title={title}
        titleStyle='pb-2 pt-6'
        description={description}
      />
    </div>
  );
}

export default ProductDescription;