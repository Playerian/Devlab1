/* global $ */
//forever faithful Color Palette
$(document).ready(function(){
    
let $window = $(window);
let $body = $('body');
var me = $("#main");
var about = $("#about");
var port = $("#port");
var contact = $("#contact");
var all = $(".header");
var steam = $("#steamb");
var time;
let expanded = false;

function hideContent(){
    $(".stuff").hide();
}

function hideItems(){
    $('.item').hide();
}

function showItems(){
    $('.item').show();
}

hideContent();
$(".aboutme").hide();

all.click(function(){
    //$(".aboutme").show();
});

$("#image").click(function(){
    hideContent();
    $(".aboutme").hide();
});

me.click(function(){
    let element = $(this);
    var timeout;
    if (expanded){
        if (element.hasClass('expanded')){
            expanded = false;
            $('#myName').show();
            $("#mainCont").hide();
            $('#headPic').hide();
            $('#headPic').removeClass('cropAni');
            element.removeClass('expanded');
            element.css('width', '');
            element.css('height', '');
            $body.css('overflow', 'visible');
            element.removeClass('scrollable');
            if (timeout){
                clearTimeout(timeout);
            }
        }
    }else{
        expanded = true;
        hideContent();
        $("#mainText").hide();
        $('#myName').hide();
        element.addClass('expanded');
        element.css('width', $window.width());
        element.css('height', $window.height());
        $body.css('overflow', 'hidden');
        timeout = setTimeout(() => {
            if (expanded){
                $('#mainCont').appendTo(element);
                $('#mainCont').show();
                $('#headPic').show();
                element.addClass('scrollable');
            }
        }, 2000);
    }
});

about.click(function(){
    let element = $(this);
    var timeout;
    if (expanded){
        if (element.hasClass('expanded')){
            expanded = false;
            showItems();
            $('#aboutTitle').show();
            $("#aboutMe").hide();
            element.removeClass('expanded');
            element.css('width', '');
            element.css('height', '');
            $body.css('overflow', 'visible');
            element.removeClass('scrollable');
            element.removeClass('fixed');
            if (timeout){
                clearTimeout(timeout);
            }
        }
    }else{
        expanded = true;
        hideContent();
        $("#aboutTitle").hide();
        $('#aboutText').hide();
        element.addClass('expanded');
        element.css('width', $window.width());
        element.css('height', $window.height());
        $body.css('overflow', 'hidden');
        timeout = setTimeout(() => {
            if (expanded){
                $('#aboutMe').appendTo(element);
                $('#aboutMe').show();
                element.addClass('scrollable');
                element.addClass('fixed');
                hideItems();
                element.show();
            }
        }, 2000);
    }
});

port.click(function(){
    let element = $(this);
    var timeout;
    if (expanded){
        if (element.hasClass('expanded')){
            expanded = false;
            showItems();
            $('#portTitle').show();
            $("#portfolio").hide();
            element.removeClass('expanded');
            element.css('width', '');
            element.css('height', '');
            $body.css('overflow', 'visible');
            element.removeClass('scrollable');
            element.removeClass('fixed');
            if (timeout){
                clearTimeout(timeout);
            }
        }
    }else{
        expanded = true;
        hideContent();
        $("#portTitle").hide();
        $('#portText').hide();
        element.addClass('expanded');
        element.css('width', $window.width());
        element.css('height', $window.height());
        $body.css('overflow', 'hidden');
        timeout = setTimeout(() => {
            if (expanded){
                $('#portfolio').appendTo(element);
                $('#portfolio').show();
                element.addClass('scrollable');
                element.addClass('fixed');
                hideItems();
                element.show();
            }
        }, 2000);
    }
});

contact.click(function(){
    let element = $(this);
    var timeout;
    if (expanded){
        if (element.hasClass('expanded')){
            expanded = false;
            showItems();
            $('#contTitle').show();
            $("#contacter").hide();
            element.removeClass('expanded');
            element.css('width', '');
            element.css('height', '');
            $body.css('overflow', 'visible');
            element.removeClass('scrollable');
            element.removeClass('fixed');
            if (timeout){
                clearTimeout(timeout);
            }
        }
    }else{
        expanded = true;
        hideContent();
        $("#contTitle").hide();
        $('#contText').hide();
        element.addClass('expanded');
        element.css('width', $window.width());
        element.css('height', $window.height());
        $body.css('overflow', 'hidden');
        timeout = setTimeout(() => {
            if (expanded){
                $('#contacter').appendTo(element);
                $('#contacter').show();
                element.addClass('scrollable');
                element.addClass('fixed');
                hideItems();
                element.show();
            }
        }, 2000);
    }
});

me.hover(function(){
    let element = $(this);
    time = setTimeout(function(){
        if (!expanded){
            $("#mainText").show();
        }
    },1000);
},
    function(){
        $("#mainText").hide();
        clearTimeout(time);
    }
);

about.hover(function(){
    time = setTimeout(function(){
        if (!expanded){
            $("#aboutText").show();
        }
    },1000);
},
    function(){
        $("#aboutText").hide();
        clearTimeout(time);
    }
);

port.hover(function(){
    time = setTimeout(function(){
        if (!expanded){
            $("#portText").show();
        }
    },1000);
},
    function(){
        $("#portText").hide();
        clearTimeout(time);
    }
);

contact.hover(function(){
    time = setTimeout(function(){
        if (!expanded){
            $("#contText").show();
        }
    },1000);
},
    function(){
        $("#contText").hide();
        clearTimeout(time);
    }
);

});