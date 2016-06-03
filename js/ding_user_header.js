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
	
	function ddbasic_mobile_menu(open) {
    if (open) {
      // If the user clicked the active link, close it instead.
      if ( $('.topbar-menu .leaf .topbar-link-menu').hasClass('active') ) {
        $('.topbar-menu .leaf .topbar-link-menu').toggleClass('active');
        $('.new-header .js-topbar-menu').css("display", "none");
      }
      else {
        // Display the element.
        $('.topbar-menu .leaf .topbar-link-menu').toggleClass('active');
        $('.new-header .js-topbar-menu').css("display", "block");
      }
    }
    else {
      $('.topbar-menu .leaf .topbar-link-menu').removeClass('active');
    }
  }

  });
}(jQuery));
