export type Language = 'pt' | 'en' | 'es' | 'fr';

export interface Translations {
  home: {
    mainText: string;
    comingSoon: string;
    contactButton: string;
  };
  about: {
    title: string;
    content: string[];
  };
  navigation: {
    home: string;
    about: string;
  };
}