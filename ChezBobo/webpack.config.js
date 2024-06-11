module.exports = {
    module: {
        rules: [
            {
                test: /\.liquid$/,
                use: 'raw-loader'
            }
        ]
    }
}