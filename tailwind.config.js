/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        fontFamily: {
            'cinzel': ['Cinzel', 'sans-serif'],
            'overpass': ['Overpass', 'sans-serif'],
          },
        colors: {
            'primary': 'rgb(161, 0, 3)',
            'secondary': '#ff7849',
            'tertiary': '#13ce66',
            'dark': '#273444',
            'light': '#d3dce6',
        },
        animation: {
            blob: "blob 7s infinite"
        },
        keyframes: {

            blob: {
                "0%": {
                    transform: "translate(0px, 0px) scale(1)"
                },
                "20%": {
                    transform: "translate(30px, -50px) scale(1.2)"
                },
                "40%": {
                    transform: "translate(-20px, 20px) scale(1.4)"
                },
                "60%": {
                    transform: "translate(-10px, 10px) scale(1.3)"
                },
                "80%": {
                    transform: "translate(-5px, 5px) scale(1.1)"
                },
                "80%": {
                    transform: "translate(0px, 0px) scale(1.0)"
                }
            }
        }
      }
    },
    plugins: []
  };