import React from 'react';
import TitleContainer from "../../Component/TitleContainer/TitleContainer";

function ProductDescription({description}) {
  return (
    <div>
      <TitleContainer
        title='Product Description'
        titleStyle='pb-2 pt-6'
        description={description}
      />
    </div>
  );
}

export default ProductDescription;