import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Box, LineChart, History, Settings, HelpCircle, ShieldAlert, Users, TrendingUp, X } from 'lucide-react';
import { clsx } from 'clsx';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Box, label: 'Inventory', path: '/inventory' },
  { icon: Users, label: 'Departments', path: '/departments' },
  { icon: LineChart, label: 'Analytics', path: '/analytics' },
  { icon: TrendingUp, label: 'Forecasting', path: '/forecasting' },
  { icon: History, label: 'Decision Log', path: '/log' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const footerItems = [
  { icon: HelpCircle, label: 'Documentation', path: '/docs' },
  { icon: ShieldAlert, label: 'Support', path: '/support' },
];

interface SideNavBarProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function SideNavBar({ isOpen, closeMenu }: SideNavBarProps) {
  return (
    <>
      <div 
        className={clsx(
          "fixed inset-0 bg-black/80 z-40 lg:hidden transition-opacity duration-300 backdrop-blur-sm",
          isOpen ? "opacity-100 block" : "opacity-0 hidden pointer-events-none"
        )} 
        onClick={closeMenu} 
      />
      <nav className={clsx(
        "h-full overflow-y-auto w-64 bg-surface border-r border-outline flex flex-col fixed left-0 top-0 z-50 transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 lg:p-10 border-b border-outline flex justify-between items-start">
          <div className="flex flex-col gap-6">
            <div className="logo text-[14px] font-black tracking-[0.2em] uppercase text-white">
              ARCHITECT / 001
            </div>
            <div className="flex items-center gap-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv3UFkv_e2ryJ-Vk2LrrgpBS6eS2x2rTUsuU3bTcikfll6d6T2lX_c_6yU_x5NjwOF6xUk4cRkztlHsDl2AWIS42WaDiFdJv7U8xp_RYWzvfw7wW06Ir3X1q1nd_-inAKYwej-kpLovA2TaM7W-nunvibKkPVwQE61AGXM_DFxVJkXnA91n95KVonLPEJVF1NWkBfJcl7xuTC_ydzKFNF9SBkX74EK4ik25D_aooJA792CctGg2FtLR2iGAQPFSYPPhvkGlAMbCgZr"
                alt="Avatar"
                className="w-10 h-10 grayscale border border-outline"
              />
              <div>
                <h2 className="font-display text-[14px] font-black text-white tracking-widest uppercase leading-none">Elena V.</h2>
                <p className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest mt-1">Lead Analyst</p>
              </div>
            </div>
          </div>
          <button onClick={closeMenu} className="lg:hidden text-on-surface-variant hover:text-white mt-1">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 py-6 lg:py-10">
          <ul className="space-y-0">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => window.innerWidth < 1024 && closeMenu()}
                  className={({ isActive }) =>
                    clsx(
                      'flex items-center gap-4 px-6 lg:px-10 py-4 font-display uppercase text-[11px] font-black tracking-widest transition-all duration-300 border-l-4',
                      isActive
                        ? 'text-primary bg-primary/5 border-primary'
                        : 'text-on-surface-variant hover:text-white hover:bg-surface-container border-transparent'
                    )
                  }
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-outline py-6">
          <ul className="space-y-0">
            {footerItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => window.innerWidth < 1024 && closeMenu()}
                  className="flex items-center gap-4 px-6 lg:px-10 py-3 text-on-surface-variant hover:text-white font-display uppercase font-black tracking-widest transition-all duration-300 text-[11px] hover:bg-surface-container border-l-4 border-transparent"
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
