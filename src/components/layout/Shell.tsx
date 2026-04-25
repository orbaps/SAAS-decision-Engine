import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import SideNavBar from './SideNavBar';
import TopNavBar from './TopNavBar';

export default function Shell() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-bg relative">
      <div className="hidden lg:flex fixed top-0 right-10 h-full items-center pointer-events-none z-50">
        <div className="writing-mode-vertical transform rotate-180 font-mono text-[9px] text-on-surface-variant tracking-[0.5em] uppercase opacity-40">
          CORE_INTERFACE_SYSTEM // DEPLOYED_STABLE_V1.0.4
        </div>
      </div>
      
      <SideNavBar isOpen={isMobileMenuOpen} closeMenu={() => setIsMobileMenuOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        <TopNavBar toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        <main className="flex-1 p-4 md:p-8 lg:p-[60px] overflow-auto relative max-w-full">
          <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-outline via-transparent to-outline opacity-20 hidden lg:block" />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
