const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry : './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle..js'
    },
    module: {
        rules: 
        [
            { 
              test: /\.scss$/, 
              use: [
                  {loader: 'style-loader'},
                  {
                      loader: 'css-loader',
                      options: {
                          modules: true
                      }
                },
                {loader: 'sass-loader'}
            ]
            },
            { 
                test: /\.js$/,
                exclude : /node_modules/,
                use: 'babel-loader'
            }
        ]},
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Demo test',
            template: './src/index.html'
          })
    ]
} 