# Print Intent

Track when users are attempting to print content. The plugin sends a Print
intent event and a /print prefixed pageview.

Expects an instance of `govuk/analytics/analytics` bound to
`window.GOVUK.analytics`.

Source: [govuk_frontend_toolkit/javascripts/govuk/analytics/print-intent.js](https://github.com/alphagov/govuk_frontend_toolkit/blob/master/javascripts/govuk/analytics/print-intent.js)

## Usage

**main.js**

```javascript
import $ from 'jquery';
import Analytics from 'govuk/analytics/analytics';
import printIntent from 'govuk/analytics/print-intent';

$(document).ready(() => {
  Analytics.load();

  const cookieDomain = (document.domain === 'www.gov.uk') ? '.www.gov.uk' : document.domain;
  window.GOVUK.analytics = new Analytics({
    universalId: 'UA-XXXXXXXX-X',
    cookieDomain
  });

  printIntent();
});
```
