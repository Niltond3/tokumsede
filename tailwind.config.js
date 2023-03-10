/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
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
        xxl: '5rem'
      },
      fontFamily: {
        title: ['Josefin Sans', 'sans-serif']
      },
      colors: {
        primary: {
          default: '#1971BD',
          dark: '#232D3D',
          contrast: '#B9C9DA'
        },
        secondary: {
          default: '#1767AC',
          dark: '#0F122A',
          contrast: '#D2DFEE'
        },
        tertiary: {
          default: '#3088D4',
          dark: '#37404F',
          contrast: '#D2DFEE'
        },
        warning: '', //pendente
        accept: '', //aceito
        sent: '', //enviado
        success: '', //Entregue
        danger: '', //Cancelado
        wait: '' //Agendado
      }
    }
  },
  plugins: []
};
