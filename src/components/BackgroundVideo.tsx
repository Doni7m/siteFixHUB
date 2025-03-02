import React, { useState, useEffect } from 'react';

const BackgroundMedia: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função para verificar o tamanho da tela
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize(); // Checa o tamanho inicial
    window.addEventListener('resize', checkScreenSize); // Adiciona um listener para mudanças

    return () => window.removeEventListener('resize', checkScreenSize); // Remove o listener ao desmontar
  }, []);

  return (
    <>
      {isMobile ? (
        // Exibe o vídeo em dispositivos móveis
        <video
          className="fixed inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source 
            src="https://res.cloudinary.com/doxbp6clc/video/upload/v1740764827/20250228_1743_Dynamic_Tool_Animation_remix_01jn6tfjqbe5atas3g7g117veq_ch5wdw.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        // Exibe a imagem em desktops
        <div 
          className="fixed inset-0 w-full h-full bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('https://res.cloudinary.com/doxbp6clc/image/upload/v1740873850/FixHUBBackSiteGround2_ewo316.jpg')" }}
        />
      )}

      {/* Overlay para efeito escurecido */}
      
      <div className="fixed inset-0 bg-black bg-opacity-50 z-0"></div>
    </>
  );
};

export default BackgroundMedia;
