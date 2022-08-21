import React from 'react';
import Description from "../TitleContainer/Description/Description";
import Title from "../TitleContainer/Title/Title";

function ReverseTitleContainer({title, description, titleStyle, descriptionStyle, className}) {
    return (
      <div className={className}>
        <Description className={`${descriptionStyle}`} element={description}/>
        <Title className={`${titleStyle}`} element={title}/>
      </div>
    );
  }

export default ReverseTitleContainer;