// tailwind.config.cjs
const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	darkMode: false,
	// theme: {
	// 	colors: {
	// 		white: colors.white,
	// 		gray: colors.warmGray,
	// 		'svelte-prime': '#ff5030'
	// 	}
	// },
	theme: {
		backgroundColor: (theme) => ({
			...theme('colors')
			// primary: '#3490dc',
			// secondary: '#ffed4a',
			// danger: '#e3342f'
		})
	},
	variants: {
		extend: {}
	},
	plugins: []
};
