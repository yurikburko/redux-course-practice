var path = require('path')
var webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.js$/, 
                include: [
                    path.resolve(__dirname, "src"),
                ],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        plugins: [ 'transform-runtime', 'react-hot-loader/babel' ]
                    }

                }]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                include: [
                    path.resolve(__dirname, "src"),
                ]
            }
        ]
    }
}