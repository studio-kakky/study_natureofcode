var gulp = require('gulp');
var del = require('del');
var merge = require('event-stream').merge;
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var reload = browserSync.reload;
var notify = require("gulp-notify");
var shell = require('gulp-shell');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');

var isProd = false;





gulp.task("clean:script",function(callback){
    del(['dist/js']);
    setTimeout(function(){ callback() },100);
})

gulp.task("build:lib",function(){
    return gulp.src(["vendor/bower/p5js/lib/p5.min.js"])
        .pipe(concat("lib.js"))
        .pipe(gulp.dest('dist/js'));
})

gulp.task("build:class",function(){
    return gulp.src(['src/classes/**/*.js'])
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(gulpif(!isProd,sourcemaps.init()))
        .pipe(babel())
        .pipe(concat('classes.js'))
        .pipe(gulpif(!isProd,sourcemaps.write('.')))
        .pipe(gulp.dest('dist/js/classes'))
        .pipe(reload({stream:true}));
})

gulp.task("build:page",function(){
    return gulp.src(['src/pages/**/*.js'])
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(gulpif(!isProd,sourcemaps.init()))
        .pipe(babel())
        .pipe(gulpif(!isProd,sourcemaps.write('.')))
        .pipe(gulp.dest('dist/js/pages'))
        .pipe(reload({stream:true}));
})

gulp.task("build",function(){
    runSequence(
        "clean:script",
        ["build:lib","build:class","build:page"]
    )
})

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './dist/'
        },
        startPath: 'index.html'
    });
});

gulp.task('watch',function(){
    gulp.watch(['./src/**/*.js'],["build"]);
});

gulp.task("default",["build",'browser-sync',"watch"]);