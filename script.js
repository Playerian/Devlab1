/* global $ */
//forever faithful Color Palette
$(document).ready(function(){
    
var me = $("#main");
var about = $("#about");
var port = $("#port");
var contact = $("#contact");
var all = $(".footer");
var steam = $("#steamb");
var time;

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

});