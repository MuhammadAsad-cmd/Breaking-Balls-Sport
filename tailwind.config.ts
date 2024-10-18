import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'], 
      },
      colors: {
        paleOrange: '#FFDB7E',
        darkGray: '#383434',
        deepBlue: '#152250', 
        skyBlue: '#6BCCEF',   
        customGray: '#BABABA1C',
        DarkBlue:"#10193A",
        lightGray: '#F7F7F7',
        lightGrayAlt: '#DFDFDF',
        darkGrayAlt: '#666666',
        lightGray2: '#D3D3D3',
        paleBlue: '#EDFBFF',
        paleCyan: '#E2F8FF',
        lightGreen: '#9EF99B',
        paleGreen: '#AEFFAC',
        paleGreen2: '#BCFFBA', // 1
        lightGreen2: '#CCFFCB', // 2
        softGreen: '#DAFFD9', // 3
        mintGreen: '#E7FFE5', // 4
        veryLightGreen: '#F4FFF3', // 5
        lightPink: '#FFF3F3', // 6
        softPink: '#FFDFDF', // 7
        lightRed: '#FFC2C2', // 8
        pink: '#FFB9B9', // 9
        mediumPink: '#FFA7A7', // 10
        red: '#FF9090', // 11
        strongRed: '#FE7B7B', // 12
        darkBlue: '#323E66',
        paleGreen3: '#B2FCB0',
      },
    },
  },
  plugins: [],
};
export default config;
