const config = {
  content: ["./frontend/**/*.{html,js,svelte,ts}"],

  theme: {
    
    extend: {
			colors: {
        'dark-m' : '#111312',
        'white-m' : '#f1f2f2'
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
