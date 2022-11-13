/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      // padding: '1.4rem'
      padding: {
        DEFAULT: '1.4rem',
        '2xl': '7rem'
      }
    },
    extend: {
      fontFamily: {
        sans: "'Work Sans', sans-serif",
        cascadia: 'Cascadia Code'
      },
      colors: {
        do: {
          blue: {
            dark: '#080c2d',
            'medium-dark': '#1d274c',
            medium: 'rgb(20, 86, 255)',
            light: 'rgb(0, 105, 255)',
            lighter: '#f9fafe'
          }
        }
      },
      boxShadow: {
        input: '0 5px 1px 0 rgb(0, 0, 0, 0.1)',
        'input-focus': '0 2px 1px 0 rgb(0, 0, 0, 0.1)'
      },
      width: {
        88: '22rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
