var fs = require("fs");

_3vot.el.innerHTML = fs.readFileSync( __dirname + "/views/layout.html"  );

var MainMenu = require("./controllers/mainMenu")

MainMenu("mainMenu")

var SideMenu = require("./controllers/sideMenu")

SideMenu("sideMenu")

var MainContent = require("./controllers/mainContent")
MainContent("mainContent")

require("./managers/loadManager");


$(".scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".targetScroll").offset().top
    }, 1000);
});
