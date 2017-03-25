# gulp-sass-inling-svg
Gulp plugin for converting svg files into sass functions in order inline svgs in
your css files and use as background-image icons. Based on the gulp plugin
[gulp-sassvg](https://github.com/MattDiMu/gulp-sassvg) and follows recommendations
for [optimizing inline svgs for full browser support](https://codepen.io/tigt/post/optimizing-svgs-in-data-uris).

## Install

```bash
npm install gulp-sass-inling-svg --save-dev
```

## Basic Usage

>**Note:** Currently sass-inline-svg does not support css classes used to style
svgs but rather requires presentation attributes (.e.g fill, stroke, etc) When 
exporting the svg make sure that you select the option to use presentation attributes.

```js
// gulpfile.js
var sassInlineSvg = require('gulp-sass-inline-svg');
var svgmin = require('gulp-svgmin');

gulp.task('sass:svg', function(){
    return gulp.src('./path/to/svgs/folder/**/*.svg') 
      .pipe(svgmin()) // Recommend using svg min to optimize svg files first
      .pipe(sassInlineSvg({
        destDir: './icons'
      }));
});
```

```scss
// sass file
@import "sass-inline-svg.scss";

.icon-test-blue {
  background-image: inline-svg("iconname", blue);
}

.icon-facebook {
  background: url( inline-svg("facebook", #FFAFF, $url:false) ) no-repeat; 
}

.icon-arrow-left {
  background-image: inline-svg("arrow-left", rgba(224, 51, 224, 0.79));
}

```

```css
/* Generated css */

.icon-blue {
  background-image: url("data:image/svg+xml,<svg ...> ... </svg>");
}

.icon-facebook {
  background: url("data:image/svg+xml,<svg ...> ... </svg>") no-repeat;
}

.icon-blue {
  background-image: url("data:image/svg+xml,<svg ...> ... </svg>");
}
```

## Icon Mixin 
```scss
// sass file 

@import "sass-inline-svg.scss";

.icon-arrow-left-blue {
  @include inline-svg-icon("arrow-left", blue, center, 2rem 2rem);
}
```

```css
/* Generated css */

.icon-arrow-left-blue {
  background-image: url("data:image/svg+xml...");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 2rem 2rem;
}
```

## Automatically create classes for svg icons
```scss
// sass file 

@import "sass-inline-svg.scss";

// folder that your icons are in. If you have multiple folders with svg icons,
// you will want to repeat this for each group (folder) of icons.

$folder: "icons"; 
@each $icon in svg-list($folder){
  $url: inline-svg($icon, #1a1ab4);
  
  // Use whatever prefix you'd like on your icons, we are using $folder here by 
  // default
  .#{$folder}-#{$icon} {
      background-image: $url;
  }
}

## Issues

File bugs at https://bitbucket.org/davemosemann/gulp-sass-inline-svg/issues