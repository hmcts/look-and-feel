import $ from 'jquery';
import ShowHideContent from 'govuk-frontend/govuk/all';

$(document).ready(() => {
  const showHideContent = new ShowHideContent();
  showHideContent.init();
});