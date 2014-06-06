(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
var fs = require("fs");

//1: Define the Template to load when Device type is Desktop
_3vot.el.innerHTML = "<!--Header-->\n  <header >\n    <div class=\"container\">\n      <div class=\"col-md-12 col-sm-12\">\n        <a href=\"\" class=\"logo\"></a>\n        <h1>La guía más completa de Costa Rica</h1>\n      </div>\n    </div>\n  </header>\n<!--/Header-->\n\n<!--Main Section-->\n<section class=\"main-section\">\n  <!--Container--> \n  \n  <div class=\"container\" id=\"mainMenu\">\n  \t\n\t \t<div class=\"col-md-12  tab-menu\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"list-group\">\n\n\t\t\t\t\t<a href=\"#\" class=\"list-group-item active text-center btn_zona\">\n\t\t      \t<span class=\"glyphicon glyphicon-map-marker\"></span>Buscar por Zona\n\t\t       </a>\n\n\t\t\t\t\t<a href=\"#\" class=\"list-group-item text-center btn_precio\">\n\t\t        <span class=\"glyphicon glyphicon-usd\"></span>Buscar por Precio\n\t\t      </a>\n\n\t\t\t\t</div><!--List Group-->\n\t\t\t</div><!--Row-->\n\t\t</div>\n\n  </div>\n\n  <div class=\"container\" id=\"mainMenu\">\n\t  <div class=\"col-md-12 col-sm-12 subsections\">\n\t      <div class=\"row\">\n\t        <!--Main Menu Tab List-->\n\n\t          <!-- Price Content -->\n\t          <div class=\"viva-tab-content\" id=\"price\">\n\t              <div class=\"tab-submenu col-md-2 col-sm-2\">\n\t                  <div class=\"row\">\n\n\t                      <div class=\"list-group\" id=\"sideMenu\">\n\t                       \n\t                      </div><!--List Group-->\n\n\t                  </div><!--/Row-->  \n\t              </div><!--/Column Submenu-->\n\t    \n\t              <div class=\"subtab-list col-md-10 col-sm-10\" id=\"mainContent\">\n\n\t              </div><!--/ Column Subtab -->            \n\t          </div><!--/ Price Content -->\n\n\t        </div>\n\t        <!--/ Main Menu Tab List -->\n\n\t      </div><!--/ Row -->\n\t    </div>\n\t\t</div>\n</section>\n\n";


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


  

},{"fs":1}]},{},[2])