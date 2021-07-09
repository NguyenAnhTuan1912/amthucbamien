/*Khai bao Mien*/
var BanDo_Mien = document.getElementsByClassName("bando_mien");
var DiaDiem_Vung = document.getElementsByClassName("vung");
var Click_Mien = document.getElementsByClassName("mien_click");

/*Khai bao Vung*/
var BanDo_Vung = document.getElementsByClassName("bando_vung");
var DiaDiem_Tinh = document.getElementsByClassName("diadiem_vung");
var Click_Vung = document.getElementsByClassName("vung_click");

/*Khai bao Thong tin*/
var ThongTin_CacTinh_TBB = document.getElementsByClassName("tinh_tbb");

/*Khai bao Medium*/
var LanhTho = document.getElementsByClassName("lanhtho");

/*Khai bao Tay Bac Bo*/
var Tinh_TBB = document.getElementsByClassName("tbb");
var Click_TBB = document.getElementsByClassName("tbb_click");

/*Khai bao Dong Bac Bo*/
var Tinh_DBB = document.getElementsByClassName("dbb");
var Click_DBB = document.getElementsByClassName("dbb_click");

/*Khai bao Dong bang song Hong*/
var Tinh_DBSH = document.getElementsByClassName("dbsh");
var Click_DBSH = document.getElementsByClassName("dbsh_click");

function ClickVaoMien(n) {
    for(i = 0; i < Tinh_DBSH.length; i++) {
        Tinh_DBSH[i].style.opacity = '0';
    }

    for(i = 0; i < Tinh_DBB.length; i++) {
        Tinh_DBB[i].style.opacity = '0';
    }

    for(i = 0; i < Tinh_TBB.length; i++) {
        Tinh_TBB[i].style.opacity = '0';
    }

    for(i = 0; i < 8; i++) {
        BanDo_Vung[i].style.opacity = '0';
        Click_Vung[i].style.color = '#262626';
    }

    var DoDai = BanDo_Mien.length;
    for(i = 0; i < DoDai; i++) {
        BanDo_Mien[i].style.opacity = '0';
        DiaDiem_Vung[i].style.opacity = '0';
        DiaDiem_Vung[i].style.zIndex = '0';
        Click_Mien[i].style.color = '#262626';
    }

    BanDo_Mien[n - 1].style.opacity = '1';
    BanDo_Mien[n - 1].style.transition = 'all 0.4s';
    DiaDiem_Vung[n - 1].style.opacity = '1';
    DiaDiem_Vung[n - 1].style.zIndex = '1';
    DiaDiem_Vung[n - 1].style.transition = 'all 0.4s';
    Click_Mien[n - 1].style.color = '#FCD700';
}

/*Vung*/


function ClickVaoVung(m) {
    for(i = 0; i < Tinh_DBSH.length; i++) {
        Tinh_DBSH[i].style.opacity = '0';
    }

    for(i = 0; i < Tinh_DBB.length; i++) {
        Tinh_DBB[i].style.opacity = '0';
    }

    for(i = 0; i < Tinh_TBB.length; i++) {
        Tinh_TBB[i].style.opacity = '0';
    }

    for(i = 0; i < 3; i++) {
        BanDo_Mien[i].style.opacity = '0';
    }
    
    var DoDai_Vung = BanDo_Vung.length;
    for(i = 0; i < DoDai_Vung; i++) {
        LanhTho[i].style.opacity = '0';
        BanDo_Vung[i].style.opacity = '0';
        DiaDiem_Tinh[i].style.opacity = '0';
        DiaDiem_Tinh[i].style.zIndex = '0';
        Click_Vung[i].style.color = '#262626';
    }
    LanhTho[m - 1].style.opacity = '1';
    BanDo_Vung[m - 1].style.opacity = '1';
    BanDo_Vung[m - 1].style.transition = 'all 0.4s';
    DiaDiem_Tinh[m - 1].style.opacity = '1';
    DiaDiem_Tinh[m - 1].style.zIndex = '1';
    DiaDiem_Tinh[m - 1].style.transition = 'all 0.4s';
    Click_Vung[m - 1].style.color = '#FCD700';
}

/*Tinh*/
/*Cac tinh Tay Bac Bo*/
function ClickVaoTBB(p) {
    var DoDai = Tinh_TBB.length;
    for(i = 0; i < DoDai; i++) {
        Tinh_TBB[i].style.opacity = '0';
        Click_TBB[i].style.color = '#262626';
        ThongTin_CacTinh_TBB[i].style.opacity = '0'
    }

    Tinh_TBB[p - 1].style.opacity = '1';
    Tinh_TBB[p - 1].style.transition = 'all 0.4s';
    Click_TBB[p - 1].style.color = '#FCD700';
    ThongTin_CacTinh_TBB[p - 1].style.opacity = '1';
    ThongTin_CacTinh_TBB[p - 1].style.transition = 'all 0.4s';
}

/*Cac tinh Dong Bac Bo*/
function ClickVaoDBB(l) {
    var DoDai = Tinh_DBB.length;
    for(i = 0; i < DoDai; i++) {
        Tinh_DBB[i].style.opacity = '0';
        Click_DBB[i].style.color = '#262626';
    }

    Tinh_DBB[l - 1].style.opacity = '1';
    Tinh_DBB[l - 1].style.transition = 'all 0.4s';
    Click_DBB[l - 1].style.color = '#FCD700';
}

/*Cac tinh Dong bang song Hong*/
function ClickVaoDBSH(l) {
    var DoDai = Tinh_DBSH.length;
    for(i = 0; i < DoDai; i++) {
        Tinh_DBSH[i].style.opacity = '0';
        Click_DBSH[i].style.color = '#262626';
    }

    Tinh_DBSH[l - 1].style.opacity = '1';
    Tinh_DBSH[l - 1].style.transition = 'all 0.4s';
    Click_DBSH[l - 1].style.color = '#FCD700';
}

