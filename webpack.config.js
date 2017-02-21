 var path = require('path');
module.exports = {
    entry: './src/js/App.jsx',
    output: {
        path: './Public',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: path.join(__dirname, 'src/js'),
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
