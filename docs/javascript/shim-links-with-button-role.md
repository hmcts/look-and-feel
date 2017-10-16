# shimLinksWithButtonRole

Javascript 'shim' to trigger the click event of element(s) when the space key
is pressed.

Created since some Assistive Technologies (for example some Screenreaders)
will tell a user to press space on a 'button', so this functionality needs to
be shimmed.

See https://github.com/alphagov/govuk_elements/pull/272#issuecomment-233028270

Source: [govuk_frontend_toolkit/javascripts/govuk/shim-links-with-button-role.js](https://github.com/alphagov/govuk_frontend_toolkit/blob/master/javascripts/govuk/shim-links-with-button-role.js)

## Usage

**main.js**

```javascript
import $ from 'jquery';
import shimLinksWithButtonRole from 'govuk/shim-links-with-button-role';

$(document).ready(() => {
  shimLinksWithButtonRole.init();
});
```
