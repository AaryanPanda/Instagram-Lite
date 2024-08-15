import React, { useState } from "react";
import LargeNav from "../Components/Headers/DesktopNav/DesktopNav";
import MobileNav from "../Components/Headers/MobileNav/MobileNav";
import TopNav from "../Components/Headers/TopNav/TopNav";
import { Outlet } from "react-router-dom";
import Logout from "../Components/Logout/Logout";
import { useAuth } from '../Context/AuthContext';

const AppLayout = () => {
  const { logout } = useAuth();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const openLogoutModal = () => setIsLogoutModalOpen(true);
  const closeLogoutModal = () => setIsLogoutModalOpen(false);

  const handleLogout = () => {
    logout();
    closeLogoutModal();
  };

  return (
    <div className="home w-full min-h-screen">
      <div className="w-full h-auto flex items-start justify-between md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
        {/* sidebar  */}
        <div className="lg:w-[18%] sm:w-none md:w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block sm:hidden md:block hidden">
          <LargeNav openLogoutModal={openLogoutModal}></LargeNav>
        </div>
        <div className="w-full h-auto py-1 px-3 border-t border-t-[#1d1d1d] fixed bottom-0 left-0 lg:hidden md:hidden sm:block z-50 bg-white">
          <MobileNav></MobileNav>
        </div>
        <div className="w-full h-auto py-1 px-3 border-b border-b-[#1d1d1d] fixed top-0 left-0 lg:hidden md:hidden sm:block z-50 bg-white">
          <TopNav openLogoutModal={openLogoutModal}></TopNav>
        </div>
        <Outlet></Outlet>
      </div>
      {isLogoutModalOpen && (
        <Logout onClose={closeLogoutModal} onConfirm={handleLogout} />
      )}
    </div>
  );
};

export default AppLayout;
