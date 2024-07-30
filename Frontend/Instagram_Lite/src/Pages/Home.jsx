import React from 'react';
import DesktopNav from '../Components/headers/DesktopNav/DesktopNav';
import MobileNav from '../Components/headers/MobileNav/MobileNav';

export default function Home() {
  return (
    <div className="home w-full min-h-screen">
      <div className="w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
        {/* sidebar  */}
        <div className="lg:w-[18%] sm:w-none md:w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block sm:hidden md:block hidden">
          <DesktopNav></DesktopNav>
        </div>
        <div className="w-full h-auto py-1 px-3 border-t border-t-[#1d1d1d] fixed bottom-0 left-0 lg:hidden md:hidden sm:block z-50">
          <MobileNav></MobileNav>
        </div>
        {/* bottom navbar  */}
        {/* feeds sections  */}
      </div>
    </div>
  );
}
