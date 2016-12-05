// Dependencies
var gulp = require('gulp');
var plumber = require('gulp-plumber');
//Server dependencies
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
//Website dependencies
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var minifyHtml = require("gulp-minify-html");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('minify-html', function () {
    return gulp.src('views/*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('build'));
});

gulp.task('compile-css', function () {
    return gulp.src('styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('styles.css'))
        .pipe(minify())
        .pipe(gulp.dest('build'))
});

gulp.task('minify-js', function(){
    return gulp.src(['node_modules/tiny.js/dist/tiny.js', 'chico/dist/ui/chico.js', 'scripts/*.js'])
        .pipe(concat('final-script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('chico/dist/ui'));
});

gulp.task('generate-final-css', ['compile-css'], function () {
    return gulp.src(['build/styles.css', 'chico/dist/ui/chico.css'])
        .pipe(concat('final-style.css'))
        .pipe(gulp.dest('chico/dist/ui'));
});

gulp.task('default', ['minify-html', 'compile-css', 'generate-final-css', 'minify-js'], function() {
	// listen for changes
	livereload.listen();
	// configure nodemon
	nodemon({
		// the script to run the app
		script: 'app.js',
		ext: 'js'
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('app.js')
			.pipe(livereload())
			.pipe(notify('Reloading page, please wait...'));
	});
});