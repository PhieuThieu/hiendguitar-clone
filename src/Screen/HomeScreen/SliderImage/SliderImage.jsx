import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './SliderImage.css'
const images =[
  {
    original: 'https://my-test-11.slatic.net/p/fd69e9e69aa292d2cc1600682e55653a.jpg',
  },
  {
    original: 'https://pbs.twimg.com/media/FJlWVTmVEAMOp3d.jpg:large',
  },
  {
    original: 'https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images-medium-5/fender-precision-bass-patent-drawing-from-1953-aged-pixel.jpg',
  },
]



function SliderImage(props) {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className='h-52 rounded-md '>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        internval={6000}
        organicArrows={false}
        transitionDelay={500}
        buttons={false}
      >
        <div className="">
          <img className='object-fill rounded-md h-full w-full absolute top-0 left-0	' src="https://my-test-11.slatic.net/p/fd69e9e69aa292d2cc1600682e55653a.jpg" alt=""/>
        </div>
        <div className="">
          <img className='object-fill rounded-md h-full w-full absolute top-0 left-0	' src="https://pbs.twimg.com/media/FJlWVTmVEAMOp3d.jpg:large" alt=""/>
        </div>
        <div className="">
          <img className='object-fill rounded-md h-full w-full absolute top-0 left-0	' src="https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images-medium-5/fender-precision-bass-patent-drawing-from-1953-aged-pixel.jpg" alt=""/>
        </div>
      </AutoplaySlider>
    </div>
  );
}

export default SliderImage;