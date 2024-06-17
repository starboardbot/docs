import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import starlightLinksValidator from 'starlight-links-validator';
import { links, } from './src/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://starboardbot.github.io',
	base: '/docs',
	markdown: {
		rehypePlugins: [
			rehypeHeadingIds,
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'wrap',
					properties: {
						tabIndex: -1,
						class: 'heading-link',
					},
				},
			],
		],
	},
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
					label: 'About',
					autogenerate: {
						directory: '/about/',
					},
				},
				{
					label: 'Guides',
					autogenerate: {
						directory: '/guides/',
					},
				},
				{
					label: 'Settings',
					autogenerate: {
						directory: '/settings/',
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
					label: 'Leaderboard',
					autogenerate: {
						directory: '/leaderboard',
					},
				},
				{
					label: 'Legal',
					autogenerate: {
						directory: '/legal',
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
						{
							label: 'Invite Starboard',
							link: links.invite,
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
						src: 'https://unpkg.com/twemoji@14.0.2/dist/twemoji.min.js',
						crossorigin: 'anonymous',
						defer: true,
					},
				},
				{
					tag: 'script',
					content: 'window.addEventListener(\'load\', () => {console.log(\'loaded\'); twemoji.parse(document.body, {\'base\':\'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/\'})})',
				},
			],
			components: {
				Pagination: './src/components/Pagination.astro',
			},
			plugins: [starlightLinksValidator()],
		}),
		tailwind({ applyBaseStyles: false }),
	],
	redirects: {
		'/guides/getting-started': '/docs/about/getting-started',
	},
});
