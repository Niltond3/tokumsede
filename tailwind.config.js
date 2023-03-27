/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'intro-menu': {
          '100%': { opacity: '.5', transform: 'translate(0)' }
        },
        'hover-here': {
          '0%, 100%': {
            transform: 'translateX(-30%) rotate(-15deg)'
          },
          '50%': {
            transform: 'translateX(0) rotate(0deg)'
          }
        }
      },
      animation: {
        'intro-menu': '0.4s ease-in-out 0.1s intro-menu',
        'hover-here': 'hover-here 1.4s infinite'
      },
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
        current: 'currentColor',
        primary: {
          default: '#B9C9DA',
          dark: '#232D3D',
          'contrast-df': '#1F4A6A',
          'contrast-dk': '#D2DFEE',
          'select-df': '#001D3D',
          'select-dk': '#0ea5e9'
        },
        secondary: {
          default: '#1767AC',
          dark: '#0F122A',
          'contrast-df': '#D2DFEE',
          'contrast-dk': '#D2DFEE',
          'select-df': '#FFFFFF',
          'select-dk': '#0ea5e9'
        },
        tertiary: {
          default: '#3088D4',
          dark: '#1D3B55',
          'contrast-df': '#D2DFEE',
          'contrast-dk': '#D2DFEE',
          'select-df': '#FFFFFF',
          'select-dk': '#38BCF7'
        },
        warning: '', //pendente
        accept: '', //aceito
        sent: '', //enviado
        success: '', //Entregue
        danger: '', //Cancelado
        wait: '' //Agendado
      },
      backgroundImage: {
        'menu-corner': "url('../../public/images/corner.svg')",
        'menu-corner-dark': "url('../../public/images/corner-dark.svg')"
      },
      content: {
        right: 'url("../../public/images/icons/right.svg")',
        hashtag: 'url("../../public/images/icons/hashtag.svg")'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    plugin(({ addVariant, addUtilities, theme }) => {
      addVariant('child', '&>*');
      addUtilities({
        '.transition-slow': {
          transition: 'all 1s ease-out'
        },
        '.transition-fast': {
          transition: 'all 0.5s ease-out'
        },
        '.transition-faster': {
          transition: 'all 0.3s ease-out'
        }
      });
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
