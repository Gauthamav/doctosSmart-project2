import React from 'react';
import Logo from '../assets/logo-doctosmart.png';
const Header = () => {
  return (
    <div className='w-full  shadow-2xl  bg-white'>
      <div className="flex justify-between items-center  h-[100px] max-w-full w-[95%] mx-auto">
        <img className="h-12" width={150} height={10} src={Logo}></img>
        <ul className="flex items-center gap-10">
          <li>Home</li>
          <li>Service</li>
          <li>Contact</li>
          <li>Booking</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
