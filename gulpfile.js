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
	appEntryPoint: './blagApp/blog/app.js',	
	appOutputFile: 'app.bundle.js',
	appOutputFileMin: 'app.bundle.min.js',
	
	adminAppEntryPoint: './blagApp/admin/app.js',	
	adminAppOutputFile: 'adminApp.bundle.js',
	adminAppOutputFileMin: 'adminApp.bundle.min.js',

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

//-------------------------
// LESS STuff
//-------------------------

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

//-------------------------
// BROWSERIFY
//-------------------------

function browserifyTask(appEntryPoint, appOutputFile) {
	return function() {
		return browserify({ entries: appEntryPoint, debug: true })
		.transform(stringify(['.html']))
		.bundle()
		.on('error', errorHandler)
		.pipe(source(appOutputFile))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sourcemaps.write({	sourceRoot: '/'}))
		.pipe(gulp.dest(paths.appOutputDir));
	};
}

gulp.task('browserify', browserifyTask(paths.appEntryPoint, paths.appOutputFile));

gulp.task('browserifyAdmin', browserifyTask(paths.adminAppEntryPoint, paths.adminAppOutputFile));

//-------------------------
// UGLIFY
//-------------------------

function uglifyTask(appOutputFile, appOutputFileMin){
	return function() {
		return 
		gulp.src(path.join(paths.appOutputDir, appOutputFile))
		.pipe(uglify({mangle: false}))
		.pipe(rename(appOutputFileMin))
		.pipe(gulp.dest(paths.appOutputDir));
	};
}

gulp.task('uglify', ['browserify'], uglifyTask(paths.appOutputFile, paths.appOutputFileMin));

gulp.task('uglifyAdmin', ['browserifyAdmin'], uglifyTask(paths.adminAppOutputFile, paths.adminAppOutputFileMin));

//-------------------------
// TASK STUFF
//-------------------------

gulp.task('build', ['less', 'cleancss', 'browserify', 'browserifyAdmin','uglify', 'uglifyAdmin']);

gulp.task('watch', ['build'], function() {
	gulp.watch(paths.appFiles, ['build']);
	gulp.watch(paths.lessFiles, ['less']);
});

gulp.task('default', ['build']);