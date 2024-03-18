import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        monserat: ['Montserrat', 'sans-serif'],
        nextArt: ['Next Art', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'slider-bg-1': 'url("/src/assets/images/slider-bg-1.jpg")',
      },
      colors: {
        'custom-green': '#85A080',
        'custom-gray': '#F1F3F1',
        'text-green': '#C2F1C9',
        'custom-black': '#262626',
        'link-color': '#18171780',
        'button-color': '#A06BF7',
        'second-link-color': '#858584',
        'white-default': '#FFFFFF',
        'border-color': '#8C8B8B',
        'number-color': '#B16BF766',
        'card-color': '#DEDEDE',
        'secondary-button-color': '#B3C833',
        'footer-info': '#8B8B8B'
      },
    },
  },
  plugins: [],
};
export default config;
