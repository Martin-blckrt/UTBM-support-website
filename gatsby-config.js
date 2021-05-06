module.exports = {

    siteMetadata: {
        title: "UTBM FAQ"
    },

    proxy: {
        prefix: "/data",
        url: "http://localhost:1337",
    },

    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-emotion`,
            options: {
                // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
                // The values for each key in this example are the defaults the plugin uses.
                sourceMap: true,
                autoLabel: "dev-only",
                labelFormat: `[local]`,
                cssPropOptimization: true,
            },
        },
        {
            resolve: `gatsby-plugin-nodejs`,
            options: {
                prefixes: ['/restricted/*']
            },
        },
    ],
};
