var Page = document.getElementById("pagemid");
var Click = document.getElementsByClassName("Click");
var Num = document.getElementsByClassName("num");
var Page1 = document.getElementById("pagemid1");
var Click1 = document.getElementsByClassName("Click1");
var Num1 = document.getElementsByClassName("num1");
var Page2 = document.getElementById("pagemid2");
var Click2 = document.getElementsByClassName("Click2");
var Num2 = document.getElementsByClassName("num2");
var Page3 = document.getElementById("pagemid3");
var Click3 = document.getElementsByClassName("Click3");
var Num3 = document.getElementsByClassName("num3");
var Value = 0;
var Value1 = 0;
var Value2 = 0;
var Value3 = 0;

/*Gia Đình*/
function ButtonPage(n) {
    Value += n;
    if(Value > 0) {
        Value = 0;
    }
    if(Value < -2) {
        Value = -2;
    }
    Swipe(Value);
}

function Swipe(n) {
    var Len = Num.length;
    if(Page.style.left < 0 + 'px' || Page.style.left > -2161 + 'px') {
        Page.style.left = n * 1080 + 'px';
    }
    for(i = 0; i < Len; i++) {
        Num[i].style.color = 'gray';
    }
    Num[-n].style.color = '#FCD700';
}

/*Bãi biển*/
function ButtonPage1(m) {
    Value1 += m;
    if(Value1 > 0) {
        Value1 = 0;
    }
    if(Value1 < -2) {
        Value1 = -2;
    }
    Swipe1(Value1);
}

function Swipe1(m) {
    var Len = Num1.length;
    if(Page1.style.left < 0 + 'px' || Page1.style.left > -2161 + 'px') {
        Page1.style.left = m * 1080 + 'px';
    }
    for(i = 0; i < Len; i++) {
        Num1[i].style.color = 'gray';
    }
    Num1[-m].style.color = '#FCD700';
}

/*Nhà hàng*/
function ButtonPage2(k) {
    Value2 += k;
    if(Value2 > 0) {
        Value2 = 0;
    }
    if(Value2 < -2) {
        Value2 = -2;
    }
    Swipe2(Value2);
}

function Swipe2(k) {
    var Len = Num2.length;
    if(Page2.style.left < 0 + 'px' || Page2.style.left > -2161 + 'px') {
        Page2.style.left = k * 1080 + 'px';
    }
    for(i = 0; i < Len; i++) {
        Num2[i].style.color = 'gray';
    }
    Num2[-k].style.color = '#FCD700';
}

/*Đồng quê*/
function ButtonPage3(p) {
    Value3 += p;
    if(Value3 > 0) {
        Value3 = 0;
    }
    if(Value3 < -2) {
        Value3 = -2;
    }
    Swipe3(Value3);
}

function Swipe3(p) {
    var Len = Num3.length;
    if(Page3.style.left < 0 + 'px' || Page3.style.left > -2161 + 'px') {
        Page3.style.left = p * 1080 + 'px';
    }
    for(i = 0; i < Len; i++) {
        Num3[i].style.color = 'gray';
    }
    Num3[-p].style.color = '#FCD700';
}
