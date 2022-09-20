/** @type {import('tailwindcss').Config} */
function dynamicHsl(h, s, l) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(${h}, ${s}, ${l}, ${opacityValue})`
    }
    if (opacityVariable !== undefined) {
      return `hsla(${h}, ${s}, ${l}, var(${opacityVariable}, 1))`
    }
    return `hsl(${h}, ${s}, ${l})`
  }
}


module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], 
    theme: {
      container: {
        center: true,
        padding: "0rem",
        screens: {
          xs: "375px",
          sm: '600px',
          md: '728px',
          lg: '1440px',
          xl: '1440px',
          
        },
      },
      extend: {
        fontFamily: ['Outfit', 'sansSerif'],
        colors: {
          "brand-white": dynamicHsl('var(--color-white-h)', 'var(--color-white-s)', 'var(--color-white-l)'),
          "brand-lightgray": dynamicHsl('var(--color-lightgray-h)', 'var(--color-lightgray-s)', 'var(--color-lightgray-l)'),
          "brand-blue": dynamicHsl('var(--color-blue-h)', 'var(--color-blue-s)', 'var(--color-blue-l)'),
          "brand-darkblue": dynamicHsl('var(--color-darkblue-h)', 'var(--color-darkblue-s)', 'var(--color-darkblue-l)'),

        },
      

      },
     
  },
  plugins: [],
}
