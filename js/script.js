var hamburger = document.getElementById('hamburger');
hamburger.onclick = function(evt){
  evt.preventDefault();
  hamburger.classList.toggle('hamburger--close');
  document.getElementById('main-nav__list').classList.toggle('main-nav__list--visible');
}

$( document ).ready(function() {
  var textInput = $('input[type="text"], input[type="tel"], input[type="email"]');
  var textArea = $('textarea');

  $(textInput).each(function(){
      if($(this).val()!=''){
          $(this).addClass('filled');
      }
      else{
          $(this).removeClass('filled');
      }
  });

  $(textArea).each(function(){
      if($(this).val()!=''){
          $(this).addClass('filled');
      }
      else{
          $(this).removeClass('filled');
      }
  });

  $(textInput).blur(function(){
      self = $(this);
      setTimeout(function(){
          if($(self).val()!=''){
              $(self).addClass('filled');
          }
          else{
              $(self).removeClass('filled');
          }
      },1);
  });

  $(textInput).focus(function(){
      $(this).addClass('filled');
  });

  $(textArea).blur(function(){
      self = $(this);
      setTimeout(function(){
          if($(self).val()!=''){
              $(self).addClass('filled');
          }
          else{
              $(self).removeClass('filled');
          }
      },1);
  });

  $(textArea).focus(function(){
      $(this).addClass('filled');
  });
});

$(document).ready(function () {
  var itemAdult = $('.people-count__adult [type=checkbox]');
  var itemChildren = $('.people-count__children [type=checkbox]');
  var currAdult;
  var currChild;

  $(document).on('click', itemAdult, function(evt) {
    itemAdult.filter(':checked').not(this).removeAttr('checked');
      
  });


  $(document).on('click', itemChildren, function(evt) {
    itemChildren.filter(':checked').not(this).removeAttr('checked');

  });

  $(".set > a").on("click", function(evt){
    evt.preventDefault();
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.set__content').slideUp(200);
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    }else{
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
    $(".set > a").removeClass("active");
    $(this).addClass("active");
    $('.set__content').slideUp(200);
    $(this).siblings('.set__content').slideDown(200);
    }

  });

  var header = $("#header");
  var $menu = $("#main-nav");
  var $height = $("#header").outerHeight();

  jQuery('html').css('padding-top', $height);


$(document).on('click', '.main-nav__subtoggle', function(evt) {
  var el_curr = $(evt.currentTarget);
  var parent_el = el_curr.parent('.main-nav__item--drop');
  $(this).toggleClass('main-nav__subtoggle--up');
  parent_el.children(".main-nav__sub-menu").toggleClass('main-nav__sub-menu--show');
});


// $(window).resize(function() {
$(window).bind("load resize", function() {
  if ( jQuery(window).width() > 1024) {
    // if ( jQuery(this).scrollTop() > 100 && $menu.hasClass("main-nav") ){
    //     jQuery(".main-nav__link").addClass("main-nav__link--tight");
    //     jQuery(".main-header__logo").addClass("main-header__logo--small");
    //     jQuery(".contacts__text").addClass("contacts__text--small");
    //     header.addClass('main-header--tight');
    //     jQuery('.main-header__small-title').hide();
    //     jQuery('.main-header__city').hide();
    //     jQuery('.main-header__btns-wrapper').hide();
    // }


    jQuery(window).scroll(function(){
        if ( jQuery(this).scrollTop() > 100 ){
            header.addClass('main-header--tight');
            jQuery(".main-nav__link").addClass("main-nav__link--tight");
            jQuery('.main-header__top').addClass('hidden');
            // jQuery(".main-header__logo").addClass("main-header__logo--small");
            // jQuery(".contacts__text").addClass("contacts__text--small");
            // jQuery('.main-header__small-title').hide();
            // jQuery('.main-header__city').addClass('hidden');
            // jQuery('.main-header__btns-wrapper').addClass('main-header__btns-wrapper--small');
        } else if(jQuery(this).scrollTop() <= $height && header.hasClass('main-header--tight')) {
            header.removeClass('main-header--tight');
            jQuery(".main-nav__link").removeClass("main-nav__link--tight");
            // jQuery(".main-header__logo").removeClass("main-header__logo--small");
            // jQuery(".contacts__text").removeClass("contacts__text--small");
            // header.removeClass('main-header--tight');
            // jQuery('.main-header__small-title').show();
            // jQuery('.main-header__city').removeClass('hidden');
            // jQuery('.main-header__btns-wrapper').removeClass('main-header__btns-wrapper--small');
            jQuery('.main-header__top').removeClass('hidden');

        }
    });//scroll
  } else {
    header.removeClass('main-header--tight');
    jQuery(".main-nav__link").removeClass("main-nav__link--tight");
    jQuery('.main-header__top').removeClass('hidden');
    // jQuery(".main-header__logo").removeClass("main-header__logo--small");
    // jQuery(".contacts__text").removeClass("contacts__text--small");
  }
});


	if(Cookies.get('cookies-popup') != 1) {
		$('.cookies-popup').fadeIn();
	}
	$('.cookies-popup__btn').on('click', function (evt) {
		evt.preventDefault();
		$('.cookies-popup').fadeOut();
    Cookies.set('cookies-popup', '1', { expires: 365 * 7 });
	});


  $('.js_question').on('click', function () {
    $('#popup-book').arcticmodal();
  });

  // $('.popup-note').arcticmodal();


  $('.js_rest-services-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      focusOnSelect: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('.js_slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: true,
 asNavFor: '.js_slider-nav'
});
$('.js_slider-nav').slick({
  rows: 2,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.js_slider-for',
  dots: false,
  focusOnSelect: true
});


    var mySwiper = new Swiper ('.js_main_slider', {
      // Optional parameters
      simulateTouch: false,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1,
      paginationClickable: true,
      loop: true,
      autoplay: 5000
    });

    var mySwiperProg = new Swiper ('.js_programs-list', {
      // Optional parameters
      simulateTouch: false,
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      autoplay: 5000,
      breakpoints: {
      // when window width is <= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is <= 640px
      767: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  var mySwiperTabs = new Swiper ('.js_tabs-nav-slider', {
    // Optional parameters
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    simulateTouch: false,
    slidesPerView: 5,
    loop: true,
    loopedSlides: 5,
    centeredSlides: true,
    breakpoints: {
    // when window width is <= 480px
    430: {
      slidesPerView: 1
    },
    700: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  }
});

var mySwiperTabsMain = new Swiper ('.js_main-tabs-nav-slider', {
  // Optional parameters
  simulateTouch: false,
  slidesPerView: 4,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  // slidesPerView: 'auto',
  loop: true,
  loopedSlides: 4,
  // centeredSlides: true,
  breakpoints: {
  // when window width is <= 480px
  430: {
    slidesPerView: 1
  },
  700: {
    slidesPerView: 2
  },
  992: {
    slidesPerView: 3
  }
}
});

var mySwiperVideo = new Swiper ('.js_video_slider', {
  simulateTouch: false,
  pagination: '.swiper-pagination',
  paginationClickable: true,
  slidesPerView: 1,
  loop: true,
  autoplay: 5000
});

  var roomTypeSlider = new Swiper ('.js_room_type_slider', {
    // Optional parameters
    simulateTouch: false,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: 5000,
    breakpoints: {
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});

// var restSlider = new Swiper ('.js_rest-services-slider', {
//   // Optional parameters
//   simulateTouch: false,
//   nextButton: '.swiper-button-next',
//   prevButton: '.swiper-button-prev',
//   slidesPerView: 4,
//   spaceBetween: 20,
//   autoplay: 5000,
//   slidesPerColumn: 2,
//   breakpoints: {
//   // when window width is <= 480px
//   480: {
//     slidesPerView: 1,
//     spaceBetween: 20
//   },
//   767: {
//     slidesPerView: 2,
//     spaceBetween: 20
//   },
//   992: {
//     slidesPerView: 3,
//     spaceBetween: 20
//   }
// }
// });

    var mySwiperStock = new Swiper ('.js_stock-slider', {
      // Optional parameters
      simulateTouch: false,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1,
      loop: true,
      autoplay: 5000
    });

    // var mySwiperRoom = new Swiper ('.js_fluid-slider', {
    //   // Optional parameters
    //   simulateTouch: false,
    //   pagination: '.swiper-pagination',
    //   nextButton: '.swiper-button-next',
    //   prevButton: '.swiper-button-prev',
    //   slidesPerView: 1,
    //   autoHeight: true,
    //   paginationClickable: true,
    //   loop: true,
    //   autoplay: 5000
    // });


    var mySwiperGal = new Swiper ('.js_gallery-slider', {
      // Optional parameters
      simulateTouch: false,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 3,
      // slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      autoplay: 5000,
      breakpoints: {
      // when window width is <= 480px
      430: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      568: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
    });

    // var mySwiperAlbum = new Swiper ('.js_album-slider', {
    //   // Optional parameters
    //   simulateTouch: false,
    //   nextButton: '.album-button-next',
    //   prevButton: '.album-button-prev',
    //   slidesPerView: 4,
    //   // slidesPerView: 'auto',
    //   spaceBetween: 10,
    //   slidesPerColumn: 2,
    //   autoplay: 5000,
    //   breakpoints: {
    //   // when window width is <= 480px
    //   430: {
    //     slidesPerView: 1,
    //     spaceBetween: 10
    //   },
    //   568: {
    //     slidesPerView: 2,
    //     spaceBetween: 10
    //   }
    // }
    // });


    var tabBtn = $('.js_tab-item');
    var tabItem = $('.tabs-list__item');
    tabItem.hide();
    $('.tabs-list__item:first-child').fadeIn('slow');
    $('.tabs-nav__link').on('click', function() {
      event.preventDefault();
    });
    tabBtn.each(function(i, list) {
      $(list).find('.tabs-nav__link').on('click', function() {
        tabBtn.find('.tabs-nav__link').removeClass('tabs-nav__link--active');
        tabBtn.find('.tabs-nav__info').removeClass('tabs-nav__info--active');
        // tabItem.removeClass('tabs-list__item--active');
        tabItem.hide();
        // $(this).find('.tabs-nav__link').addClass('tabs-nav__link--active');
        // $(this).find('.tabs-nav__info').addClass('tabs-nav__info--active');
        $(this).addClass('tabs-nav__link--active');
        $(this).next().addClass('tabs-nav__info--active');
        var dataValue = $(this).parent('.tabs-nav__item').data('id');
        // $('.tabs-list').children('[data-id="'+dataValue+'"]').addClass('tabs-list__item--active');
        $('.tabs-list').children('[data-id="'+dataValue+'"]').fadeIn('slow');
    });
  });

    var tabSwiper1 = new Swiper ('#room_slider1', {
      // Optional parameters
      simulateTouch: false,
      observer: true,
      observeParents: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      // slidesPerView: 1,
      centeredSlides: true,
      slidesPerView: 'auto',
      paginationClickable: true,
      loop: true,
      autoplay: 5000
    });

    var tabSwiper2 = new Swiper ('#room_slider2', {
      // Optional parameters
      simulateTouch: false,
      observer: true,
      observeParents: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      centeredSlides: true,
      slidesPerView: 'auto',
      paginationClickable: true,
      loop: true,
      autoplay: 5000
    });

    var tabSwiper3 = new Swiper ('#room_slider3', {
      // Optional parameters
      simulateTouch: false,
      observer: true,
      observeParents: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      centeredSlides: true,
      slidesPerView: 'auto',
      paginationClickable: true,
      loop: true,
      autoplay: 5000
    });

    var tabSwiper4 = new Swiper ('#room_slider4', {
      // Optional parameters
      simulateTouch: false,
      observer: true,
      observeParents: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      centeredSlides: true,
      slidesPerView: 'auto',
      paginationClickable: true,
      loop: true,
      autoplay: 5000
    });


$('[data-fancybox1]').fancybox();

  var searchBtn = $('.js_search-link');
  var searchPopup = $('.js_popup-search');
  var formSearch = $('.js_popup-search__form');
  var searchFormClose = $('.js_search-close');

  searchBtn.on('click', function (evt) {
    evt.preventDefault();
    searchPopup.show();
    $('#search').focus();
  });

  searchFormClose.on('click', function (evt) {
    evt.preventDefault();
    searchPopup.hide();
    formSearch.trigger("reset");
  });

  searchPopup.on('click', function (evt) {
    if ( $(evt.target).hasClass('js_popup-search') ) {
      searchPopup.hide();
      formSearch.trigger("reset");
    }
  });

  $(window).on('keydown', function (evt) {
    if (evt.keyCode == 27) {
      searchPopup.hide();
      formSearch.trigger("reset");
    }
  });

  $('.js_field-text__input').mask('+7(999)999-99-99');

  var ticketsItem = $('.section-nav__item--tabs');
    ticketsItem.on('click', function (evt) {
    evt.preventDefault();
    ticketsItem.removeClass('section-nav__item--active-tab');
    $(this).addClass('section-nav__item--active-tab');
  });

  var marksList = $('.js_marks');

  $('.review__link-more').addClass('review__link-more--closed');
    marksList.addClass('marks--hide');

  $('.review__link-more').on('click', function (evt) {
    evt.preventDefault();
    $(this).toggleClass('review__link-more--closed');
    var wrapMarks = $(this).parent();
    var currentMarks = wrapMarks.find(marksList);
    currentMarks.slideToggle();
  });

  // calendar
  var calendar = $('#calendar');

  // $(function() {

    // $.datepicker.setDefaults($.datepicker.regional['ru']);
    // $('#calendar').datepicker({
    //     numberOfMonths: [1,3],
    //     minDate: '0'
	  // });

  // });

  // new cal -----------------------------

  $(function(){
    // var datepickerDiv = $("#calendar");
    // var startDateField = $("#start_date");
    // var endDateField = $("#end_date");
    // var periodField = $("#period");
  var MultiDate = {
    datepickerDiv: "#calendar",
    startDateField: "#start_date",
    endDateField: "#end_date",
    periodField: "#period",
    clearButton: "#clear",
    startDate: null,
    endDate: null,
    clearEndWhenSelectingStart: true,
    disableOutsideDates: false,
    numberOfMonths: 3,

    // Set either the start or the end date
    _changeDate: function(){
      var date = this.value;
      var startDate = MultiDate.startDate;
      var endDate = MultiDate.endDate;
      var dateTime = moment(MultiDate._convertStringToJSDate(date));
      if(startDate && dateTime.isSame(startDate)) {
        MultiDate._clearStartDate();
      } else if (endDate && dateTime.isSame(endDate)) {
        MultiDate._clearEndDate();
      } else if(startDate && dateTime.isBefore(startDate)) {
        MultiDate.setStartDate(date);
      } else if (endDate && dateTime.isAfter(endDate)) {
        MultiDate.setEndDate(date);
      } else if (startDate && !endDate) {
        MultiDate.setEndDate(date);
      } else {
        MultiDate.setStartDate(date);
      }
    },

    _updateStartDateEvent: function(e) {
      var date = MultiDate._convertStringToJSDate(e.target.value, true);
      if(date !== MultiDate.startDate) {
        MultiDate.startDate = date;
        MultiDate.$datepicker.datepicker("refresh");
        MultiDate.moveToFirstDay();
      }
    },

    _updateEndDateEvent: function(e) {
      var date = MultiDate._convertStringToJSDate(e.target.value, true);
      if(date !== MultiDate.endDate) {
        MultiDate.endDate = date;
        MultiDate.$datepicker.datepicker("refresh");
      }
    },

    // Clear the end date
    _clearEndDate: function(){
      MultiDate.endDate = null;
      MultiDate.$endDate.val("");
      if(MultiDate.disableOutsideDates) {
        MultiDate.$datepicker.datepicker("option", "maxDate", "");
      }
    },

    _clearStartDate: function(){
      MultiDate.startDate = null;
      MultiDate.$startDate.val("");
      if(MultiDate.disableOutsideDates) {
        MultiDate.$datepicker.datepicker("option", "minDate", "");
      }
    },

    _convertStringToJSDate: function(date, asMoment) {
      asMoment = asMoment || false;
      if(date) {
        var split = date.split("/");
        var day = split[0];
        var month = split[1] - 1;
        var year = split[2];
        if(asMoment) {
          return moment(new Date(year, month, day));
        } else {
          return new Date(year, month, day);
        }
      } else {
        return null;
      }
    },

    _shouldDateBeSelected: function(date){
      var startDate = MultiDate.startDate;
      var endDate = MultiDate.endDate;
      if(!moment.isMoment(date)) {
        date = moment(date);
      }
      if(startDate && endDate && date.isSameOrAfter(startDate) && date.isSameOrBefore(endDate)) {
        return true;
      } else if (startDate && date.isSame(startDate) || endDate && date.isSame(endDate)) {
        return true;
      } else {
        return false;
      }
    },

    _disableInputs: function(){
      MultiDate.$startDate[0].disabled = true;
      MultiDate.$endDate[0].disabled = true;
    },

    _enableInputs: function(){
      MultiDate.$startDate[0].disabled = false;
      MultiDate.$endDate[0].disabled = false;
    },

    _choosePeriodEvent: function(e) {
      var value = e.target.value;
      if(value === "custom") {
        MultiDate._enableInputs();
        MultiDate.$startDate.focus();
      } else {
        MultiDate._disableInputs();
        if(value === "last7") {
          MultiDate.startDate = moment().add(1, "days").set("hour", 0).set("minute", 0).set("second", 0).set("millisecond", 0);
          MultiDate.endDate = moment().add(7, "days").set("hour", 0).set("minute", 0).set("second", 0).set("millisecond", 0);
        } else if(value === "last30") {
          MultiDate.startDate = moment().subtract(30, "days").set("hour", 0).set("minute", 0).set("second", 0).set("millisecond", 0);
          MultiDate.endDate = moment().subtract(1, "days").set("hour", 0).set("minute", 0).set("second", 0).set("millisecond", 0);
        }
      }
      MultiDate.sendDatesToInputs();
      MultiDate.moveToFirstDay();
      MultiDate.$datepicker.datepicker("refresh");
    },

    _clearDatesEvent: function(e){
      e.preventDefault();
      MultiDate._clearStartDate();
      MultiDate._clearEndDate();
      MultiDate.$period.val("custom");
      MultiDate._enableInputs();
      MultiDate.$datepicker.datepicker("refresh");
    },

    sendDatesToInputs: function(){
      if(MultiDate.startDate) {
        MultiDate.$startDate.val(MultiDate.startDate.format("DD/MM/YYYY"));
      }
      if(MultiDate.endDate) {
        MultiDate.$endDate.val(MultiDate.endDate.format("DD/MM/YYYY"));
      }
    },

    setStartDate: function(value, keepEndDate){
      keepEndDate = keepEndDate || false;
      if(!keepEndDate && MultiDate.clearEndWhenSelectingStart) {
        MultiDate._clearEndDate();
      }
      MultiDate.$period[0].value = "custom";
      MultiDate.startDate = moment(MultiDate._convertStringToJSDate(value));
      MultiDate.sendDatesToInputs();
      if(MultiDate.disableOutsideDates) {
        MultiDate.$datepicker.datepicker("option", "minDate", value);
      }
    },

    setEndDate: function(value){
      MultiDate.endDate = moment(MultiDate._convertStringToJSDate(value));
      MultiDate.sendDatesToInputs();
      if(MultiDate.disableOutsideDates) {
        MultiDate.$datepicker.datepicker("option", "maxDate", value);
      }
    },

    moveToFirstDay: function(){
      if(MultiDate.startDate) {
        MultiDate.$datepicker.datepicker("setDate", MultiDate.startDate.toDate());
      }
    },

    getNumberOfCalendars() {
      var windowWidth = window.innerWidth;
      var numberOfCalendars = 1;
      if(windowWidth >= 567) {
        numberOfCalendars = 2;
      }
      if(windowWidth >= 1100) {
        numberOfCalendars = 3;
      }
      return numberOfCalendars;
    },

    resizeCalendar() {
      var currentNumber = MultiDate.numberOfMonths;
      var newNumber = MultiDate.getNumberOfCalendars();
      if(currentNumber !== newNumber) {
        MultiDate.$datepicker.datepicker('option', "numberOfMonths", newNumber);
        MultiDate.numberOfMonths = newNumber;
        MultiDate.moveToFirstDay();
      }
    },

    init: function(){
      var numberOfMonths = MultiDate.getNumberOfCalendars();
      MultiDate.datePickerSettings = {
        beforeShowDay: function(date){
          var className = MultiDate._shouldDateBeSelected(date) ? "active" : "";
          return [true, className];
        },
        numberOfMonths: numberOfMonths,
        showOtherMonths: true,
        minDate: '0',
        dateFormat: "dd/mm/yy"
      };
      // Setting elements
      MultiDate.$startDate = $(MultiDate.startDateField);
      MultiDate.$endDate = $(MultiDate.endDateField);
      MultiDate.$period = $(MultiDate.periodField);
      MultiDate.$clear = $(MultiDate.clearButton);
      // Binding Datepicker
      MultiDate.$datepicker = $(MultiDate.datepickerDiv).datepicker(MultiDate.datePickerSettings);
      MultiDate.$datepicker.on("change", MultiDate._changeDate);
      // Binding inputs
      MultiDate.$startDate.on("blur", MultiDate._updateStartDateEvent);
      MultiDate.$endDate.on("blur", MultiDate._updateEndDateEvent);
      // Binding period selector
      MultiDate.$period.on("change", MultiDate._choosePeriodEvent);
      MultiDate.$clear.on("click", MultiDate._clearDatesEvent);
    }
  }

  MultiDate.init();
  window.MultiDate = MultiDate;
  window.addEventListener("resize", MultiDate.resizeCalendar);
});

  $(".calendar-range").slider({
      max: 21,
      min: 0,
      range: "min",
      animate:"slow"
      // value: 20,
      // orientation: "vertical"
  })
  .slider("pips", {
      first: "pip",
      last: "pip",
      animate:"slow"
  })
  .slider("float");

  // $(document).on('click', '.rooms-gallery__item', function (evt) {
  //   evt.preventDefault();
  //    var el_curr = $(evt.target);
  //   if (evt.target.className === 'rooms-gallery__btn') {
  //     $(this).addClass('rooms-gallery__item--active');
  //   }
  // });

  $(document).on('change', '.rooms-gallery__item input[type="radio"]', function (evt) {
    // evt.preventDefault();
    var el_curr = $(evt.currentTarget);
    var parentGallery = el_curr.parents('.rooms-gallery');
    parentGallery.children('.rooms-gallery__item').removeClass('rooms-gallery__item--active');
    el_curr.parents('.rooms-gallery__item').addClass('rooms-gallery__item--active');
  });



  $(document).on('click', '.steps-top__link', function (evt) {
    evt.preventDefault();
    var stepCurr = $(evt.currentTarget);
    var stepCurrParent = stepCurr.parents('.steps__tab');
    stepCurrParent.children('.steps__program-choice').slideToggle();
  });

});

(function(){
var a = document.querySelector('#aside1'), b = null, P = 0;
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);
function Ascroll() {
  if (b == null) {
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {
      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
      }
    }
    b = document.createElement('div');
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px';
    a.style.padding = '0';
    a.style.border = '0';
  }
  var Ra = a.getBoundingClientRect(),
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#article').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
  if ((Ra.top - P) <= 0) {
    if ((Ra.top - P) <= R) {
      b.className = 'stop';
      b.style.top = - R +'px';
    } else {
      b.className = 'sticky';
      b.style.top = P + 'px';
    }
  } else {
    b.className = '';
    b.style.top = '';
  }
  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);
}
})();


google.maps.event.addDomListener(window, 'load', init);

           function init() {

               var mapOptions = {
                 scrollwheel: false,
                   zoom: 15,

                   center: new google.maps.LatLng(44.055144, 43.038282), // New York

                   styles: [{"stylers":[{"hue":"#2c3e50"},{"saturation":250}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":50},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]}]

               };


               var mapElement = document.getElementById('map');

               var map = new google.maps.Map(mapElement, mapOptions);

               var point1 = new google.maps.LatLng(44.054849, 43.038176);
var point2 = new google.maps.LatLng(44.054031, 43.041116);

var marker = new google.maps.Marker({ position: point1, map: map, title: 'Стационар'});
           }
