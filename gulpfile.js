var gulp = require('gulp'),
	path = require('path'),
	browserify = require('browserify'),
	stringify = require('stringify'),
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	buffer = require('vinyl-buffer'),
	transform = require('vinyl-transform'),
	source = require('vinyl-source-stream'),
	uglify = require('gulp-uglify');

var paths = {
	appEntryPoint: './blagApp/app.js',
	appOutputFile: 'app.bundle.js',
	appOutputFileMin: 'app.bundle.min.js',
	outputDir: './public/scripts/',
	appFiles: ['./blagApp/**/*.js', './blagApp/**/*.html'],
};

function errorHandler(error) {
	console.log('\n\t' + error.message + '\n');
	this.emit('end');
};

gulp.task('browserify', function() {
	var globalShim = require('browserify-global-shim').configure({
		'angular': 'angular'
	});

	return browserify({
		entries: paths.appEntryPoint,
		debug: true
	}).transform(globalShim).transform(stringify(['.html'])).bundle().on('error', errorHandler).pipe(source(paths.appOutputFile)).pipe(buffer()).pipe(sourcemaps.init({
		loadMaps: true
	})).pipe(sourcemaps.write({
		sourceRoot: '/'
	})).pipe(gulp.dest(paths.outputDir));
});

gulp.task('uglify', ['browserify'], function() {
	return gulp.src(path.join(paths.outputDir, paths.appOutputFile)).pipe(uglify({
		mangle: false
	})).pipe(rename(paths.appOutputFileMin)).pipe(gulp.dest(paths.outputDir));
});

gulp.task('build', ['browserify', 'uglify']);

gulp.task('watch', ['build'], function() {
	gulp.watch(paths.appFiles, ['build']);
});

gulp.task('default', ['build']);