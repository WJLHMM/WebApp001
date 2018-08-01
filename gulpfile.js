var gulp = require('gulp');
var $ = require('gulp-load-plugins')();//引入改插件使得对其他gulp模块的引用直接$即可
var open = require('open');
var gutil = require('gulp-util');

var app ={
	srcPath:'src/',
	devPath:'build/',
	prdPath:'dist/',
};

gulp.task('lib',function(){
	//表示对bower_components这个文件夹下面所有的文件进行遍历，如果是某一类文件，在*后加入文件名
	gulp.src('bower_components/**/*.js')
	.pipe($.plumber())
	.pipe(gulp.dest(app.devPath+'lib'))
	.pipe(gulp.dest(app.prdPath+'lib'))
 	.pipe($.connect.reload());
});
gulp.task('html',function(){
	gulp.src(app.srcPath + '/**/*.html')
	.pipe($.plumber())
	.pipe(gulp.dest(app.devPath))
	.pipe(gulp.dest(app.prdPath))
	.pipe($.connect.reload());
});
gulp.task('json',function(){
	gulp.src(app.srcPath + 'data/**/*.json')
	.pipe($.plumber())
	.pipe(gulp.dest(app.devPath +'data'))
	.pipe(gulp.dest(app.prdPath + 'data'))
	.pipe($.connect.reload());
});
gulp.task('less',function(){
	gulp.src(app.srcPath + 'style/**/*.less')
	.pipe($.plumber())
	.pipe($.less())
	.pipe(gulp.dest(app.devPath + 'style'))
	.pipe($.cssmin())
	.pipe(gulp.dest(app.prdPath + 'style'))
	.pipe($.connect.reload());
});
gulp.task('js',function(){
	gulp.src(app.srcPath + 'script/**/*.js')
	.pipe($.plumber())
	.pipe($.babel({
            presets: ['env']
    }))
	.pipe($.concat('app.js'))
	.pipe(gulp.dest(app.devPath + 'js'))
	.pipe($.uglify())
    .on('error', function (err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
	.pipe(gulp.dest(app.prdPath+'js'))
	.pipe($.connect.reload());
});
gulp.task('imagemin',function(){
	gulp.src(app.srcPath + 'image/**/*')
	.pipe($.plumber())
	.pipe(gulp.dest(app.devPath + 'image'))
	.pipe($.imagemin())
	.pipe(gulp.dest(app.prdPath + 'image'))
	.pipe($.connect.reload());
});

gulp.task('build',['lib','html','json','less','js','imagemin']);


gulp.task('clean',function(){
	gulp.src([app.devPath,app.prdPath])
	.pipe($.clean())
	.pipe($.connect.reload());
});
gulp.task('service',['build'],function(){
	$.connect.server({
		root:[app.devPath],
		livereload:true,
		port:2345,
	});
	open('http://localhost:2345');
	gulp.watch(app.srcPath+'script/**/*.js',['js']);
	gulp.watch('bower_components/**/*.js',['lib']);
	gulp.watch(app.srcPath + '**/*.html', ['html']);
    gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
    gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
    gulp.watch(app.srcPath + 'image/**/*', ['image']);
});

gulp.task('default',['service']);