# Analytics

Tracks download links being clicked. Expects [analytics](../analytics.md) to be
set up first.

Expects an instance of `govuk/analytics/analytics` bound to
`window.GOVUK.analytics`.

Source: [govuk_frontend_toolkit/javascripts/govuk/analytics/download-link-tracker.js](https://github.com/alphagov/govuk_frontend_toolkit/blob/master/javascripts/govuk/analytics/download-link-tracker.js)

## Usage

**main.js**

```javascript
import $ from 'jquery';
import Analytics from 'govuk/analytics/analytics';
import downloadLinkTracker from 'govuk/analytics/download-link-tracker';

$(document).ready(() => {
  Analytics.load();

  const cookieDomain = (document.domain === 'www.gov.uk') ? '.www.gov.uk' : document.domain;
  const analytics = new Analytics({
    universalId: 'UA-XXXXXXXX-X',
    cookieDomain
  });

  downloadLinkTracker({ selector: '.download-link' });
});
```

**template.html**

```html
<a class="download-link">Clicking this link will be tracked</a>
<a>Clicking this link will not be tracked</a>
```
