// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Make sure this is correct based on your project setup
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#29257d',
        'brand-green': '#20C997',
        'brand-gray': '#F3F4F6',
      },
    },
  },
  plugins: [],
};
