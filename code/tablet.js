var fs = require("fs");

//1: Define the Template to load when Device type is Desktop
_3vot.el.innerHTML = fs.readFileSync( __dirname + "/views/layoutmobile.html"  );


    $(".tab-menu>div.row>div.list-group a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".tab-list>div.viva-tab-content").removeClass("active");
        $(".tab-list>div.viva-tab-content").eq(index).addClass("active");
    });

    $("#zonemobile .dropdown-menu a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".tab-list>div.viva-tab-content").removeClass("active");
        $(".tab-list>div.viva-tab-content").eq(0).addClass("active");
        $("#zone .subtab-list .viva-tab-content").removeClass("active");
        $("#zone .subtab-list .viva-tab-content").eq(index).addClass("active");
    });


     $("#pricemobile .dropdown-menu a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".tab-list>div.viva-tab-content").removeClass("active");
        $(".tab-list>div.viva-tab-content").eq(1).addClass("active");
        $("#price .subtab-list .viva-tab-content").removeClass("active");
        $("#price .subtab-list .viva-tab-content").eq(index).addClass("active");  
        console.log(index);
    });

