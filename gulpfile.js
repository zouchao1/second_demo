const gulp =require("gulp");
const server=require('gulp-webserver');
const sass=require('gulp-sass');
const webpack=require('webpack-stream');
const imagemin=require('gulp-imagemin');

const config=require('./config');
const { server_config, sass_config, webpack_config } = config;

gulp.task('server',()=>{

		return gulp.src('./dist')
		.pipe(server(server_config))

	
})

gulp.task('copy:html',()=>{
	return gulp.src('./src/**/*.html')
	.pipe(gulp.dest('./dist'));
})
gulp.task('copy:img',()=>{
	gulp.src("./src/**/*.{png,jpg,gif,ico}") 
	.pipe(imagemin())
	.pipe(gulp.dest("./dist"));
})

gulp.task('compile:scss',()=>{
	return gulp.src('./src/css/**/*.scss')
	.pipe(sass(sass_config).on('error',sass.logError))
	.pipe(gulp.dest('./dist/css'));
})
gulp.task('compile:js',()=>{
	return gulp.src('./src/js/**/*.js')
	.pipe(webpack(webpack_config))
	.pipe(gulp.dest('./dist/js'));
})

gulp.task('watch',()=>{
	gulp.watch('./src/**/*.html',['copy:html']);
	gulp.watch('./src/js/**/*',['compile:js']);
	gulp.watch('./src/css/**/*.scss',['compile:scss']);
})

gulp.task('copy:static', () => {
    return gulp.src('./src/static/**/*.*')
            .pipe(gulp.dest('./dist/static'));
})
gulp.task('default', ['copy:static', 'copy:html','copy:img', 'compile:scss', 'compile:js', 'server', 'watch'], () => {
    console.log('Everything is done ...')
})