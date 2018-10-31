'use strict';

const gulp = require('gulp');
const gulpTypescript = require('gulp-typescript');
const gulpSourcemaps = require('gulp-sourcemaps');
const del = require('del')

// TODO: externalize


const tsProject = gulpTypescript.createProject('./tsconfig.json');

gulp.task('compile', function () {
    return tsProject.src()
        .pipe(gulpSourcemaps.init({loadMaps: true}))
        .pipe(tsProject())
        .pipe(gulpSourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return del([
        "./dist/**/*"
    ])
});

gulp.task('copy', function () {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist/'));
})

gulp.task('default', gulp.series('clean', 'compile', 'copy'));

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled rejection at: Promise', p, 'reason:', reason);
    process.exit(1);
})