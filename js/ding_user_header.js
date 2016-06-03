(function($) {
  "use strict";

  $(document).ready(function() {
    // Moves the search form into the search result page.
    $('.ding-user-header-block').parents('.site-header').addClass('new-header').removeClass('site-header');

    var search = $('.primary-content .search .search-field-wrapper');
    search.find('.form-item-search-block-form label').remove();
    search.addClass('search-field-in-content');
    search.addClass('js-search-field-in-content');


    $('.js-topbar-user').remove();

  });
}(jQuery));
