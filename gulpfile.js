var gulp = require('gulp'),
	path = require('path'),
	browserify = require('browserify'),
	stringify = require('stringify'),
	rename = require('gulp-rename'),
	prefix = require('gulp-autoprefixer'),
    base64 = require('gulp-base64'),
	sourcemaps = require('gulp-sourcemaps'),
	buffer = require('vinyl-buffer'),
	transform = require('vinyl-transform'),
	source = require('vinyl-source-stream'),
	uglify = require('gulp-uglify'),
	less = require('gulp-less'),
    cleancss = require('gulp-minify-css');

var paths = {
	appEntryPoint: './blagApp/app.js',
	appOutputFile: 'app.bundle.js',
	appOutputFileMin: 'app.bundle.min.js',
	appOutputDir: './public/scripts/',
	appFiles: ['./blagApp/**/*.js', './blagApp/**/*.html'],
	
	styleEntryFile: './styles/blag.less',
	styleOutputDir: './public/styles/',
	styleOutputFile: 'blag.css',
	lessFiles: './styles/**/*.less'
};

function errorHandler(error) {
	console.log('\n\t' + error.message + '\n');
	this.emit('end');
};

gulp.task('less', function() {
    return gulp.src(paths.styleEntryFile)
    	.pipe(sourcemaps.init())
        .pipe(less({ dumpLineNumbers: 'comments' }))
        .on('error', errorHandler)
        .pipe(prefix({ browsers: ["last 2 versions", "> 1%", "ie 8"] }))
        .pipe(base64({
            baseDir: '.',
            extensions: ['svg', 'gif', 'png', 'jpg'],
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styleOutputDir));
});

gulp.task('cleancss', ['less'], function() {
    return gulp.src(path.join(paths.styleOutputDir, paths.styleOutputFile))
        .pipe(cleancss())
        .pipe(rename(function(path) { path.extname = ".min.css"; }))
        .pipe(gulp.dest(paths.styleOutputDir));
});

gulp.task('browserify', function() {
	var globalShim = require('browserify-global-shim').configure({
		'angular': 'angular'
	});

	return browserify({
		entries: paths.appEntryPoint,
		debug: true
	}).transform(stringify(['.html'])).transform(globalShim).bundle().on('error', errorHandler).pipe(source(paths.appOutputFile)).pipe(buffer()).pipe(sourcemaps.init({
		loadMaps: true
	})).pipe(sourcemaps.write({
		sourceRoot: '/'
	})).pipe(gulp.dest(paths.appOutputDir));
});

gulp.task('uglify', ['browserify'], function() {
	return gulp.src(path.join(paths.appOutputDir, paths.appOutputFile)).pipe(uglify({
		mangle: false
	})).pipe(rename(paths.appOutputFileMin)).pipe(gulp.dest(paths.appOutputDir));
});

gulp.task('build', ['less', 'cleancss', 'browserify', 'uglify']);

gulp.task('watch', ['build'], function() {
	gulp.watch(paths.appFiles, ['build']);
	gulp.watch(paths.lessFiles, ['less']);
});

gulp.task('default', ['build']);