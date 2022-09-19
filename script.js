var myVar;
var myVar_2;
var myVar_3;
var myVar_4;
var myVar_5;
var myVar_6;
var myVar_7;
var myVar_8;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
    myVar_2 = setTimeout(stair_1, 2100);
    myVar_3 = setTimeout(stair_2, 2200);
    myVar_4 = setTimeout(stair_3, 2300);
    myVar_6 = setTimeout(popin_1, 2000);
    myVar_7 = setTimeout(popin_2, 2000);
    myVar_8 = setTimeout(popin_3, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("element-1").style.display = "block";
    document.getElementById("element-2").style.display = "block";
    document.getElementById("element-3").style.display = "block";
}

function stair_1() {
    document.getElementById("item-1").style.display = "block";
}
function stair_2() {
    document.getElementById("item-2").style.display = "block";
}
function stair_3() {
    document.getElementById("item-3").style.display = "unset";
}

function popin_1() {
    document.getElementById("item-5").style.display = "block";
}
function popin_2() {
    document.getElementById("item-6").style.display = "block";
}
function popin_3() {
    document.getElementById("item-7").style.display = "block";
}