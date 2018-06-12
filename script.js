/* global $ */
//forever faithful Color Palette
$(document).ready(function(){
    
var me = $("#main");
var about = $("#about");
var port = $("#port");
var contact = $("#contact");
var all = $(".footer");
var steam = $("#steamb");
window.steam = steam;
var time;
var x = 0;
var y = 0;

function hideContent(){
    $(".stuff").hide();
}
hideContent();
$(".aboutme").hide();

function distance(x1, y1, x2, y2){
    return Math.sqrt((y2-y1)**2+(x2-x1)**2);
}

function slope(x1, y1, x2, y2){
    return (y2-y1)/(x2-x1);
}

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
    time = setTimeout(function(){
        $("#mainText").show();
    },1000);
},
    function(){
        $("#mainText").hide();
        clearTimeout(time);
    }
);

about.hover(function(){
    time = setTimeout(function(){
        $("#aboutText").show();
    },1000);
},
    function(){
        $("#aboutText").hide();
        clearTimeout(time);
    }
);

port.hover(function(){
    time = setTimeout(function(){
        $("#portText").show();
    },1000);
},
    function(){
        $("#portText").hide();
        clearTimeout(time);
    }
);

contact.hover(function(){
    time = setTimeout(function(){
        $("#contText").show();
    },1000);
},
    function(){
        $("#contText").hide();
        clearTimeout(time);
    }
);


$("body").mousemove(function(event){
    var d = distance(event.clientX,event.clientY,steam.offset().left+x,steam.offset().top+y);
    console.log(d);
    if (d < 100){
        x += steam.offset().left - event.clientX;
        y += steam.offset().top - event.clientY;
        steam.css("left",x);
        steam.css("top",y);
    }
});







});