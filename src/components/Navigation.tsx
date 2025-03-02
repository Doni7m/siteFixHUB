import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navigation: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  return (
    <div className="absolute top-4 left-4 z-20 flex gap-4">
      <Link
        to="/"
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          location.pathname === '/'
            ? 'bg-white text-black'
            : 'bg-black bg-opacity-30 text-white hover:bg-opacity-50'
        }`}
      >
        {t('navigation.home')}
      </Link>
      <Link
        to="/about"
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          location.pathname === '/about'
            ? 'bg-white text-black'
            : 'bg-black bg-opacity-30 text-white hover:bg-opacity-50'
        }`}
      >
        {t('navigation.about')}
      </Link>
    </div>
  );
};

export default Navigation;