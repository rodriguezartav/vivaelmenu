var fs = require("fs");

//1: Define the Template to load when Device type is Desktop
_3vot.el.innerHTML = fs.readFileSync( __dirname + "/views/layout.html"  );


    $(".tab-menu>div.row>div.list-group a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".tab-list>div.viva-tab-content").removeClass("active");
        $(".tab-list>div.viva-tab-content").eq(index).addClass("active");
    });

    $("#zone .tab-submenu a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("#zone .subtab-list .viva-tab-content").removeClass("active");
        $("#zone .subtab-list .viva-tab-content").eq(index).addClass("active");
    });

 
    $("#price .tab-submenu a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("#price .subtab-list .viva-tab-content").removeClass("active");
        $("#price .subtab-list .viva-tab-content").eq(index).addClass("active");
        console.log(index);   
    });


  
