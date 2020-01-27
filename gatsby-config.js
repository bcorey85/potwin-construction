module.exports = {
	siteMetadata: {
		title: `Potwin Construction`,
		description: `High quality custom home remodeling in Lincoln, Nebraska. Rain, snow, or shine, we’ll be there to help transform your home into a comfortable reality. `,
		author: `Potwin Construction`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `potwin-construction`,
				short_name: `potwin-construction`,
				start_url: `/`,
				background_color: `#221f7a`,
				theme_color: `#221f7a`,
				display: `minimal-ui`,
				icon: `src/images/potwin-construction-favicon.png`
			}
		},
		`gatsby-plugin-sass`
	]
};
