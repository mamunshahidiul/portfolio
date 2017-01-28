var gulp = require('gulp');
var sass = require('gulp-sass');

var
	src = 'node_modules/',
	dest = 'public/';

// Copy required files
gulp.task('copy', function() {
	gulp.src([
			src + 'bootstrap-sass/assets/fonts/bootstrap/*',
			src + 'font-awesome/fonts/*'
		])
		.pipe(gulp.dest(dest + 'fonts'))
		
	gulp.src([src + 'bootstrap-sass/assets/javascripts/*'])
		.pipe(gulp.dest(dest + 'js'))
});

// Compile SASS
gulp.task('styles', function() {
    gulp.src('assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});

//Watch task
gulp.task('watch',function() {
	gulp.watch('assets/sass/**/*.scss',['styles']);
});

gulp.task('default', ['copy', 'styles']);