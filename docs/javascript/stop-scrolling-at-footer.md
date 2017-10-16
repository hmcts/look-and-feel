# Stop scrolling at footer.

This can be added to elements with `position: fixed` to stop them from
overflowing on the footer.

Source: [govuk_frontend_toolkit/javascripts/govuk/stop-scrolling-at-footer.js](https://github.com/alphagov/govuk_frontend_toolkit/blob/master/javascripts/govuk/stop-scrolling-at-footer.js)

## Usage

```javascript
import $ from 'jquery';
import stopScrollingAtFooter from 'govuk/stop-scrolling-at-footer';

$(document).ready(() => {
  node = $('#myFixedPositionElement');
  stopScrollingAtFooter.addEl(node, node.height());
});
```

Height is passed in separatly incase the scrolling element has no height
itself.
