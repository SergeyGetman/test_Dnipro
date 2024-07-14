const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
    addWebpackModuleRule({
        test: /\.svg$/,
        use: ['@svg/webpack']
    })
);