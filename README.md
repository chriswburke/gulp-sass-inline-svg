# gulp-sass-inling-svg

## How to use

### Install
```
npm install gulp-sass-inling-svg --save-dev
```

### Usage
```js
// gulpfile.js
var sassInlineSvg = require('gulp-sass-inline-svg');

gulp.task('sass:svg', function(){
    return gulp.src('./path/to/images/folder/**/*.svg') 
      .pipe(sassInlineSvg({
        outputFolder: './svgs'
      }));
});
```

```scss
// sass file
@import "sass-inline-svg.scss";

.icon-selector {
  background-image: inline-svg('svg-filename');
}
```

```css
.icon-selector {
  background: url('data:image/svg+xml,<svg ...> ... </svg>');
}
```
