(function($) {
  "use strict";

  $(document).ready(function() {
    // Moves the search form into the search result page.
    $('.js-topbar-search').parents('.site-header').addClass('new-header').removeClass('site-header');

    var search = $('.primary-content .search .search-field-wrapper');
    search.find('.form-item-search-block-form label').remove();
    search.addClass('search-field-in-content');
    search.addClass('js-search-field-in-content');

    // Weird way of adding 'error' class to inputs in login form.
    var hiddenLoginFormName = $('.js-topbar-user .form-item-name input');
    var hiddenLoginFormPass = $('.js-topbar-user .form-item-pass input');

    var displayedLoginFormName = $('.ding-user-header-block .form-item-name input');
    var displayedLoginFormPass = $('.ding-user-header-block .form-item-pass input');

    if (hiddenLoginFormName.hasClass('error')) {
      displayedLoginFormName.addClass('error');
    }

    if (hiddenLoginFormPass.hasClass('error')) {
      displayedLoginFormPass.addClass('error');
    }
  });
}(jQuery));
