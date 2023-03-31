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
        dk: {
          primary: {
            base: '#232D3D',
            lightest: '#747ECE',
            lighter: '#3F4CB1',
            light: '#1A1F48',
            DEFAULT: '#0F122A',
            dark: '#000001',
            darker: '#000000',
            darkest: '#000000'
          },
          secondary: {
            base: '#BFC4E8',
            lightest: '#518FC4',
            lighter: '#3C7AB0',
            light: '#275073',
            DEFAULT: '#1D3B55',
            dark: '#0F1E2B',
            darker: '#000101',
            darkest: '#000000'
          },
          accent: '#38BDF8',
          success: '#42be65', //Entregue
          warning: '#f1c21b', //pendente
          error: '#fa4d56', //Cancelado
          info: '#4589ff', //Aceito
          sent: '#a56eff', //enviado
          wait: '#8d8d8d' //Agendado
        },
        lg: {
          primary: {
            base: '#e3eefb',
            lightest: '#c1ddf6',
            lighter: '#8bc2ee',
            light: '#4da3e3',
            DEFAULT: '#1767ac',
            dark: '#145590',
            darker: '#154977',
            darkest: '#173e63'
          },
          secondary: {
            base: '#e4eefa',
            lightest: '#c3dcf4',
            lighter: '#8ebfeb',
            light: '#519ddf',
            DEFAULT: '#3088d4',
            dark: '#18518c',
            darker: '#174675',
            darkest: '#193c61'
          },
          accent: '#00b5de',
          success: '#24A148', //Entregue
          warning: '#f1c21b', //pendente
          error: '#DA1E28', //Cancelado
          info: '#0043ce', //Aceito
          sent: '#8a3ffc', //enviado
          wait: '#6f6f6f' //Agendado
        }
      },
      backgroundImage: {
        'menu-corner': "url('../../public/images/corner.svg')",
        'menu-corner-dark': "url('../../public/images/corner-dark.svg')",
        'menu-corner-secondary': "url('../../public/images/corner-secondary.svg')",
        'menu-corner-tertiary': "url('../../public/images/corner-tertiary.svg')"
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    plugin(({ addVariant, addUtilities }) => {
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
        },
        '.center-x': {
          top: '50%',
          '--tw-translate-y': '-50%',
          transform: 'translate(var(--tw-translate-y))'
        },
        '.center-y': {
          left: '50%',
          '--tw-translate-x': '-50%',
          transform: 'translate(var(--tw-translate-x))'
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
