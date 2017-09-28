var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
    devtool: 'cheap-eval-source-map',
    entry:{
       index: "./src/js/index.js",
       list: "./src/js/list.js"
    },
    output:{
        path: path.resolve(__dirname,"./build/"),
        filename:"js/[name].js",
        //publicPath:""
    },
    module:{
        rules:[{
            test:/\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./index.html",//原来页面位置
            title:"首页",//title值
            filename:"index.html",//配置生成页面
            inject:true,// 是否自动插入
            chunks:["index"],//配置页面js
            minify:{//压缩html
                //removeAttributeQuotes: true,
                removeComments:true,
                collapseWhitespace:true
            }
        }),
        new HtmlWebpackPlugin({
            template:"./pages/list.html",
            title:"列表",
            filename:"pages/list.html",
            inject:true,
           chunks:["list"],
            minify:{
                //removeAttributeQuotes: true,
                removeComments:true,
                collapseWhitespace:true
            }
        })
    ],
    devServer:{
        historyApiFallback: true,
        hot: true,
        open: true,
        inline: true,
        port: 3000,
        proxy:{
            "/*":{
                "target": "http://47.94.87.218:8989",
                "secure": false
            }
        }
    }




}