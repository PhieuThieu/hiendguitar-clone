import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './SliderImage.css'

const images = [
  'https://wildwoodguitars.com/wp-content/uploads/2014/08/prs-wood-library-banner.jpg',
  'https://guitar.com/wp-content/uploads/2018/01/Taylor-PS-Koa-914-v-class-group-2018-min.png',
  'https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images-medium-5/fender-precision-bass-patent-drawing-from-1953-aged-pixel.jpg',
]

function SliderImage() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className='h-44 rounded-md '>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        internval={6000}
        organicArrows={false}
        transitionDelay={500}
        buttons={false}
      >
        {images.map((img, index) => (
          <div key={index}>
            <img className='object-cover rounded-md h-full w-full absolute top-0 left-0	' src={img} alt=""/>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
}

export default SliderImage;