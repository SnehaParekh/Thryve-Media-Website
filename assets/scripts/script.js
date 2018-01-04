$(document).ready(function(){
    var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();

    var header = $('header');

    var last_scroll = 0;
    var scrollDirUp = false;

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();   

    if(cur_pos > last_scroll) {
      scrollDirUp = false;
    } else {
      scrollDirUp = true;
    }
    last_scroll = cur_pos;

    if(cur_pos >= header.outerHeight()) {
      nav.addClass('nav-sections');

    } else {
      nav.removeClass('nav-sections');
      if(scrollDirUp == true) {
        nav.addClass('nav-transition');
        setTimeout(function () { 
          $('nav').removeClass('nav-transition');
          }, 1000);
      }

    }

    sections.each(function() {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();      
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');
        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }


    });

    // // console.log("header height: " + header.outerHeight()); 
    // //    console.log("current position: " + cur_pos);
    //    var main = $('main');
    //    // console.log("main start position: " + main);
    //    // console.log("top: " + top);
    //    // console.log("bottom: " + bottom);

    //    var jumbotronHeight = header.outerHeight();
    //    if(cur_pos < jumbotronHeight) {
    //     console.log($('section#about-us'));
    //     $('section#about-us').removeClass('active');
    //    }
  });


  nav.find('a').on('click', function () {
    var $el = $(this)
      , id = $el.attr('href');
    if(id == "#solutions" || id == "#reporting-section") {
      $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
      }, 500);
    } else {
      $('html, body').animate({
        scrollTop: $(id).offset().top
      }, 500);
    } 
    return false;
  });
});


$(document).ready(function(){
    $(".col-1-3").click(function(){
      var solutionsContainer = $(".solutions-container");
      $(this).find(".solutions-container").addClass("show");
    });
});


$(document).ready(function(){
    ($(this).find(".close-solution")).click(function(e) { 
      e.stopPropagation();
      ($(this).parent().parent()).removeClass("show");
    });
});

$(document).ready(function(){
    $(".navbar").click(function(){
     ($(this).find(".mobile-nav")).toggleClass("mobile-nav-hide");
    });

    $(".mobile-nav li a").click(function(){
     ($(this).parent().parent()).addClass("mobile-nav-hide");
    });
});


$(document).ready(function(){
    $(".search-jumbotron").click(function(){
      ($("#solutions").find(".col-1-3-one")).addClass("show");
    });

    $(".video-jumbotron").click(function(){
      ($("#solutions").find(".col-1-3-two")).addClass("show");
    });

    $(".mobile-jumbotron").click(function(){
      ($("#solutions").find(".col-1-3-three")).addClass("show");
    });
    ($("#solutions").find(".close-solution")).click(function(e) {
      e.stopPropagation();
      ($(this).parent().parent().parent()).removeClass("show");
    }); 
});