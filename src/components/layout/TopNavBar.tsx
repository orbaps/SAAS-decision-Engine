import { Search, Bell, Settings, Menu } from 'lucide-react';

interface TopNavBarProps {
  toggleMenu: () => void;
}

export default function TopNavBar({ toggleMenu }: TopNavBarProps) {
  return (
    <header className="bg-surface border-b border-outline h-16 lg:h-24 flex items-center justify-between px-4 lg:px-10 sticky top-0 z-30 w-full">
      <div className="flex items-center gap-4 lg:gap-12 flex-1">
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-white hover:text-primary transition-colors p-2 -ml-2"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-[16px] md:text-[20px] lg:text-[24px] font-black tracking-[-0.05em] text-white uppercase font-display leading-none truncate">
          SYSTEM_STATE <span className="text-primary hidden sm:inline">/ LIVE</span>
        </h1>
        <div className="hidden lg:flex relative flex-1 max-w-sm border-b border-outline focus-within:border-primary transition-all duration-300">
          <Search className="absolute left-0 bottom-2 text-on-surface-variant" size={16} />
          <input
            type="text"
            placeholder="ACCESS_REGISTRY..."
            className="w-full bg-transparent border-none text-white focus:ring-0 pl-7 pb-2 pt-2 font-mono text-[12px] placeholder:text-on-surface-variant uppercase tracking-widest font-bold"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-8">
        <button className="hidden sm:block bg-primary text-black font-display font-black text-[11px] uppercase px-4 lg:px-8 py-2 lg:py-3 hover:bg-white transition-all duration-300 transform active:scale-95 tracking-widest">
          RUN_ANALYSIS
        </button>
        <button className="lg:hidden text-on-surface-variant hover:text-primary transition-colors">
          <Search size={20} />
        </button>
        <div className="flex items-center gap-4 lg:gap-6 text-on-surface-variant">
          <button className="hover:text-primary transition-colors duration-200">
            <Bell size={20} />
          </button>
          <button className="hidden sm:block hover:text-primary transition-colors duration-200">
            <Settings size={20} />
          </button>
        </div>
        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-surface-container border border-outline p-1 grayscale group hover:grayscale-0 transition-all cursor-pointer flex-shrink-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6YrkR0cpc5bznx4cmZOPcwaKUc72PjmB8SXPrB1qMXwJf3tOM85VG4ru8sQ5QblvjQKAS2Fp8ExnRJvimjfTjarey2edMNTW0cZTk-V3vrNnry1rCC3FPcCy0bTQd1S4Szkv0-LwPtnvDfLpG3ZxYrYVWq9JQGaG7RU0de-fLa3f6tLmZ6oxz6r7qDMhtFGhalBe7ro015B_St2igCvTDLQsBTk4iARqBTaJ0ZIwAMLuaEL-p-DeWzo9sqYZM_vX65QC-AurMFfd9"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
