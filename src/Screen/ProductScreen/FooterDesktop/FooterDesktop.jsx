import React from 'react';
import MainFooter from "./MainFooter";
import HighlightsFooter from "./HighlightsFooter";

function FooterDesktop() {
  return (
    <div className='lg:block hidden'>
      <HighlightsFooter/>
      <MainFooter/>
    </div>
  );
}

export default FooterDesktop;