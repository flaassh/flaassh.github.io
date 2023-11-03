import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Flash의 블로그`,
		siteUrl: `https://flaassh.github.io`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-styled-components",
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 860,
						},
					},
					"gatsby-remark-autolink-headers",
				],
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./contents/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "posts",
				path: "./contents/posts/",
			},
			__key: "posts",
		},
		{
			resolve: "gatsby-omni-font-loader",
			options: {
				enableListener: true,
				preconnect: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
				web: [
					{
						name: "Noto Sans KR",
						file: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600&display=swap",
					},
				],
			},
		},
	],
};

export default config;
