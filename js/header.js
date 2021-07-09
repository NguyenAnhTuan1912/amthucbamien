function mouseOver() {
    document.getElementById("hv").style.transform = ' translateY(-10px)';
    document.getElementById("hv").style.transition = 'all 0.4s';
    document.getElementById("ahv").style.transform = 'translateY(5px)';
    document.getElementById("ahv").style.opacity = '100%';
    document.getElementById("ahv").style.transition = 'all 0.4s';
}

function mouseOut() {
    document.getElementById("hv").style.transform = ' translateY(0px)';
    document.getElementById("hv").style.transition = 'all 0.4s';
    document.getElementById("ahv").style.transform = 'translateY(0px)';
    document.getElementById("ahv").style.opacity = '0%';
    document.getElementById("ahv").style.transition = 'all 0.4s';
}

let na = document.getElementById("name_logo");
let smain = document.getElementById("scrollmain");
let header = document.getElementById("header");
let lg = document.getElementById("logo");
let hd = document.getElementById("hd");
var sticky = smain.offsetHeight;

window.addEventListener("scroll", function(){
    var value = window.scrollY;

    na.style.top = value * 0.5 + 'px';
    na.style.opacity = value - 1 + 'px';

    hd.style.opacity = value - 1 + 'px';
    smain.style.opacity = 100 - value * 0.115 + '%';

    if(smain.style.opacity < -0.01544) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
})
