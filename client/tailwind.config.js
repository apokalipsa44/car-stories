const plugins = require('tailwind-react-ui/plugins')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss/lib/plugins/container')({}),
    ...Object.keys(plugins).map(name => plugins[name]()),
  ],
}
