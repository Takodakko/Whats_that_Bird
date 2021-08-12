const path = require('path');
module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader", 
                    "css-loader", 
                ]
            }
        ]
    },
    devServer: {
        hot: true,
        publicPath: '/build/',
        port: 8080,
        proxy: {
            '/sightings': 'http://localhost:3000',
            '/getBirds': 'http://localhost:3000',
            // '/': 'http://localhost:3000',
        }
    },
};