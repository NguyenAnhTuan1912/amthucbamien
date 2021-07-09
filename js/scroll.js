let banner = document.getElementById("banner");
let ti = document.getElementById("title");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    banner.style.top = -value * 0.5 + 'px';
    title.style.top = value * 0.5 + 'px';
})