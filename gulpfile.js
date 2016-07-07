var gulp = require('gulp');
var del = require('del');
var merge = require('event-stream').merge;
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var reload = browserSync.reload;
var notify = require("gulp-notify");
var shell = require('gulp-shell');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var sass = require('gulp-sass');
var ejs = require("gulp-ejs");
var prettify = require('gulp-html-prettify');
var rename = require('gulp-rename');

var isProd = false;
var distDir = 'dist';
var chapters = require('./src/html/data/chapters.json');



/*
 * clean Dist
 *
 */

gulp.task("clean",function(callback){
  return del([distDir],callback);
})

/*
 * scripts
 *
 */

gulp.task("build:lib",function(){
  return gulp.src(["node_modules/p5/lib/p5.min.js","node_modules/lodash/lodash.min.js"])
    .pipe(concat("lib.js"))
    .pipe(gulp.dest(distDir + '/scripts/'));
})

gulp.task("build:class",function(cb){
  return gulp.src(['src/scripts/classes/**/*.js'])
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(gulpif(!isProd,sourcemaps.init()))
    .pipe(babel())
    .pipe(concat('classes.js'))
    .pipe(gulpif(!isProd,sourcemaps.write('.')))
    .pipe(gulp.dest(distDir + '/scripts/'),cb)
})

gulp.task("build:article",function(cb){
  return gulp.src(['src/scripts/articles/**/*.js'])
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(gulpif(!isProd,sourcemaps.init()))
    .pipe(babel())
    .pipe(gulpif(!isProd,sourcemaps.write('.')))
    .pipe(gulp.dest(distDir + '/scripts/articles'),cb)
})

gulp.task("build:index",function(cb){
  return gulp.src(["node_modules/lodash/lodash.min.js",'src/scripts/index/**/*.js'])
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(gulpif(!isProd,sourcemaps.init()))
    .pipe(concat('index.js'))
    .pipe(gulpif(!isProd,sourcemaps.write('.')))
    .pipe(gulp.dest(distDir + '/scripts/'),cb)
})


gulp.task("build:js",function(cb){
    runSequence(
        ["build:lib","build:class","build:article","build:index"]
        ,cb
    )
})

/*
 * css
 *
 */

gulp.task("build:css",function(cb){
  return gulp.src(['sass/base.scss'])
    .pipe(sass())
    .pipe(gulp.dest(distDir + '/css/'),cb)
})

/*
 * html
 *
 */

gulp.task("build:html_index",function(cb){
  return gulp.src('src/html/index.ejs')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>") //<-
    }))
    .pipe(ejs({chapters:chapters},{ext:".html"}))
    .pipe(prettify({indent_char:' ', indent_size: 2}))
    .pipe(gulp.dest(distDir), cb);
})

gulp.task("build:html_article",function(cb){

  chapters.forEach(function(chapter){
    chapter.articles.forEach(function(article,index){
      return gulp.src('src/html/article.ejs')
        .pipe(plumber({
          errorHandler: notify.onError("Error: <%= error.message %>") //<-
        }))
        .pipe(ejs({data:article},{ext:".html"}))
        .pipe(rename('article' + chapter.chapterNum + '_' + (index+1) + '.html'))
        .pipe(gulp.dest(distDir + '/articles/'));
    })
  })
  cb();
})

gulp.task("build:html",function(cb){
  return runSequence(
    ["build:html_index","build:html_article"],
    cb
  );
})

/*
 * local server
 *
 */

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: distDir
        },
        startPath: 'index.html'
    });
});

/*
 * watch
 *
 */

gulp.task('watch:js',function(){
  return gulp.watch(['./src/**/*.js'],["build:js"]);
});

gulp.task('watch:css',function(){
  return gulp.watch(['./sass/**/*.scss'],["build:css"]);
});

gulp.task('watch:html',function(){
  return gulp.watch(['./src/html/**/*.ejs'],["build:html"]);
});

/*
 * tasks
 *
 */

gulp.task("build",function(cb){
  return runSequence(
    "clean",
    ["build:js","build:css","build:html"],
    cb
  );
});

gulp.task("default",function(cb){
  return runSequence(
    "build",
    ['browser-sync',"watch:js","watch:css","watch:html"],
    cb
  );
})
