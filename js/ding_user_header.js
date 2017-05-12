(function($) {
  "use strict";

  function ddbasic_mobile_menu(open) {
    if (open) {
      // If the user clicked the active link, close it instead.
      if ( $('.topbar-menu .leaf .topbar-link-menu').hasClass('active') ) {
        $('.topbar-menu .leaf .topbar-link-menu').addClass('active');
        $('.new-header .js-topbar-menu').css("display", "none");
      }
      else {
        // Display the element.
        $('.topbar-menu .leaf .topbar-link-menu').removeClass('active');
        $('.new-header .js-topbar-menu').css("display", "block");
      }
    }
    else {
      $('.topbar-menu .leaf .topbar-link-menu').removeClass('active');
    }
  }


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

    // If the mobile menu is clicked toggle search and show/hide menu.
    $('.js-topbar-link.topbar-link-menu').on('click touchstart', function(e) {
      ddbasic_mobile_menu(true);
      e.preventDefault();
    });

    // Hide top-bar notifications pane in order to remove duplication of information.
    $('.pane-notifications-top-menu').remove();
  });
}(jQuery));
