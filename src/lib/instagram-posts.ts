export type FeaturedInstagramPost = {
  id: string;
  title: { pt: string; en: string };
  author: string;
  image: string;
  href: string;
};

// Hand-picked posts. Update this list when a new selection is provided.
export const featuredInstagramPosts: FeaturedInstagramPost[] = [
  {
    id: 'DdhNY5dxYi1',
    title: { pt: 'Pré-jogo: Santa Cruz × Floresta', en: 'Pre-match: Santa Cruz vs Floresta' },
    author: '@mosaico.esportivo_',
    image: '/instagram/DdhNY5dxYi1.jpg',
    href: 'https://www.instagram.com/p/DdhNY5dxYi1/',
  },
  {
    id: 'DW2biIxDGlk',
    title: { pt: 'Dia do Jornalista', en: 'Journalist Day' },
    author: '@malu.informa',
    image: '/instagram/DW2biIxDGlk.jpg',
    href: 'https://www.instagram.com/p/DW2biIxDGlk/',
  },
  {
    id: 'DWre4xCEfd2',
    title: { pt: 'Visita à redação da TV Globo no Recife', en: 'Visit to TV Globo’s Recife newsroom' },
    author: '@malu.informa',
    image: '/instagram/DWre4xCEfd2.jpg',
    href: 'https://www.instagram.com/p/DWre4xCEfd2/?img_index=1',
  },
  {
    id: 'DVoNOLlkZGE',
    title: { pt: 'Torcida antes de Náutico × Sport', en: 'Fans before Náutico vs Sport' },
    author: '@malu.informa',
    image: '/instagram/DVoNOLlkZGE.jpg',
    href: 'https://www.instagram.com/p/DVoNOLlkZGE/',
  },
];
