var gulp = require('gulp');
var concat = require('gulp-concat');

var pkg = require('./package');
    
// Add standard tasks    
require('pip-webui-tasks').all(gulp);

gulp.task('build-sass', function() {
    return gulp.src([])
        .pipe(concat(pkg.name + '.scss'))
        .pipe(gulp.dest('./dist'));
});

// Define build tasks        
gulp.task('rebuild', ['build-dev', 'build-prod', 'build-sass']);
gulp.task('build', ['build-dev']);
gulp.task('clean', ['build-clean']);
gulp.task('watch', ['build-watch']);
gulp.task('jshint', ['test-jshint']);
gulp.task('launch', ['samples-launch']);
gulp.task('publish', ['samples-publish']);

// Set default task
gulp.task('default', ['build']);