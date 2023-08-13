$(document).ready(function() {
  /** Top Button **/
  /* Top Button einblenden */
  function topButtonFunctionality() {

    var topButton = $('.button--top');
    var elOffScreenHeight = $(window).height() / 1.5;

    $(window).scroll(function () {
      if ($(window).scrollTop() > elOffScreenHeight) {
        topButton.addClass('button--top--visible');
      } else {
        topButton.removeClass('button--top--visible');
      }
    });
  }

  topButtonFunctionality();

  /** One Page Nav **/
  window.onscroll = function () {
    var scrollPos = $(document).scrollTop();
    $('.navigation__main .navigation__item--one-page .navigation__link').each(function () {
      var currLink = $(this);
      var anchor = $(currLink.attr("href").slice(1));
      var refElement = anchor.parent();
      if (anchor.position().top - 20 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.navigation__main .navigation__item--one-page .navigation__link').removeClass("navigation__link--active");
        currLink.addClass("navigation__link--active");
      }
      else{
        currLink.removeClass("navigation__link--active");
      }
    });
  };

  $('.navigation__mobile .navigation__link').click(function (){
    $('.navigation__mobile__burger--input').prop( "checked", false );
  });

  /* baffle.js */
  const baffleClass = $('.baffle');
  const baffleItems = baffleClass.text().split(',');
  const baffleTime = 6000;
  const baffleTimeTotal = baffleTime * baffleItems.length;
  baffleClass.text(baffleItems[0]);

  let b = baffle('.baffle', {
    characters: '▒░▓▒█/<>'
  });

  b.start();
  setTimeout(function () {
    b.reveal(1500);
  }, 1000);

  baffleLoop(1);

  function revealBaffle(item) {
    b.start();
    b.text(text => item);
    setTimeout(function () {
      b.reveal(1500);
    }, 1000);
  }

  function baffleLoop(counter) {
    console.log('Test' + counter);
    var i = counter;
    setTimeout(function() {
      revealBaffle(baffleItems[i]);

      i++;
      if (i < baffleItems.length) {
        setBaffle(i);
      }
    }, baffleTime);
  }

  setInterval(function(){baffleLoop(0)}, baffleTimeTotal);
});

window.addEventListener('load', function() {
  if (document.documentElement.scrollTop > $(window).height() / 1.5) {
    // show top button if scroll position is grater than 0
    $('.button--top').addClass('button--top--visible');
  }
});
