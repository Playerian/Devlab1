/* global $ */
//forever faithful Color Palette
$(document).ready(function(){
    
var me = $("#main");
var about = $("#about");
var port = $("#port");
var contact = $("#contact");
var all = $(".footer");

function hideContent(){
    $(".stuff").hide();
}
hideContent();
$(".aboutme").hide();

all.click(function(){
    $(".aboutme").show();
});

$("#image").click(function(){
    hideContent();
    $(".aboutme").hide();
});

me.click(function(){
    hideContent();
    $("#mainCont").show();
});

about.click(function(){
    hideContent();
    console.log("yes");
    $("#aboutMe").show();
});

port.click(function(){
    hideContent();
    $("#portfolio").show();
});

contact.click(function(){
    hideContent();
    $("#contacter").show();
});

me.hover(function(){
    setTimeout(function(){
        $("#mainText").show();
    },2000)
});

about.hover(function(){
    $("#aboutText").show();
});

port.hover(function(){
    $("#portText").show();
});

contact.hover(function(){
    $("#contText").show();
});











});