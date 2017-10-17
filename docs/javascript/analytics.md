# Analytics

The toolkit provides an abstraction around analytics to make tracking pageviews,
events and dimensions across multiple analytics providers easier. Specifically
it was created to ease the migration from Google’s Classic Analytics to
Universal Analytics.

Source: [govuk_frontend_toolkit/javascripts/govuk/analytics/analytics.js](https://github.com/alphagov/govuk_frontend_toolkit/blob/master/javascripts/govuk/analytics/analytics.js)

Docs: https://github.com/alphagov/govuk_frontend_toolkit/blob/master/docs/analytics.md

## Usage

**main.js**

```javascript
import $ from 'jquery';
import Analytics from 'govuk/analytics/analytics';

$(document).ready(() => {
  Analytics.load();

  // Use document.domain in dev, preview and staging so that tracking works
  // Otherwise explicitly set the domain as www.gov.uk (and not gov.uk).
  const cookieDomain = (document.domain === 'www.gov.uk') ? '.www.gov.uk' : document.domain;

  window.GOVUK.analytics = new Analytics({
    universalId: 'UA-XXXXXXXX-X',
    cookieDomain
  });

  // Set custom dimensions before tracking pageviews
  // analytics.setDimension(…)

  // Activate any event plugins eg. print intent, error tracking
  // analyticsPlugins.error();
  // analyticsPlugins.printIntent();

  // Track initial pageview
  window.GOVUK.analytics.trackPageview();
});
```

Other analytics plugins expect an instance of `Analytics` attached to
`window.GOVUK`.
