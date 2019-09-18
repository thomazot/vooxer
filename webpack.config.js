module.exports = (env, argv) => {
    'use strict'
    const path = require('path')
    const htmlWebpackPlugin = require('html-webpack-plugin')
    const miniCssExtractPlugin = require('mini-css-extract-plugin')
    const glob = require('glob')
    const mode = argv.mode

    const config = {
        entry: {
            app: glob.sync('./src/**/index.js'),
        },
        output: {
            path:
                mode == 'development'
                    ? path.resolve(__dirname, './build')
                    : path.resolve(__dirname, './deploy'),
            filename: '[name].js',
        },
    }

    config.devServer = {
        contentBase: path.resolve(__dirname, 'public'),
        port: 3000,
        open: true,
    }

    const variations = require('./src/core/config.json')
    const global = require('./src/templates/global.json')
    const index = Object.assign(global, variations)

    config.plugins = [
        new miniCssExtractPlugin({
            filename: './[name].css',
        }),
        new htmlWebpackPlugin({
            template: './src/templates/index.pug',
            inject: true,
            templateParameters: index,
        }),
        new htmlWebpackPlugin({
            filename: 'services.html',
            template: './src/templates/services.pug',
            inject: true,
            templateParameters: index,
        }),
        new htmlWebpackPlugin({
            filename: 'corredores.html',
            template: './src/templates/servicesCorredores.pug',
            inject: true,
            templateParameters: index,
        }),
        new htmlWebpackPlugin({
            filename: 'obras.html',
            template: './src/templates/servicesObras.pug',
            inject: true,
            templateParameters: index,
        }),
        new htmlWebpackPlugin({
            filename: 'mineracao.html',
            template: './src/templates/servicesMineracao.pug',
            inject: true,
            templateParameters: index,
        }),
        new htmlWebpackPlugin({
            filename: 'agricultura.html',
            template: './src/templates/servicesAgricultura.pug',
            inject: true,
            templateParameters: index,
        }),
        new htmlWebpackPlugin({
            filename: 'multifinalidades.html',
            template: './src/templates/servicesMultifinalidades.pug',
            inject: true,
            templateParameters: index,
        }),
        new htmlWebpackPlugin({
            filename: 'help.html',
            template: './src/templates/help.pug',
            inject: true,
            templateParameters: index,
        }),
        new htmlWebpackPlugin({
            filename: 'midia.html',
            template: './src/templates/midia.pug',
            inject: true,
            templateParameters: index,
        }),
        new htmlWebpackPlugin({
            filename: 'post.html',
            template: './src/templates/post.pug',
            inject: true,
            templateParameters: index,
        }),
        new htmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/templates/contact.pug',
            inject: true,
            templateParameters: index,
        }),
        new htmlWebpackPlugin({
            filename: 'partners.html',
            template: './src/templates/partners.pug',
            inject: true,
            templateParameters: index,
        }),
    ]

    config.resolve = {
        extensions: ['.js', 'jsx', '.json', '.styl'],
        alias: {
            Snippets: path.resolve(__dirname, './src/snippets'),
            Core: path.resolve(__dirname, './src/core'),
        },
    }

    config.module = {
        rules: [
            {
                test: /\.svg$/,
                use: ['svg-sprite-loader', 'svgo-loader'],
            },
            {
                test: /\.pug?$/,
                use: {
                    loader: 'pug-loader',
                    options: {
                        root: path.resolve(__dirname, 'src'),
                    },
                },
            },
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: [
                        [
                            '@babel/plugin-transform-modules-commonjs',
                            {
                                allowTopLevelThis: true,
                            },
                        ],
                        '@babel/plugin-transform-runtime',
                        '@babel/plugin-syntax-dynamic-import',
                    ],
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
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
                                    grid: true,
                                }),
                            ],
                        },
                    },
                ],
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
                                    grid: true,
                                }),
                                // mode == 'development' ? false : require('cssnano')({
                                //     zindex: false
                                // })
                            ],
                        },
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            import: path.resolve(
                                __dirname,
                                './src/core/variations.styl'
                            ),
                        },
                    },
                ],
            },
        ],
    }

    return config
}
