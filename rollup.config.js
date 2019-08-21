import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import buble from "rollup-plugin-buble"
import { uglify } from "rollup-plugin-uglify"
import autoprefixer from "autoprefixer"
import cssnano from "cssnano"
import postcss from "rollup-plugin-postcss"
import copy from "rollup-plugin-cpy"
import url from "postcss-url"

const production = !process.env.ROLLUP_WATCH;

export default [{
    input: "src/js/mescan.js",
    output: [
        { file: "www/js/mescan.min.js", "format": "umd", name: "MesCan", sourcemap: true }
    ],
    plugins: [
        resolve(),
        commonjs(),
        buble({
            exclude: ["src/sass/**", "src/less/**", "src/secret/**", "node_modules/framework7/css/**", "node_modules/framework7-icons/css/**", "node_modules/material-design-icons/iconfont/**"]
        }),
        production && uglify(),
        postcss({
            plugins: [autoprefixer, cssnano, url({ filter: "**/MaterialIcons-Regular.{eot,ttf,woff,woff2}", url: (asset) => `../fonts/${asset.url}` })],
            sourceMap: true,
            extract: "www/css/mescan.min.css",
            extensions: ['.css', '.sass', '.less'],
            use: ['sass', ['less', { javascriptEnabled: true }]],
            minimize: true
        }),
        copy({
            files: ["node_modules/framework7-icons/fonts/*.*", "node_modules/material-design-icons/iconfont/*.{eot,ttf,woff,woff2}"],
            dest: "www/fonts"
        })
    ]
}]