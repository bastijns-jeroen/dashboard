var gulp = require('gulp');
var runSequence = require('run-sequence');
var git = require('gulp-git');
var shell = require('gulp-shell');
var clean = require('gulp-clean');
const filter = require('gulp-filter');
var htmlreplace = require('gulp-html-replace');

gulp.task('clean-distribution', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('build-distribution', ['clean-distribution'], shell.task('jspm bundle-sfx app/boot dist/build.js --minify --no-mangle'));

gulp.task('copy-sources', ['clean-distribution'], function() {
    return gulp.src('index.html')
        .pipe(htmlreplace({
            'production': '<script src="build.js"></script>'
        }))
        .pipe(htmlreplace({
            'development': ''
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('copyJSPMResources', ['clean-distribution'], function() {
    const f = filter(['**/*.ttf', '**/*.woff', '**/*.woff2']);

    return gulp.src('jspm_packages/**/*')
        .pipe(f)
        .pipe(gulp.dest('dist/jspm_packages'));
});

gulp.task('build', ['build-distribution', 'copy-sources', 'copyJSPMResources']);

gulp.task('commit-changes', function () {
    return gulp.src('dist/**/*')
        .pipe(git.add())
        .pipe(git.commit('deploy new version'));
});

gulp.task('push-changes', function (cb) {
    git.push('origin', 'gh-pages', cb);
});

gulp.task('deploy', function(callback) {
    runSequence(
        'commit-changes',
        'push-changes',
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('DEPLOY FINISHED SUCCESSFULLY');
            }
            callback(error);
        });
});