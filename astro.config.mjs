import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://starboardbot.github.io',
	base: '/docs',
	integrations: [
		starlight({
			title: 'Starboard',
			favicon: 'favicon.png',
			social: {
				discord: 'https://discord.gg/rZgxfbH',
				github: 'https://github.com/starboardbot/docs',
				patreon: 'https://patreon.com/TheNoob27',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: {
						directory: '/guides/',
					},
				},
				{
					label: 'Links',
					items: [
						{
							label: 'Support Server',
							link: 'https://discord.gg/rZgxfbH',
						},
						{
							label: 'Vote for Starboard',
							link: 'https://top.gg/bot/655390915325591629/vote',
						},
						{
							label: 'Starboard Premium',
							link: 'https://patreon.com/TheNoob27',
						},
					],
				}
			],
			customCss: ['./src/tailwind.css'],
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://unpkg.com/twemoji@latest/dist/twemoji.min.js',
						crossorigin: 'anonymous',
					},
				},
				{
					tag: 'script',
					content: 'window.addEventListener(\'load\', () => {console.log(\'loaded\'); twemoji.parse(document.body)})'
				},
			],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
