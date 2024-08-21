/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        // Change the default text color to your desired color
        'text-default': '#333333', 
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};