import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './SliderImage.css'

const images = [
  'https://cdn.shopify.com/s/files/1/2501/6068/files/Sterling_New_2022_1110x333_2220x666_2x_v2_2200x660_crop_top.jpg?v=1661132089',
  'https://cdn.shopify.com/s/files/1/2501/6068/files/Heavy_Metal_1110x333_2220x666_2x_02bca8eb-ef8d-4ab9-ad0f-2c8018471a28_2200x660_crop_top.jpg?v=1660544517',
  'https://cdn.shopify.com/s/files/1/2501/6068/files/Last_Piece_Collection_1110x333_2220x666_2x_308d95b6-ed68-4a39-8e9b-4ee2164077d2_2200x660_crop_top.jpg?v=1659952619',
  'https://cdn.shopify.com/s/files/1/2501/6068/files/Artist_Signature_Guitars_1110x333_2220x666_2x_f78f202b-cdee-4b45-8147-d2c766844a8a_2200x660_crop_top.jpg?v=1658127259',
]

function SliderImage() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className='h-44 rounded-md sm:h-64 md:h-72 '>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        organicArrows={false}
        transitionDelay={3000}
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