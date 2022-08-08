import React from 'react';
import Description from "../TitleContainer/Description/Description";
import Title from "../TitleContainer/Title/Title";

function ReverseTitleContainer({title, description, titleStyle, descriptionStyle, className}) {
    return (
      <div className={className}>
        <Description style={`${descriptionStyle}`} element={description}/>
        <Title style={`${titleStyle}`} element={title}/>
      </div>
    );
  }

export default ReverseTitleContainer;