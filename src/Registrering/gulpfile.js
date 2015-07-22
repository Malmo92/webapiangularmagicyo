'use strict'

var gulp = require('gulp');
var browserSync = require('browser-sync');
var inject = require('gulp-inject');
var fileSort = require('gulp-angular-filesort');
var reload = browserSync.reload;

gulp.task('default', ['serve'], function() {
	
});

gulp.task('inject', function() {
    var sources = gulp.src(['./Scripts/**/*.js'], {read: true})
        .pipe(fileSort());
    
    return gulp.src('./Scripts/index.html')
        .pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('./Scripts'));
});

gulp.task('serve', function() {
	browserSync({
        server: {
            baseDir: 'Scripts'
        }
    });
    
    gulp.watch(['**/*.html', '**/*.css', '**/*.js'], {cwd: 'Scripts'}, reload);
});