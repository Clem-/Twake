const defaultTheme = require('tailwindcss/defaultTheme');

let shades = [];
['slate', 'red', 'orange', 'green', 'blue'].map(color => {
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => {
    shades.push(`bg-${color}-${shade}`);
    shades.push(`text-${color}-${shade}`);
  });
});

module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        xl: '24px',
        lg: '16px',
        md: '10px',
      },
      fontSize: {
        lg: '17px',
        base: '15px',
        sm: '13px',
        xs: '11px',
      },
    },
  },
  safelist: ['bg-green-500', 'bg-red-500', 'bg-orange-500', ...shades],
  plugins: [require('@tailwindcss/forms')],
};