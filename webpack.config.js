const path = require('path'); //nodejs核心模块，专门用来处理路径问题

module.exports = {
    //入口，相对路径
    entry: './index.js',
    output: {
        //文件的输出路径 绝对路径
        path: path.resolve(__dirname, 'dist'),
        //文件名
        filename: 'main.js',
    },
    //加载器
    module: {
        rules: [
            //loader配置
        ],
    },
    //插件
    plugins: [
        //
    ],
    //模式
    mode: 'production',
};