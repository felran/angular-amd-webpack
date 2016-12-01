/**
 * Created by luoran on 2016/12/1.
 */
var webpack = require('webpack');
module.exports = {
//页面入口文件配置
    entry: [
        'main.js'
    ],
//入口文件输出配置
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['', '.js', '.json', '.scss']
    }
}