# External Link Tracker

The tracker will send an event for clicks on links beginning, http and linking
outside of the current host. By default the plugin uses Google Analytics
`transport: beacon` method so that events are tracked even if the page unloads.

Expects an instance of `govuk/analytics/analytics` bound to
`window.GOVUK.analytics`.

Source: [govuk_frontend_toolkit/javascripts/govuk/analytics/external-link-tracker.js](https://github.com/alphagov/govuk_frontend_toolkit/blob/master/javascripts/govuk/analytics/external-link-tracker.js)

## Usage

**main.js**

```javascript
import $ from 'jquery';
import Analytics from 'govuk/analytics/analytics';
import externalLinkTracker from 'govuk/analytics/external-link-tracker';

$(document).ready(() => {
  Analytics.load();

  const cookieDomain = (document.domain === 'www.gov.uk') ? '.www.gov.uk' : document.domain;
  window.GOVUK.analytics = new Analytics({
    universalId: 'UA-XXXXXXXX-X',
    cookieDomain
  });

  externalLinkTracker();
});
```
