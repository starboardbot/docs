import colors from 'tailwindcss/colors';
import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Your preferred accent color. Indigo is closest to Starlight’s defaults.
				accent: colors.starboard,
				// Your preferred gray scale. Zinc is closest to Starlight’s defaults.
				gray: colors.zinc,
				starboard: {
					'50': '#fbfaf3',
					'100': '#f8efba',
					'200': '#f1dc7e',
					'300': '#dbb84d',
					'400': '#bd8e2a',
					'500': '#9e6f15',
					'600': '#81560d',
					'700': '#63400d',
					'800': '#442c0b',
					'900': '#2e1c08',
				},
				brand: '#ecd558',
			},
		},
	},
	plugins: [starlightPlugin()],
};
