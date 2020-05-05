(function ($) {
  "use strict";
  var MICROXLABS = {};

  /*************************
	  Predefined Variables
	*************************/

  var $document = $(document);

  //Check if function exists
  $.fn.exists = function () {
    return this.length > 0;
  };
  /*************************
		menu
	*************************/
  MICROXLABS.dropdownmenu = function () {
    if ($(".navbar").exists()) {
      $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
        if (!$(this).next().hasClass("show")) {
          $(this)
            .parents(".dropdown-menu")
            .first()
            .find(".show")
            .removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass("show");

        $(this)
          .parents("li.nav-item.dropdown.show")
          .on("hidden.bs.dropdown", function (e) {
            $(".dropdown-submenu .show").removeClass("show");
          });
        return false;
      });
    }
  };

  $(document).ready(function () {
    $("#nav-icon4").on("click", function () {
      $(this).toggleClass("open");
    });
  });

  /*************************
		sticky
	*************************/
  MICROXLABS.isSticky = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        $(".header-sticky").addClass("is-sticky");
      } else {
        $(".header-sticky").removeClass("is-sticky");
      }
    });
  };
  // Document ready functions
  $document.ready(function () {
    MICROXLABS.dropdownmenu(), MICROXLABS.isSticky();
  });
})(jQuery);
