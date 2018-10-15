$(function() {

  console.log('jQ loaded all systems go');

  //initialize the quiz options
  // adapted from https://codepen.io/cgspicer/pen/ahnHi
  $('.quiz-wrapper').find('li.option').each( function(i) {
    var $this = $(this);
    var answerValue = $this.data('target');
    var $target = $('.answers .target[data-accept="'+answerValue+'"]');
    var labelText = $this.html();
    $this.draggable( {
      revert: "invalid",
      containment: ".quiz-wrapper"
    });

    if ( $target.length > 0 ) {
    $target.droppable( {
        accept: 'li.option[data-target="'+answerValue+'"]',
        drop: function( event, ui ) {
          $this.draggable('destroy');
          $target.droppable('destroy');
          $this.html('&nbsp;');
          $target.html(labelText);
        }
    });
    } else { }
   });

});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var topDots = document.getElementsByClassName("top-dot");
  var bottomDots = document.getElementsByClassName("bottom-dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  topDots[slideIndex-1].className += " active";
  bottomDots[slideIndex-1].className += " active";
}
