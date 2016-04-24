$(function(){
  $(".nav-label").addClass("off");

    $(".hideContent, .showContent").on("click", function(e){
      var $expandContainer = $(this).parents(".nav-label");
      e.preventDefault();

      $expandContainer.toggleClass("on").toggleClass("off");

      if(!Modernizr.csstransforms || !Modernizr.csstransitions) {
        $expandContainer.find(".expandContent").slideToggle(300);
      }
    });
});

$(function() {
  var b = $(".link-minimalize-btn");
  var w = $(".header-side");
  var l = $(".header-menu");

  w.height(l.outerHeight(true));

  b.click(function() {

    if(w.hasClass('open')) {
      w.removeClass('open');
      w.height(0);
    } else {
      w.addClass('open');
      w.height(l.outerHeight(true));
    }

  });
});
