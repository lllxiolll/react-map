const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry : './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle..js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test demo',
            minify: {
                collapseWhitespace: true
            },
            template: './src/index.html'
          })
    ]
} 