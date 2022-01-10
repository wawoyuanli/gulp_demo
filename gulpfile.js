/**引入gulpapi */
const { series, parallel, src, dest } = require('gulp')
//引入babel 转译es6
const babel = require('gulp-babel')
//压缩js
const uglify = require('gulp-uglify')
//压缩 css
const minicss = require('gulp-minify-css')
//删除dist文件夹
const del = require('del')


const html = () => {
    return src(['src/index.html']).pipe(dest('dist/'))
}
const pages = () => {
    return src('src/pages/*.html')
        .pipe(dest('dist/pages'))
}

const babelToes5 = () => {
    return src('src/utils/*.js')
        .pipe(babel({
            presets: ['babel-preset-env']
        }))
        .pipe(uglify())
        .pipe(dest('dist/utils'))
}
const deletDist = (cb) => {
    del(['dist'], cb());
}

module.exports = {
    babelToes5,
    html,
    deletDist,
    pages
}
module.exports.default = series(deletDist, parallel(babelToes5, html,pages)) 