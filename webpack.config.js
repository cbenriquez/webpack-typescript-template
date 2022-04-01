module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    target: 'node',
    output: {
        filename: 'index.js',
        path: require('path').resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    watchOptions: {
        ignored: /node_modules/
    }
}