import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const content = t('about.content');

  const renderParagraph = (text: string) => {
    // Simple markdown parser for bold text
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-24 md:py-32">
        <div className="max-w-4xl w-full bg-black bg-opacity-60 p-8 md:p-12 rounded-xl backdrop-blur-sm">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">
            {t('about.title')}
          </h1>
          
          <div className="text-white space-y-6">
            {content.map((paragraph: string, index: number) => (
              <p 
                key={index} 
                className="text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: renderParagraph(paragraph) }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;