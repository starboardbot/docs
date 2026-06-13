import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/postcss";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import starlightLinksValidator from "starlight-links-validator";
import { links } from "./src/config";

// https://astro.build/config
export default defineConfig({
	site: "https://starboardbot.github.io",
	base: "/docs",
	markdown: {
		rehypePlugins: [
			rehypeHeadingIds,
			[
				rehypeAutolinkHeadings,
				{
					behavior: "wrap",
					properties: {
						tabIndex: -1,
						class: "heading-link",
					},
				},
			],
		],
	},
	integrations: [
		starlight({
			title: "Starboard",
			favicon: "favicon.png",
			social: [
				{
					icon: "discord",
					href: links.support,
					label: "Discord",
				},
				{
					icon: "github",
					href: links.github,
					label: "Github",
				},
				{
					icon: "patreon",
					href: links.premium,
					label: "Patreon",
				},
			],
			sidebar: [
				{
					label: "About",
					items: [
						{
							autogenerate: {
								directory: "/about/",
							},
						},
					],
				},
				{
					label: "Guides",
					items: [
						{
							autogenerate: {
								directory: "/guides/",
							},
						},
					],
				},
				{
					label: "Settings",
					items: [
						{
							autogenerate: {
								directory: "/settings/",
							},
						},
					],
				},
				{
					label: "Filters",
					items: [
						{
							autogenerate: {
								directory: "/filters",
							},
						},
					],
				},
				{
					label: "Overrides",
					items: [
						{
							autogenerate: {
								directory: "/overrides",
							},
						},
					],
				},
				{
					label: "Leaderboard",
					items: [
						{
							autogenerate: {
								directory: "/leaderboard",
							},
						},
					],
				},
				{
					label: "Legal",
					items: [
						{
							autogenerate: {
								directory: "/legal",
							},
						},
					],
				},
				{
					label: "Links",
					items: [
						{
							label: "Support Server",
							link: links.support,
						},
						{
							label: "Vote for Starboard",
							link: links.topGG,
						},
						{
							label: "Starboard Premium",
							link: links.premium,
						},
						{
							label: "Invite Starboard",
							link: links.invite,
						},
					],
				},
			],
			customCss: ["./src/styles/global.css", "@fontsource-variable/lexend"],
			head: [
				{
					tag: "script",
					attrs: {
						src: "https://unpkg.com/twemoji@14.0.2/dist/twemoji.min.js",
						crossorigin: "anonymous",
						defer: true,
					},
				},
				{
					tag: "script",
					content:
						"window.addEventListener('load', () => {console.log('loaded'); twemoji.parse(document.body, {'base':'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/'})})",
				},
			],
			components: {
				Pagination: "./src/components/Pagination.astro",
			},
			plugins: [
				starlightLinksValidator({
					errorOnRelativeLinks: false,
				}),
			],
			markdown: {
				headingLinks: false,
			},
		}),
	],
	redirects: {
		"/guides/getting-started": "/docs/about/getting-started",
	},
	vite: {
		css: {
			postcss: {
				plugins: [tailwindcss()],
			},
		},
		//plugins: [tailwindcss()],
	},
});
