import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Starboard',
			social: {
				discord: 'https://discord.gg/rZgxfbH',
				github: 'https://github.com/starboardbot/guide',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: {
						directory: '/guides/'
					}
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
