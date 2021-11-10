$(function () {
  if ($(".yolo_slider").length > 0) {
    var $owl = $(".yolo_slider");
    $owl.owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      navText: ["<i class='bx bx-chevron-left' ></i>", "<i class='bx bx-chevron-right' ></i>"],
      items: 1,
    });
  }

  if ($(".mobile_menu").length > 0) {
    $(".mobile_menu").slideMobileMenu({
      onMenuLoad: function (menu) {
        console.log(menu);
      },

      onMenuToggle: function (menu, opened) {
        console.log(opened);
      },
    });
  }
  var $ww = $(window).width();
  if ($ww > 1024) {
    $(window).scroll(function () {
      var $sticky = $("#header");
      scroll = $(window).scrollTop();
      if (scroll >= 35) {
        $sticky.addClass("fixed");
      } else {
        $sticky.removeClass("fixed");
      }
    });
  }
  $("#sm_menu_ham").click(function () {
    var $this = $(this);
    if ($this.hasClass("open")) {
      $(".icon_mobile_box").hide();
    } else {
      $(".icon_mobile_box").css("display", "flex");
    }
  });
});
