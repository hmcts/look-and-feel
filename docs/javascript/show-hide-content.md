# ShowHideContent

Source: [govuk_frontend_toolkit/javascripts/govuk/show-hide-content.js](https://github.com/alphagov/govuk_frontend_toolkit/blob/master/javascripts/govuk/show-hide-content.js)

## Usage

```javascript
import $ from 'jquery';
import ShowHideContent from 'govuk/show-hide-content';

$(document).ready(() => {
  const showHideContent = new ShowHideContent();
  showHideContent.init();
});
```

ShowHideContent is used to enable hidden panels that are controlled by a
selection button control. This is a common pattern in one-question-per-page
services for preventing a user from having to answer a question that isn't
relevent to them.


## Example usage

```django
{{ selectionButtons(fields.contactMe, 'Do you want us to contact you?',
  inline = true,
  options = [
    { label: 'Yes', value: 'yes', target: 'contact-methods' },
    { label: 'No', value: 'no' }
  ]
) }}

<div class="panel panel-border-narrow js-hidden" id="contact-methods">
  {{ selectionButtons(fields.contactMethod, "How should we contact you?",
    hideQuestion = false,
    type = "checkbox",
    options = [
      { label: "By Phone", value: "phone" },
      { label: "By Email", value: "email" },
      { label: "By Post", value: "post" }
    ]
  ) }}
</div>
```

The example template code above uses a Yes/No question to control whether the
"How should we contact you?" question is asked. If the user selects "Yes",
ShowHideContent will use the `target` parameter of the option to reveal the
hidden div.
