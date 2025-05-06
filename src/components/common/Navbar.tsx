import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Home, 
  Activity, 
  Award, 
  User, 
  Gift, 
  Menu, 
  X, 
  Globe,
  Car
} from 'lucide-react';
import { useUser } from '../../context/UserContext';
import { useLanguage } from '../../context/LanguageContext';
import Avatar from './Avatar';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navItems = [
    { path: '/', label: t('nav.home'), icon: <Home size={20} /> },
    { path: '/insurance', label: t('nav.insurance'), icon: <Shield size={20} /> },
    { path: '/vehicles', label: t('nav.vehicles'), icon: <Car size={20} /> },
    { path: '/safety', label: t('nav.safety'), icon: <Activity size={20} /> },
    { path: '/rewards', label: t('nav.rewards'), icon: <Gift size={20} /> },
    { path: '/leaderboard', label: t('nav.leaderboard'), icon: <Award size={20} /> },
    { path: '/profile', label: t('nav.profile'), icon: <User size={20} /> },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const activePath = location.pathname;

  const navLinkClasses = (path: string) => {
    const isActive = path === '/' ? activePath === path : activePath.startsWith(path);
    return `flex items-center gap-2 py-2 px-4 rounded-lg transition-colors
      ${isActive 
        ? 'bg-primary-100 text-primary-700 font-medium' 
        : 'text-neutral-600 hover:bg-neutral-100'}`;
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-30 shadow-sm lg:hidden">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-2">
            <Shield className="text-primary-600 h-6 w-6" />
            <span className="font-bold text-lg text-primary-600">Tu Guardian</span>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg text-neutral-500 hover:bg-neutral-100"
            >
              <Globe size={20} />
              <span className="sr-only">Toggle Language</span>
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-neutral-500 hover:bg-neutral-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <nav 
        className={`fixed top-[56px] bottom-0 bg-white w-64 z-40 transition-transform duration-300 ease-in-out shadow-lg lg:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 py-6 px-3 overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={navLinkClasses(item.path)}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
          
          {user && (
            <div className="p-3 border-t border-neutral-200">
              <div className="flex items-center space-x-3 px-3 py-2">
                <Avatar src={user.avatar} alt={user.name} size="sm" />
                <div className="text-sm font-medium">{user.name}</div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex fixed top-0 left-0 bottom-0 w-64 flex-col bg-white border-r border-neutral-200 z-20">
        <div className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center space-x-2">
            <Shield className="text-primary-600 h-6 w-6" />
            <span className="font-bold text-xl text-primary-600">Tu Guardian</span>
          </div>
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg text-neutral-500 hover:bg-neutral-100"
          >
            <Globe size={20} />
            <span className="sr-only">Toggle Language</span>
          </button>
        </div>
        
        <div className="flex-1 py-6 px-3 overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navLinkClasses(item.path)}
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
        
        {user && (
          <div className="p-3 border-t border-neutral-200">
            <div className="flex items-center space-x-3 px-3 py-2">
              <Avatar src={user.avatar} alt={user.name} size="sm" />
              <div className="text-sm font-medium">{user.name}</div>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 flex z-30 lg:hidden">
        {navItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex-1 flex flex-col items-center justify-center py-2 text-xs"
            style={({ isActive }) => ({
              color: isActive ? '#2563EB' : '#4B5563',
            })}
          >
            {item.icon}
            <span className="mt-1">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;