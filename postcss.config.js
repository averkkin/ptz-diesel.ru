module.exports = {
    plugins: [
        require('autoprefixer'), // Добавляет префиксы (-webkit-)
        require('cssnano')({     // Умное сжатие
            preset: 'default',
        }),
    ],
};