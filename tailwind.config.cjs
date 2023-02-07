const config = {
  content: ["./frontend/**/*.{html,js,svelte,ts}"],

  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
			colors: {
          'dark-800' : '#081110',
          'dark-900' : '#040d0c',
        // 'white-m' : '#f1f2f2'
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
