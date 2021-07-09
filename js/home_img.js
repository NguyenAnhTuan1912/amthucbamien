let img = document.getElementById('lo');
let hover = document.getElementsByClassName('new');
let text = document.getElementsByClassName('text');
var n;
function chuotvao(n) {
    hover[n].style.opacity = '100%';
    hover[n].style.transition = 'all 0.5s';
    text[n].style.opacity = '100%';
    text[n].style.transition = 'all 0.5s';
}

function chuotra(n) {
    hover[n].style.opacity = '0%';
    hover[n].style.transition = 'all 0.5s';
    text[n].style.opacity = '0%';
    text[n].style.transition = 'all 0.5s';
}