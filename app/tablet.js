(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
var fs = require("fs");

//1: Define the Template to load when Device type is Desktop
_3vot.el.innerHTML = "<!--Header-->\r\n  <header>\r\n    <div class=\"container\">\r\n      <div class=\"col-md-12 col-sm-12\">\r\n        <a href=\"\" class=\"logo\"></a>\r\n        <h1>La guía más completa de Costa Rica</h1>\r\n      </div>\r\n    </div>\r\n  </header>\r\n<!--/Header-->\r\n\r\n<!--Main Section-->\r\n<section class=\"main-section\">\r\n  <!--Container--> \r\n  \r\n  <div class=\"container\" id=\"mainMenu\">\r\n    \r\n      <div class=\"row\">\r\n\r\n          <a class=\"list-group-item active text-center btn_zona col-xs-4 thumbnail\">\r\n            <span class=\"glyphicon glyphicon-map-marker \"></span>Buscar por Zona\r\n           </a>\r\n\r\n          <a href=\"#\" class=\"list-group-item text-center btn_precio  col-xs-4 thumbnail\">\r\n            <span class=\"glyphicon glyphicon-usd\"></span>Buscar por Precio\r\n          </a>\r\n\r\n      </div><!--List Group-->\r\n\r\n  </div>\r\n\r\n  <div class=\"container\" id=\"mainMenu\">\r\n    <div class=\"col-md-12 col-sm-12 subsections\">\r\n        <div class=\"row\">\r\n          <!--Main Menu Tab List-->\r\n\r\n            <!-- Price Content -->\r\n            <div class=\"viva-tab-content\" id=\"price\">\r\n                <div class=\"tab-submenu col-md-2 col-sm-2\">\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"list-group\" id=\"sideMenu\">\r\n                         \r\n                        </div><!--List Group-->\r\n\r\n                    </div><!--/Row-->  \r\n                </div><!--/Column Submenu-->\r\n      \r\n                <div class=\"subtab-list col-md-10 col-sm-10\" id=\"mainContent\">\r\n\r\n                </div><!--/ Column Subtab -->            \r\n            </div><!--/ Price Content -->\r\n\r\n          </div>\r\n          <!--/ Main Menu Tab List -->\r\n\r\n        </div><!--/ Row -->\r\n      </div>\r\n    </div>\r\n</section>\r\n\r\n";


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


},{"fs":1}]},{},[2])