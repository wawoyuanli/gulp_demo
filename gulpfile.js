
const { series, parallel, src, dest } = require('gulp')
const babel = require('gulp-babel')

const html = () => {
    return src('src/index.html').pipe(dest('dist/'))
}

const babelToes5 = () => {
    // { presets: ['@babel/preset-env'] }
    return src('src/utils/*.js')
        .pipe(babel({
            presets: ['babel-preset-env'] 
        }))
        .pipe(dest('dist/utils'))
}

module.exports = {
    babelToes5, html
}
module.exports.default = parallel(babelToes5, html)