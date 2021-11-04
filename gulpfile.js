const gulp = require("gulp");
const plumber = require("gulp-plumber");
const htmlmin = require("gulp-htmlmin");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgsprite = require("gulp-svgstore");
const uglify = require('gulp-uglify-es').default;
const del = require("del");
const sync = require("browser-sync").create();

//HTML

const html = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("docs"));
}

exports.html = html;

//Copy

const copy = () => {
  return gulp.src([
    "source/fonts/*{woff2,woff}",
    "source/img/**/*.{jpg,png,svg}"
  ],
    {
      base: "source"
    })
    .pipe(gulp.dest("docs"));
}

exports.copy = copy;


// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(sourcemap.write("docs/css"))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("docs/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

//Images

const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.mozjpeg({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("docs/img"));
}

exports.images = images;

//WebP

const imagewebp = () => {
  return gulp.src("docs/img/**/*.{jpg,png}")
    .pipe(webp({ quality: 85 }))
    .pipe(gulp.dest("docs/img"));
}

exports.imagewebp = imagewebp;

//Sprite

const sprite = () => {
  return gulp.src("docs/img/icons/**/*.svg")
    .pipe(svgsprite())
    .pipe(rename("sprite-icons.svg"))
    .pipe(gulp.dest("docs/img/icons"));
}

exports.sprite = sprite;

//JavaScripts

const scripts = () => {
  return gulp.src("source/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("docs/js/min"))
    .pipe(sync.stream());
}

exports.scripts = scripts;

//Clean

const clean = () => {
  return del("docs");
}

exports.clean = clean;


// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'docs'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/js/*.js", gulp.series("scripts"));
  gulp.watch("source/*.html", gulp.series("html")).on("change", sync.reload);
}

exports.watcher = watcher;

//Build

const build = gulp.series(
  clean,
  gulp.parallel(
    html,
    copy,
    styles,
    scripts
  ),
  gulp.parallel(
    imagewebp,
    sprite
  )
);

exports.build = build;



exports.default = gulp.series(
  clean,
  gulp.parallel(
    html,
    copy,
    styles,
    scripts
  ),
  gulp.parallel(
    imagewebp,
    sprite
  ),
  gulp.series(
    server,
    watcher
  )
);
