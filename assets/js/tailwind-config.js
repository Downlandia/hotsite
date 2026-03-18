// Configuração compartilhada do Tailwind para o site Downlândia
// É carregada antes do CDN do Tailwind em todas as páginas.

tailwind = tailwind || {};
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#018BD3',
        'brand-green': '#4DB42F',
        'brand-pink': '#EA516D',
        'brand-navy': '#253B87',
        'brand-black': '#000000',
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand-offset-blue': '6px 6px 0 #018BD3',
        'brand-offset-green': '6px 6px 0 #000000',
        'brand-offset-pink': '6px 6px 0 #000000',
      },
    },
  },
};

