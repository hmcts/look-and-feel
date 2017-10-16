# StickAtTopWhenScrolling

This is used to stick elements to the top of the browser window when
it is scrolled offscreen.

Source: [govuk_frontend_toolkit/javascripts/govuk/stick-at-top-when-scrolling.js](https://github.com/alphagov/govuk_frontend_toolkit/blob/master/javascripts/govuk/stick-at-top-when-scrolling.js)

## Usage

**main.js**

```javascript
import $ from 'jquery';
import stickAtTopWhenScrolling from 'govuk/stick-at-top-when-scrolling';

$(document).ready(() => {
  stickAtTopWhenScrolling.init();
});
```

**template.html**

```html
<header class="js-stick-at-top-when-scrolling">
  <h1>Sticky header</h1>
</header>
```
