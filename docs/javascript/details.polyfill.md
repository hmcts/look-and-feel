# Details polyfill

A polyfill that adds the functionality of the details/summary element to older
browsers.

Source: [govuk_frontend_toolkit/javascripts/govuk/details.polyfill.js](https://github.com/alphagov/govuk_frontend_toolkit/blob/master/javascripts/govuk/details.polyfill.js)

## Usage

**main.js**

```javascript
import $ from 'jquery'
import details from 'govuk/details.polyfill'

$(document).ready(() => {
  details.init();
});
```

**template.html**

```html
<details>

  <summary><span class="summary">A summary of the content</span></summary>

  <div class="panel panel-border-narrow">
    <p class="govuk-body">
      Details that will be displayed if the user clicks the summary link.
    </p>
  </div>

</details>
```
