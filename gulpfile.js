const { src,dest } = require('gulp');
const yaml = require('gulp-yaml');

function defaultTask(cb) {
    src('./src/*.yaml')
    .pipe(yaml())
    .pipe(dest('./dist/'))
    cb();
}

exports.default = defaultTask;