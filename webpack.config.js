/**
 * Created by luoran on 2016/12/1.
 */
var webpack = require('webpack');
module.exports = {
//ҳ������ļ�����
    entry: [
        'main.js'
    ],
//����ļ��������
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['', '.js', '.json', '.scss']
    }
}