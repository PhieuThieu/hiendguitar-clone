import React from 'react';
import Social from "../../../Component/Social/Social";
import FooterCredits from "../../../Component/FooterCredits/FooterCredits";
import PaymentAccepted from "../../../Component/PaymentAccepted/PaymentAccepted";

function MainFooter() {
  return (
    <div className=' bg-tertiary'>
      <div className="py-12 max-w-screen-lg mx-auto">
        <Social/>
        <hr className='w-full border-b border-secondary-500 my-12'/>
        <div className="px-2 grid grid-cols-2">
          <FooterCredits/>
          <PaymentAccepted/>
        </div>
      </div>
    </div>
  );
}

export default MainFooter;