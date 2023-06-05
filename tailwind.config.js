/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'menu-corner': "url('../../public/images/corner.svg')",
        'menu-corner-dark': "url('../../public/images/corner-dark.svg')",
        'menu-corner-secondary': "url('../../public/images/corner-secondary.svg')",
        'menu-corner-tertiary': "url('../../public/images/corner-tertiary.svg')"
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%'
      },
      keyframes: {
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'intro-menu': {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: '.5', transform: 'translateX(0)' }
        },
        'list-open': {
          '0%': { opacity: 0, maxHeight: '0px' },
          '100%': { opacity: 1, maxHeight: '11rem' }
        },
        'list-close': {
          '0%': { opacity: 1, maxHeight: '11rem' },
          '100%': { opacity: 0, maxHeight: '0px' }
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
        // slideIn: 'slideIn .25s ease-in-out forwards var(--delay, 0)',
        opacity: 'opacity .35s ease-in-out forwards 0.1s',
        'intro-menu': 'intro-menu .40s ease-in-out forwards 0.1s',
        'list-open': 'list-open .8s ease-in-out forwards 0.1s',
        'list-close': 'list-close .8s ease-in-out forwards 0.1s',
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
      fontSize: {
        'base-10': '62,5%'
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
          accent: {
            base: '#C7F5FF',
            lightest: '#8AE9FF',
            lighter: '#52DFFF',
            light: '#1AD5FF',
            DEFAULT: '#00B5DE',
            dark: '#0092B3',
            darker: '#006C85',
            darkest: '#00252E'
          },
          success: {
            base: '#CDF4D8',
            lightest: '#97E8AE',
            lighter: '#65DD87',
            light: '#33D160',
            DEFAULT: '#24A148',
            dark: '#1D8139',
            darker: '#0E3F1C',
            darkest: '#041107'
          }, //Entregue
          warning: {
            base: '#FEF9E7',
            lightest: '#F9E7A4',
            lighter: '#F7DB78',
            light: '#F4CF48',
            DEFAULT: '#F1C21B',
            dark: '#CAA10C',
            darker: '#655006',
            darkest: '#181301'
          }, //pendente
          error: {
            base: '#FCE9EA',
            lightest: '#F9D2D4',
            lighter: '#F2A1A5',
            light: '#E6474F',
            DEFAULT: '#DA1E28',
            dark: '#AF1820',
            darker: '#550C0F',
            darkest: '#160304'
          }, //Cancelado
          info: {
            base: '#C2D6FF',
            lightest: '#85ADFF',
            lighter: '#4785FF',
            light: '#0A5CFF',
            DEFAULT: '#0043CE',
            dark: '#0036A3',
            darker: '#00297A',
            darkest: '#000E29'
          }, //Aceito
          sent: {
            base: '#E7D7FE',
            lightest: '#D1B4FE',
            lighter: '#B98CFD',
            light: '#A163FD',
            DEFAULT: '#8A3FFC',
            dark: '#6504F6',
            darker: '#4C03BA',
            darkest: '#33027E'
          }, //Despachado
          wait: {
            base: '#E3E3E3',
            lightest: '#C4C4C4',
            lighter: '#A8A8A8',
            light: '#8C8C8C',
            DEFAULT: '#6F6F6F',
            dark: '#595959',
            darker: '#424242',
            darkest: '#2B2B2B'
          } //Agendado
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-elevation'),
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    plugin(({ addVariant, addUtilities }) => {
      addVariant('child', '&>*');
      addVariant('second', '&:nth-child(2)');
      addVariant('has-open', '&:has(input#open-menu:checked)');
      addVariant('has-checked', '&:has(input:checked)');
      addVariant('pseudos', ':merge(&::before,)&::after');
      addUtilities({
        '.backface-visible': {
          'backface-visibility': 'visible'
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden'
        }
      });
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
          transform: 'translateY(var(--tw-translate-y))'
        },
        '.center-y': {
          left: '50%',
          '--tw-translate-x': '-50%',
          transform: 'translateX(var(--tw-translate-x))'
        },
        '.center': {
          top: '50%',
          left: '50%',
          '--tw-translate-y': '-50%',
          '--tw-translate-x': '-50%',
          transform: 'translate(var(--tw-translate-x),var(--tw-translate-y))'
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
    }),
    plugin(function groupPeer({ addVariant, matchVariant, theme }) {
      let pseudoVariants = [
        // ... Any other pseudo variants you want to support.
        // See https://github.com/tailwindlabs/tailwindcss/blob/6729524185b48c9e25af62fc2372911d66e7d1f0/src/corePlugins.js#L78
        'checked'
      ].map((variant) => (Array.isArray(variant) ? variant : [variant, `&:${variant}`]));

      let normalize = (value, isRoot = true) => {
        const placeholder = '--tw-placeholder';
        const placeholderRe = new RegExp(placeholder, 'g');
        if (value.startsWith('--')) {
          return `var(${value})`;
        }

        // Keep raw strings if it starts with `url(`
        if (value.includes('url(')) {
          return value
            .split(/(url\(.*?\))/g)
            .filter(Boolean)
            .map((part) => {
              if (/^url\(.*?\)$/.test(part)) {
                return part;
              }

              return normalize(part, false);
            })
            .join('');
        }

        // Convert `_` to ` `, except for escaped underscores `\_`
        value = value
          .replace(
            /([^\\])_+/g,
            (fullMatch, characterBefore) =>
              characterBefore + ' '.repeat(fullMatch.length - 1)
          )
          .replace(/^_/g, ' ')
          .replace(/\\_/g, '_');

        // Remove leftover whitespace
        if (isRoot) {
          value = value.trim();
        }

        // Add spaces around operators inside math functions like calc() that do not follow an operator
        // or '('.
        value = value.replace(/(calc|min|max|clamp)\(.+\)/g, (match) => {
          let vars = [];
          return match
            .replace(/var\((--.+?)[,)]/g, (match, g1) => {
              vars.push(g1);
              return match.replace(g1, placeholder);
            })
            .replace(
              /(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,
              '$1 $2 '
            )
            .replace(placeholderRe, () => vars.shift());
        });

        return value;
      };

      for (let [variantName, state] of pseudoVariants) {
        addVariant(`group-peer-${variantName}`, (ctx) => {
          let result = typeof state === 'function' ? state(ctx) : state;
          return result.replace(/&(\S+)/, ':merge(.peer)$1 ~ .group &');
        });
      }
      matchVariant(
        'group-peer-data',
        (value, { modifier }) =>
          modifier
            ? `:merge(.peer\\/${modifier})[data-${normalize(value)}] ~ .group &`
            : `:merge(.peer)[data-${normalize(value)}] ~ .group &`,
        { values: theme('data') ?? {} }
      );
    }),
    plugin(function (helpers) {
      // variants that help styling Radix-UI components
      dataStateVariant('open', helpers);
      dataStateVariant('closed', helpers);
      dataStateVariant('on', helpers);
      dataStateVariant('off', helpers);
      dataStateVariant('checked', helpers);
      dataStateVariant('unchecked', helpers);
      dataOrientationVariant('horizontal', helpers);
      dataOrientationVariant('vertical', helpers);
    })
  ]
};
function dataOrientationVariant(
  state,
  {
    addVariant, // for registering custom variants
    e // for manually escaping strings meant to be used in class names
  }
) {
  addVariant(`data-orientation-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `data-orientation-${state}${separator}${className}`
      )}[data-orientation='${state}']`;
    });
  });
}
function dataStateVariant(
  state,
  {
    addVariant, // for registering custom variants
    e // for manually escaping strings meant to be used in class names
  }
) {
  addVariant(`data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `data-state-${state}${separator}${className}`
      )}[data-state='${state}']`;
    });
  });

  addVariant(`group-data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.group[data-state='${state}'] .${e(
        `group-data-state-${state}${separator}${className}`
      )}`;
    });
  });

  addVariant(`peer-data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.peer[data-state='${state}'] ~ .${e(
        `peer-data-state-${state}${separator}${className}`
      )}`;
    });
  });
}
