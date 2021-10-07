const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const webp = require("gulp-webp");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const terser = require("gulp-terser-js");
const rename = require("gulp-rename");
const del = require("del");

const paths = {
    scss: "src/scss/**/*.scss",
    js: "src/js/**/*.js",
    imagenes: "src/img/**/*",
};

function css() {
    return (
        src(paths.scss)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(postcss([autoprefixer(), cssnano()]))
            // .pipe(postcss([autoprefixer()]))
            .pipe(sourcemaps.write("."))
            .pipe(dest("./build/css"))
    );
}

function javascript() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat("bundle.js")) // final output file name
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest("./build/js"));
}

function versionWebp() {
    return src(paths.imagenes).pipe(webp()).pipe(dest("build/img"));
}

function watchArchivos() {
    watch(paths.scss, css);
    watch(paths.js, javascript);
}

function delMaps() {
    return del([
        "build/css/app.css.map",
        "!build/css",
        "build/js/bundle.js.min.map",
        "!build/js",
    ]);
}

exports.versionWebp = versionWebp;
exports.delMaps = delMaps;
exports.default = parallel(css, javascript, watchArchivos);
