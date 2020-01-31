let path = require('path');

let conf = {
    entry: { video: './src/js/video.js',
        ajaxShowMe: './src/js/ajaxShowMe.js'},
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test:/\.js$/,
            }
        ]
    }
};

module.exports = conf;