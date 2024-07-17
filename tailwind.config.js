/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./home_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      base: "600px",
      md: "868px",
      lg: "1076px",
      xl: "1440px",
  },
  extend: {
      colors: {
          black_50: '#E6E6E6',
          black_100: '#B0B0B0',
          black_200: '#8A8A8A',
          black_300: '#545454',
          black_400: '#333333',
          black_900: '#000000',
          purple_50: '#EFE6FF',
          purple_900: '#5A00FE',
          success: '#22C55E',
          failed: '#FF4747',
          warning: '#FACC15',
      },

      fontSize: {
          xxs: "",
          xs: "0.625rem", //10px
          s: "0.75rem", //12px
          sm: "0.875rem", //14px
          base: "1rem", //16px
          md: "1.125rem", //18px
          lg: "1.25rem", //20px
          xl: "1.5rem", //24px
          xxl: "2rem", //32px
          xxxl: "3rem", //32px
          xxxxl: "4rem", //32px
      },
  },
  },
  plugins: [],
};
