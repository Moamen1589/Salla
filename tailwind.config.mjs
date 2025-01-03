/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main_Color: '#baf3e6',
        second_Color: '#76E8CD',
        third_color: '#777'
      },
    backgroundColor: {
      sideColor: '#00414d',
      hoverdBg: '#003c47'
    },
    borderColor: {
      color: '#eee'
    }
  },
},
plugins: [],
};
