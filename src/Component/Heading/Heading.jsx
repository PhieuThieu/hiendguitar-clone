import React from 'react';
import BackArrow from "./BackArrow";
import ScreenTitles from "./ScreenTitles";
import {useDispatch} from "react-redux";
import {clearInfo} from "../../reduxSlice/productSlice";
import {useNavigate} from "react-router-dom";

function Heading({title, path, image, child, noBackArrow}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(clearInfo())
    navigate(-1)
  }

  return (
    <div className='fixed top-0 z-10 bg-primary w-full p-5'>
      <div className="flex relative justify-center">
        {!noBackArrow && <BackArrow onClick={handleClick} link={path}/>}
        <ScreenTitles title={title} image={image} child={child}/>
      </div>
    </div>
  );
}

export default Heading;