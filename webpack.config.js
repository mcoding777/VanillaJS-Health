const path = require('path'); // 절대 경로
const htmlPlugin = require('html-webpack-plugin'); // html 플러그인 추가
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // clean 플러그인 추가

module.exports = {
    mode: 'development', // 개발 모드는 development, 배포 모드는 production
    entry: './src/index.js', // 번들링할 파일
    output: {
        filename: 'main.js', // 번들링 결과 파일
        path: path.resolve(__dirname, 'build'), // 번들링 결과 파일이 담길 폴더
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  },
                },
            },
            {
                test: /\.css$/, // 모든 css 파일을 지칭함
                use: ['style-loader', 'css-loader'], // 뒤에서부터 순서대로 적용
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: [/\.jpg$/, /\.png$/], // /\.(jpg|png)$/
                use: ['file-loader'],
            },

        ],
    },
    plugins: [
        new htmlPlugin({
        template: './src/index.html', // index.html 파일의 템플릿 그대로 html 번들링
        }),
        new CleanWebpackPlugin(),
    ],
}