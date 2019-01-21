const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const main = {
    entry: {
        main: './src/main.ts'
    },
    target: 'electron-main',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/',
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    node: {
        __dirname: false
    }
}

const renderer = {
    entry: {
        renderer: './src/renderer.ts'
    },
    target: 'electron-renderer',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/',
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './src/index.html',
                to: 'index.html',
                toType: 'file'
            }
        ])
    ],
    node: {
        __dirname: false
    }
}

module.exports = [main, renderer];