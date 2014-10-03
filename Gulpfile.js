'use strict';

var gulp    = require('gulp'),
		connect = require('gulp-connect'),
		stylus	= require('gulp-stylus'),
		nib			= require('nib'),
		jshint	= require('gulp-jshint'),
		historyApiFallback = require('connect-history-api-fallback');

 // Server
gulp.task('server', function() {
	connect.server({
		root: 'app',
		hostname: '0.0.0.0',
		port: 9000,
		livereload: true,
		middleware: function(connect, opt) {
			return [ historyApiFallback ];
		}
	});
});

// Search and log JS errors
gulp.task('jshint', function() {
	return gulp.src('./app/js/**/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'));
});

// Process CSS files and reload the web browser
gulp.task('css', function() {
	gulp.src('./app/css/main.styl')
		.pipe(stylus({ use: nib() }))
		.pipe(gulp.dest('./app/css'))
		.pipe(connect.reload());
});

// Reload the web browser when a HTML file changes
gulp.task('html', function() {
	gulp.src('./app/**/*.html')
		.pipe(connect.reload());
});

// Watch file changes
gulp.task('watch', function() {
	gulp.watch(['./app/**/*.html'], ['html']);
	gulp.watch(['./app/css/**/*.styl'], ['css']);
	gulp.watch(['./app/js/**/*.js', './Gulpfile.js'], ['jshint']);
});

gulp.task('default', ['server', 'watch']);