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

[Standard express views setting]: #standard-express-views-setting
[Explicitly set views settings]: #explicitly-set-views-settings
