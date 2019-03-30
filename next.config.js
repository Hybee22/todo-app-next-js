const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
module.exports = withCSS(withSass({
    webpack (config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|jpeg|svg|gif|eot|tff|woff|woff2)$/,
            use: {
               loader: 'url-loader',
            options: {
                limit: 10000
            }
        }
        })
        return config
    }
}));
