var gulp = require('gulp');
var shell = require('gulp-shell');
var clean = require('gulp-clean');
const filter = require('gulp-filter');
var htmlreplace = require('gulp-html-replace');

// Building

gulp.task('clean-distribution', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('build-distribution', ['clean-distribution'], shell.task('jspm bundle-sfx app/boot dist/build.js --minify --no-mangle'));

gulp.task('copy-sources', ['clean-distribution'], function() {
    return gulp.src('index.html')
        .pipe(htmlreplace({
            'production': '<script src="build.js"></script>',
            'basetag': '<base href="/dashboard/">',
            'development': ''
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('copyJSPMResources', ['clean-distribution'], function() {
    const f = filter(['**/*.otf', '**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2']);

    return gulp.src('jspm_packages/**/*')
        .pipe(f)
        .pipe(gulp.dest('dist/jspm_packages'));
});

gulp.task('build', ['build-distribution', 'copy-sources', 'copyJSPMResources']);

gulp.task('default', ['build']);