/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        none: '0px',
        xxs: '0.125rem',
        xs: '0.25rem',
        s: '0.5rem',
        m: '1rem',
        l: '2rem',
        xl: '4rem',
        xxl: '5rem',
        xxxl: '13rem'
      },
      fontFamily: {
        title: ['Josefin Sans', 'sans-serif']
      },
      colors: {
        primary: {
          default: '#B9C9DA',
          dark: '#232D3D',
          contrast: '#1971BD'
        },
        secondary: {
          default: '#1767AC',
          dark: '#0F122A',
          contrast: '#D2DFEE'
        },
        tertiary: {
          default: '#3088D4',
          dark: '#1D3B55',
          contrast: '#D2DFEE'
        },
        warning: '', //pendente
        accept: '', //aceito
        sent: '', //enviado
        success: '', //Entregue
        danger: '', //Cancelado
        wait: '' //Agendado
      },
      opacity: {}
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('child', '&>*');
    })
  ]
};
