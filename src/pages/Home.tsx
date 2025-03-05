import React from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Content */}
<<<<<<< HEAD
      <div className="relative z-10 h-screen flex flex-col items-center px-4 text-center">
        
        {/* Logo */}
        <img 
          src="https://res.cloudinary.com/doxbp6clc/image/upload/v1740877048/FixHUBicon_kkumbr.png" 
          alt="FixHUB Logo" 
          className="absolute top-[10%] w-24 md:w-32"
        />

        <h1 className="absolute top-[25%] text-white text-3xl md:text-5xl font-bold mb-6 max-w-3xl">
          {t('home.mainText')}
        </h1>
        <p className="absolute top-[40%] text-white text-xl md:text-3xl font-semibold">
=======
      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 max-w-3xl">
          {t('home.mainText')}
        </h1>
        <p className="text-white text-xl md:text-3xl font-semibold">
>>>>>>> f514ce9 (adicionado ao googles)
          {t('home.comingSoon')}
        </p>
      </div>
      
      {/* Contact Button */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <a 
          href="mailto:suporte@fixhub.pt" 
          className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 font-medium"
        >
          <Mail size={20} />
          {t('home.contactButton')}
        </a>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> f514ce9 (adicionado ao googles)
