const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const webp = require("gulp-webp");

const paths = {
    scss: "src/scss/**/*.scss",
    js: "src/js/**/*.js",
    imagenes: "src/img/**/*",
};

function css() {
    return src(paths.scss)
        .pipe(
            sass({
                outputstyle: "expanded",
            })
        )
        .pipe(dest("./build/css"));
}

function versionWebp() {
    return src(paths.imagenes).pipe(webp()).pipe(dest("build/img"));
}

function watchArchivos() {
    watch(paths.scss, css);
}

exports.versionWebp = versionWebp;
exports.default = parallel(css, watchArchivos);
