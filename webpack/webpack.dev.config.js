const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const parentDir = path.join(__dirname,'../')
module.exports = {
    mode: "development",
    entry: [
        path.join(__dirname, '../src/index.js')
    ],
    module :{
        rules: [{
            test: /\.js$/,
            exclude:/node_modules/,
            use:{
                loader: 'babel-loader',
                options:{
                    presets:["@babel/preset-env","@babel/preset-react"],
                },
            }
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }
        ]
    },
    output:{
        path:parentDir + 'dist',
        filename:'bundle.js'
    },
    devServer:{
        static: parentDir + 'src', 
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: parentDir + "src/index.html"
        })
    ]
}