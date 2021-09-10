const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
			sm: { min: '576px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
			md: { min: '898px' }, // Tablet (matches max: iPad Pro @ 1112px).
			lg: { min: '1200px' }, // Desktop smallest.
			xl: { min: '1159px' }, // Desktop wide.
			xxl: { min: '1359px' }, // Desktop widescreen.
		},
		extend: {
			fontFamily: {
				lobster: ['Lobster', ...defaultTheme.fontFamily.sans],
				Dos: ['DOS', ...defaultTheme.fontFamily.mono],
				dejavu: ['DejaVuSansMono', ...defaultTheme.fontFamily.mono],
				dejavuBold: ['DejaVuSansMonoBold', ...defaultTheme.fontFamily.mono],
				// trochut: ['Trochut', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
