module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'gray-light-form': '#BEBEBE',
        'blue-base' : '#7174E2',
        'body-color': '#F3F3F3',
        'grey-base': '#D8DADF'
      },
      fontSize: {
        '7xl': '8rem',
      },
      height: theme => ({
        "70": "18.5rem",
        "100":"30rem"
        
      }),
    },
  },
  variants: {},
  plugins: [],
}
