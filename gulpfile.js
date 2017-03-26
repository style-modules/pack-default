const gulp = require('gulp')
const browserSync = require('browser-sync')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const postcssReporter = require('postcss-reporter')
const cssimport = require('postcss-import')
const cssnext = require('postcss-cssnext')

gulp.task('default', () => gulp.src('main.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      cssimport(),
      cssnext(),
      postcssReporter()
    ]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./bundle/'))
)

gulp.task('serve', () => {
  gulp.watch(['*.css'], ['default'])

  return browserSync({
    // Options found here: https://browsersync.io/docs/options
    open: 'ui',
    reloadDelay: 2000,
    logPrefix: 'BrowserSync',
    server: {
      baseDir: './',
      directory: false
    }
  })
})
