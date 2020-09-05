const path = require('path');
// 引入生成预览画面的插件对象
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    // 指定要用到的模板文件
    template: './src/index.html',
    // 指定生成的文件的名称,该文件存在于内存中,在目录中不显示
    filename: 'index.html'
})

module.exports = {
    // 指定编译模式
    mode: 'development',
     // 打包入口文件的路径
    entry: path.join(__dirname, './src/index.js'),
    output: {
        // 输出文件的存放路径
        path: path.join(__dirname, './dist'),
        // 输出文件的名称
        filename: 'bundle.js'
    },
    // 添加生成预览页面的插件
    plugins: [htmlPlugin],
    // 打包
    module: {
        rules: [
            // test 后面对应着正则表达式
            // use 后面表示要使用的打包模块
            { test: /\.css$/,use:['style-loader', 'css-loader'] },
            // 添加 .less文件的打包规则
            { test: /\.less$/,use:['style-loader', 'css-loader', 'less-loader'] },
            // 添加 .scss文件的打包规则
            { test: /\.scss$/,use:['style-loader', 'css-loader', 'sass-loader'] }
        ]
    }
}