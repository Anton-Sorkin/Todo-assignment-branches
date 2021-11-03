const gulp = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const min = require("gulp-terser");

gulp.task("compile", function () {
	return gulp.src("src/scss/main.scss").pipe(sass()).pipe(gulp.dest("src/css"));
});

gulp.task("minify", function () {
	return gulp
		.src("/src/css/main.css")
		.pipe(csso())
		.pipe(rename("main.min.css"))
		.pipe(gulp.dest("./dist"));
});

gulp.task("watch-scss", function () {
	gulp.watch("src/scss/main.scss", gulp.series("compile"));
});

gulp.task("minjs", function () {
	return gulp
		.src(["src/javascript/*.js", "lib/*.mjs"])
		.pipe(min())
		.pipe(rename("index.min.js"))
		.pipe(gulp.dest("./dist"));
});

gulp.task("compress", gulp.series("minify", "minjs"), function () {});

gulp.task("default", gulp.series("compile", "watch-scss"), function () {});
