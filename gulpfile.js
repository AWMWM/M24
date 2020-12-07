// 使用 require('node_modules里对应模块') 的语法// 引入gulpvar gulp = require('gulp');
const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const cleanCss = require("gulp-clean-css");
const babel = require("gulp-babel");


gulp.task('server', (done) => {
    connect.server({
        'root': 'dist',
        livereload: true
    })

    done();
})

// "./src/a.js"：当前目录中src目录下的a.js文件;// "*"：匹配所有文件 例：src/*.js(包含src下的所有js文件);// "**"：匹配0个或多个子文件夹 例：src/**/*.js(包含src的0个或多个子文件夹
//创建sass任务，将sass样式转成css样式
gulp.task('sass', done => {
    gulp.src('sass/*.scss').pipe(sass({
            outputStyle: 'compressed'
                //outputStyle指定输出风格，compressed压缩输出，
                //紧凑输出compact，也就是单行的css样式
                //expanded，平常格式化一样
        }))
        // .pipe(sourcemaps.write())//合并文件
        .pipe(gulp.dest("dist/css")) //编译完放在dist/css目录下面
        .pipe(connect.reload()); //自动刷新
    done();
})




//创建拷贝任务copys
gulp.task('copys', function(done) {
    gulp.src(['img', 'html', 'jq', 'js', 'fonts']).pipe(gulp.dest('dist')).pipe(connect.reload());
    gulp.src('img/**').pipe(gulp.dest('dist/img')).pipe(connect.reload());
    gulp.src('html/**').pipe(gulp.dest('dist/html')).pipe(connect.reload());
    gulp.src('jq/**').pipe(gulp.dest('dist/jq')).pipe(connect.reload());
    gulp.src('js/**').pipe(gulp.dest('dist/js')).pipe(connect.reload());
    gulp.src('fonts/**').pipe(gulp.dest('dist/fonts')).pipe(connect.reload());

    gulp.src('index.html').pipe(gulp.dest('dist')).pipe(connect.reload());

    done();


})



//创建监听任务
gulp.task("watch", done => {

    gulp.watch("*", gulp.series("copys"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    // gulp.watch("*img/**", gulp.series("copys"));

    done();
})

//先把任务关联起来，然后加入到default任务中，使用gulp命令执行行所有的
gulp.task("build", gulp.parallel("copys", "sass")); //创建build任务，关联和运行上面定义的任务
gulp.task("default", gulp.series("build", "server", "watch")); ///*wacth和server命令只能运行一个，所以可以用default同时执行多个任务，命令行直接gulp执行