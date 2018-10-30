'use strict';

const gulp = require('gulp');
const path = require('path');
const gulpTypescript = require ('gulp-typescript');
const gulpSourcemaps = require('gulp-sourcemaps');

// TODO: externalize


const tsProject = gulpTypescript.createProject('./tsconfig.json');

gulp.task('compile', function() {
    return tsProject.src()
    .pipe(gulpSourcemaps.init())
    .pipe(tsProject())
    .pipe(gulpSourcemaps.write('.', {
        sourceRoot: './',
        includeContent: false
    }))
    .pipe(gulp.dest('dist'));
});

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled rejection at: Promise', p, 'reason:', reason);
    process.exit(1);
})