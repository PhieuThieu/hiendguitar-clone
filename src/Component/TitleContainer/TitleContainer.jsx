import React from 'react';
import Title from "./Title/Title";
import Description from "./Description/Description";

function TitleContainer({title, description, titleStyle, descriptionStyle, className}) {
  return (
    <div className={className}>
      <Title className={`${titleStyle}`} element={title}/>
      <Description className={`${descriptionStyle}`} element={description}/>
    </div>
  );
}

export default TitleContainer;