import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import starlightLinksValidator from 'starlight-links-validator';
import { links, } from './src/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://starboardbot.github.io',
	base: '/docs',
	integrations: [
		starlight({
			title: 'Starboard',
			favicon: 'favicon.png',
			social: {
				discord: links.support,
				github: links.github,
				patreon: links.premium,
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: {
						directory: '/guides/',
					},
				},
				{
					label: 'Filters',
					autogenerate: {
						directory: '/filters',
					},
				},
				{
					label: 'Overrides',
					autogenerate: {
						directory: '/overrides',
					},
				},
				{
					label: 'Links',
					items: [
						{
							label: 'Support Server',
							link: links.support,
						},
						{
							label: 'Vote for Starboard',
							link: links.topGG,
						},
						{
							label: 'Starboard Premium',
							link: links.premium,
						},
					],
				}
			],
			customCss: [
				'./src/tailwind.css',
				'@fontsource-variable/lexend',
			],
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
					content: 'window.addEventListener(\'load\', () => {console.log(\'loaded\'); twemoji.parse(document.body, {\'base\':\'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/\'})})'
				},
			],
			components: {
				Pagination: './src/components/Pagination.astro',
			},
			plugins: [starlightLinksValidator()],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
