import React from 'react';
import Title from "./Title/Title";
import Description from "./Description/Description";

function TitleContainer({title, description, titleStyle, descriptionStyle, className}) {
  return (
    <div className={className}>
      <Title style={`${titleStyle}`} element={title}/>
      <Description style={`${descriptionStyle}`} element={description}/>
    </div>
  );
}

export default TitleContainer;