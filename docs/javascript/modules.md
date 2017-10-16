# Modules

The Module pattern is used to reuse modular components without having to worry
about where and when the module should be instantiated.

Modules are objects that have a `start` function that will be given the element
that required it.

Source: [govuk_frontend_toolkit/javascripts/govuk/modules.js](https://github.com/alphagov/govuk_frontend_toolkit/blob/master/javascripts/govuk/modules.js)

Docs: [govuk_frontend_toolkit/docs/javascript.md](https://github.com/alphagov/govuk_frontend_toolkit/blob/master/docs/javascript.md)

## Usage

**main.js**

```javascript
import $ from 'jquery';
import Modules from 'govuk/modules';

$(document).ready(() => {
  Modules['test-module'] = {
    start(element) {
      window.alert('Test module' + element.text);
    }
  };

  Modules.start();
});
```

**template.html**

```html
<div data-module="test-module">
  This message will be echoed.
</div>
```
