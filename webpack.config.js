const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        polyfills: "./src/polyfills.ts",
        main: "./src/app.ts"
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    devtool: "source-map",
    devServer: {
        historyApiFallback: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                    'angular-router-loader',
                    'angular2-template-loader'
                  ],
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    esModule: false,
                },
            },
{
    test: /\.scss$/,
    use: [
        {
            loader: "raw-loader",
            options: {
                esModule: false,
            }
        },
        {
            loader: "sass-loader",
            options: {
                sourceMap: true,
            },
        },
    ],
},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body",
            scriptLoading: "blocking"
        })
    ]
};