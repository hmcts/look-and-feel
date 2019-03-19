# Configuring Views

Look-and-feel will by default configure express so that it can load the GOV.UK
templates and partials.

In order to configure express so it has access to your apps views you have two
options: [Standard express views setting] or [Explicitly set views settings].

## Standard express views setting

Configure your views folders in the standard express way:

```
const app = express();
app.set('views', [path.resolve(__dirname, 'views')]);
lookAndFeel.configure(app);
```

Be sure to set the views before you configure look-and-feel. If you set the
views after configuring look-and-feel you'll only overwrite the settings that
look-and-feel has set.

## Explicitly set views settings

When configuring look-and-feel you can pass in the views folders you want
express to look for your templates in:

```
const app = express();
lookAndFeel.configure(app, {
  express: {
    views: [path.resolve(__dirname, 'views')]
  }
});
```

## Import Styles

To import styles into your project you must require them in your SASS files.

You can import all look-and-feel styles

```SASS
@import 'govuk-elements';
@import 'look-and-feel/all';
```
or you can import modules seperatly
```SASS
@import 'govuk-elements';
@import 'look-and-feel/check-your-answers';
@import 'look-and-feel/add-another';
@import 'look-and-feel/language-switch';
@import 'look-and-feel/text-reference';
@import 'look-and-feel/progress-list';
```

[Standard express views setting]: #standard-express-views-setting
[Explicitly set views settings]: #explicitly-set-views-settings
[Import Styles]: #import-styles
