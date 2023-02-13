const config = {
  content: ["./frontend/**/*.{html,js,svelte,ts}"],

  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
			colors: {
          'black-800' : '#081110',
          'black-900' : '#040d0c'
			},
			fontFamily: {
				// 'noto-sans': ['Noto-sans', 'sans-serif'],
				// roboto: ['Roboto', 'sans-serif'],
				// montserrat: ['Montserrat', 'sans-serif'],
				// montserratAlt: ['Montserrat Alternates', 'sans-serif']
				// // some are unused
			}
		}
  },

  plugins: [],
}

module.exports = config
