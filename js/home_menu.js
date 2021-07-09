var click = 1;
slide(click);
function plusSlides(n) {
    slide(click += n);
}

function currentSlide(n) {
    slide(click = n);
}

function slide(n) {
    var i;
    var SlideText = document.getElementsByClassName('text_thucdon');
    var SlideDot = document.getElementsByClassName('dot');
    if (n > SlideText.length) {
        click = 1;
    }
    if (n < 1) {
        click = SlideText.length;
    }
    for(i = 0; i < SlideText.length; i++) {
        SlideText[i].style.opacity = '0%';
    }
    for(i = 0; i < SlideDot.length; i++) {
        SlideDot[i].style.background = '#bbb';
    }
    SlideText[click - 1].style.opacity = '100%';
    SlideText[click - 1].style.transition = 'all 0.4s';
    SlideDot[click - 1].style.background = 'white';
    SlideDot[click - 1].style.transition = 'all 0.4s';
}


/* Auto */


