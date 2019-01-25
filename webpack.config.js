module.exports = (env,argv) => {
    "use strict";
    const path                 = require('path');
    const htmlWebpackPlugin    = require('html-webpack-plugin');
    const miniCssExtractPlugin = require("mini-css-extract-plugin");
    const mode                 = argv.mode;

    const config = {
        entry: {
            app: './src'
        },
        output: {
            path: mode == 'development' ? path.resolve(__dirname, './build') : path.resolve(__dirname, './dist'),
            filename: '[name].js'
        }
    };

    config.devServer = {
        port: 3000,
        open: true
    };

    config.plugins = [
        new miniCssExtractPlugin({
            filename: "./[name].css"
        }),
        new htmlWebpackPlugin({
            template: './src/index.pug',
            inject: true
        })
    ];

    config.resolve = {
        extensions: ['.js', '.json'],
        alias: {
            Snippets: path.resolve(__dirname, './src/snippets'),
            Core: path.resolve(__dirname, './src/core')
        }
    };

    config.module = {
        rules: [
            { 
                test: /\.pug?$/,
                use: ["pug-loader"]
            },
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')({
                                    browsers: ['last 2 versions'],
                                    grid: true
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')({
                                    browsers: ['last 2 versions'],
                                    grid: true
                                }),
                                // mode == 'development' ? false : require('cssnano')({
                                //     zindex: false
                                // })
                            ]
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            import: path.resolve(__dirname, './src/core/variations.styl')
                        }
    
                    }
                ]
            }
        ]
    }

    return config;
};