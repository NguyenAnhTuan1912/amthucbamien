var value = 1;

function ButtonPlus(n) {
    ChangeSlide(value += n);
}

function ChangeSlide(n) {
    if (value > 9) {value = 1}
    if(value < 1) {value = 9}
    for(i = 1; i <= 9; i++) {
        document.getElementById(i).style.opacity = '0';
    }
    document.getElementById(value).style.opacity = '1';
    document.getElementById(value).style.transition = 'all 0.4s';
}