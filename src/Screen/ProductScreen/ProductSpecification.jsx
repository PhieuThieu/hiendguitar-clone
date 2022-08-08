import React from 'react';
import TitleContainer from "../../Component/TitleContainer/TitleContainer";

function ProductSpecification({description}) {
  return (
    <div>
      <TitleContainer
        title='Product Specification'
        titleStyle='pt-6 pb-2'
        DescriptionStyle='grid grid-2'
        description={description}
      />
    </div>
  );
}

export default ProductSpecification;