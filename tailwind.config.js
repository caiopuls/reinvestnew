module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        boxShadow: {
          '2xl': '0px 2px 47px 4px #F3F2FC',
        }
      },
    },
    variants: {
      extend: {},
    },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}