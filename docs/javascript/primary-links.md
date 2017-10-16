# primaryLinks

One of the features implemented in [govspeak][1] is to allow long lists
to be collapsed to only show the first `n` items. This JavaScript makes
the frontend behaviour possible.

Other items in the list will be hidden behind a link reading "+ n others".


Source: [govuk_frontend_toolkit/javascripts/govuk/primary-links.js](https://github.com/alphagov/govuk_frontend_toolkit/blob/master/javascripts/govuk/primary-links.js)

## Usage

**main.js**

```javascript
import $ from 'jquery';
import primaryLinks from 'govuk/primary-links';

$(document).ready(() => {
  primaryLinks.init('li.primary-item');
});
```

**template.html**

```html
<ul>
  <li class="primary-item">Item 1 will be shown</li>
  <li class="primary-item">Item 2 will be shown</li>
  <li class="primary-item">Item 3 will be shown</li>
  <li>Item 4 will be hidden</li>
  <li>Item 5 will be hidden</li>
  <li>Item 6 will be hidden</li>
</ul>
```
