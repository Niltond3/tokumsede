/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        'inset-none': '0px',
        'inset-xs': '0.125rem',
        'inset-s': '0.5rem',
        'inset-m': '1rem',
        'inset-l': '3rem',
        'inset-xl': '4rem',
        'stack-none': '0px',
        'stack-xs': '0.125rem',
        'stack-s': '0.5rem',
        'stack-m': '1rem',
        'stack-l': '3rem',
        'stack-xl': '4rem',
        'inline-none': '0px',
        'inline-xs': '0.125rem',
        'inline-s': '0.5rem',
        'inline-m': '1rem',
        'inline-l': '3rem',
        'inline-xl': '4rem'
      }
    }
  },
  plugins: []
};
