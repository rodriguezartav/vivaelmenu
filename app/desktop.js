(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
var Template =  require("./item")

var el;

Category = require("../../model/category")

Restaurant = require("../../model/restaurant")


function init(target){

	el = $("#" + target)
	

	Restaurant.bind("selected", onSelect)

	Category.bind("SELECTED", function(){
		el.empty()
	});


}

function onSelect(restaurant){
	el.html( Template(restaurant) );
}


module.exports = init;
},{"../../model/category":14,"../../model/restaurant":15,"./item":3}],3:[function(require,module,exports){
module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<div class="col-md-12">\n    <h3 class="h2 targetScroll">');
    
      __out.push(__sanitize(this.name + ", " + this.zona));
    
      __out.push('\n      <button class="btn btn-default btn-lg pull-right text-danger"><span class="glyphicon glyphicon-thumbs-down"></span></button>\n      <button class="btn btn-default btn-lg pull-right text-primary"><span class="glyphicon glyphicon-thumbs-up"></span></button>\n    </h3>\n</div><!--/Column-->\n\n<div class="col-md-8">\n  <!--Carousel-->\n  <div id="carousel-fabbrica" class="carousel slide" data-ride="carousel">\n      <div class="carousel-inner" id="slidesView">\n        <div class="item">\n          <img src=');
    
      __out.push(__sanitize(this.pics[0]));
    
      __out.push(' alt="">\n        </div>\n        <div class="item active">\n          <img src=');
    
      __out.push(__sanitize(this.pics[1]));
    
      __out.push(' alt="">\n        </div>\n        <div class="item">\n          <img src=');
    
      __out.push(__sanitize(this.pics[2]));
    
      __out.push(' alt="">\n        </div>\n      </div><!--/Carousel Inner--> \n\n      <a class="left carousel-control" href="#carousel-fabbrica" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>\n      <a class="right carousel-control" href="#carousel-fabbrica" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>\n\n  </div><!--/Carousel-->\n</div><!--Column-->\n\n<div class="col-md-4">\n    <ul class="list-group">\n      <li class="list-group-item list-group-item-danger">Detalles</li>\n      <li class="list-group-item"><b><span class="glyphicon glyphicon-usd"></span>Precios:</b> ');
    
      __out.push(__sanitize(this.price));
    
      __out.push('</li>\n      <li class="list-group-item"><b>Zona:</b> ');
    
      __out.push(__sanitize(this.zona));
    
      __out.push('</li>\n      <li class="list-group-item"><b>Dirección:</b> ');
    
      __out.push(__sanitize(this.address));
    
      __out.push('</li>\n      <li class="list-group-item"><b>Horario</b> ');
    
      __out.push(__sanitize(this.schedule));
    
      __out.push('</li>\n      <li class="list-group-item"><b>Teléfono</b> ');
    
      __out.push(__sanitize(this.phone));
    
      __out.push('</li>\n      <!-- Open Map Modal Trigger -->\n      <li class="list-group-item">\n        <a href="" class="btn btn-block" data-toggle="modal" data-target="#myModal">\n          <span class="glyphicon glyphicon-hand-right"></span>\n          Ver mapa\n        </a>\n      </li>\n      <!--/ Open Map Modal Trigger -->\n    </ul>\n</div><!--/Column-->\n</div>\n<!--/SubTab Restaurant La FAbbrica-->');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}
},{}],4:[function(require,module,exports){
var fs = require("fs")


var ItemTemplate = require("./item")

var el;

Category = require("../../model/category")
Restaurant = require("../../model/restaurant")

function init(target){

	el = $("#" + target)

	el.delegate( ".restaurant_list_item", "click", onRestaurantClick )

	Category.bind("SELECTED", function(category){
		render( category.type, category.name )
	});

}


function render(type, name){
	var restaurants = []
	var allRestaurants = Restaurant.all()
	for (var i = allRestaurants.length - 1; i >= 0; i--) {
		var restaurant = allRestaurants[i];
		if(restaurant[type] == name) restaurants.push(restaurant);
	};

	var str = ""
	for (var i = restaurants.length - 1; i >= 0; i--) {
		var restaurant = restaurants[i]
		str += ItemTemplate(restaurant)
	};

	el.find("#item_list").html( str )
	
}

function onRestaurantClick(e){
	var target = $(e.target)
	if( !target.hasClass("restaurant_list_item") ){
		target = target.parents(".restaurant_list_item")
	}
	var restaurant =  Restaurant.find( target.data("id") );

	Restaurant.trigger("selected", restaurant);

}




module.exports = init;
},{"../../model/category":14,"../../model/restaurant":15,"./item":5,"fs":1}],5:[function(require,module,exports){
module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<li class="restaurant_list_item scroll" data-id="');
    
      __out.push(__sanitize(this.id));
    
      __out.push('" >\n  <a class="figure-link" href="" data-toggle="tab" >\n    <figure>\n      <div>\n        <img src=');
    
      __out.push(__sanitize(this.thumb));
    
      __out.push(' alt="">\n      </div>\n      <h3 class="text-danger">');
    
      __out.push(__sanitize(this.name + ", " + this.address));
    
      __out.push('</h3>\n      <figcaption>');
    
      __out.push(__sanitize(this.description));
    
      __out.push('</figcaption>\n    </figure>\n  </a>\n</li>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}
},{}],6:[function(require,module,exports){
var Template = require("./layout")

var el;

var detailEl,listEl;

Category = require("../../model/category")
Restaurant = require("../../model/restaurant")

var List = require("../listView")
var Detail = require("../detailView")

function init(target){

	el = $("#" + target)
	el.html( Template() )


	listEl = $("#listView")
	detailEl = $("#detailEl")

	List( "listView") 
	Detail( "detailView" )

	Restaurant.bind( "selected", function(restaurant){} );

	Category.bind("SELECTED", renderCategory);
}


function renderCategory(category){

	el.find("#selectedCategory").html(category.name)

	if(_3vot.device == "phone"){
		detailEl.hide()
		listEl.hide()
	}

}

	



module.exports = init;
},{"../../model/category":14,"../../model/restaurant":15,"../detailView":2,"../listView":4,"./layout":7}],7:[function(require,module,exports){
module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<h2><span class="glyphicon glyphicon-map-marker"></span><span id="selectedCategory"></span></h2>\n\n<div class="col-md-12">\n\t<div class="row">\n\t\t<div id="detailView"></div>\n\t</div>\n</div>\n\n<div class="col-md-12">\n\t<div class="row">\n\t\t<div id="listView">\n\t\t\t<ul class="nav nav-tabs" id="item_list"></ul>\n\t\t</div>\n\t</div>\n</div>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}
},{}],8:[function(require,module,exports){
var Template =  require("./layout")

var el;

Category = require("../../model/category")

function init(target){

	el = $("#" + target)
	//el.html( Template()  )

	el.find(".btn_zona").click( onZonaClick )
	el.find(".btn_precio").click( onPrecioClick )

}

function onZonaClick(){
	loadFirstCategory("zona")
	

}

function onPrecioClick(){
	loadFirstCategory("price")
}

function loadFirstCategory(type){
	var allCategories = Category.findAllByAttribute("type",type)
	var firstCategory = allCategories[allCategories.length - 1]


	Category.trigger("SELECTED_TYPE_CHANGED", firstCategory.type)


	//IF IN URL THERE IS NO #/restaurant/ID
	Category.trigger("SELECTED", firstCategory )	

}

module.exports = init;
},{"../../model/category":14,"./layout":9}],9:[function(require,module,exports){
module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
    
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}
},{}],10:[function(require,module,exports){
var Template =  require("./item")

var el;

Category = require("../../model/category")

function init(target){

	el = $("#" + target)

	Category.bind("SELECTED_TYPE_CHANGED", render)

	el.delegate( ".category_list_item", "click", onCategoryClick )

}

function render(type){

	
	var categories = Category.findAllByAttribute("type", type)
	
	var str = ""
	for (var i = categories.length - 1; i >= 0; i--) {
		var category = categories[i]
		str +=Template(category)
	};

	el.html( str )
	
}

function onCategoryClick(e){
	var target = $(e.target)
	if( !target.hasClass("category_list_item") ){
		console.log(target)
		target = target.parents(".category_list_item")
	}
	var category =  Category.find( target.data("id") );

	Category.trigger("SELECTED", category);


}


module.exports = init;
},{"../../model/category":14,"./item":11}],11:[function(require,module,exports){
module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<a data-id="');
    
      __out.push(__sanitize(this.id));
    
      __out.push('" class="list-group-item category_list_item">\n\t');
    
      __out.push(__sanitize(this.name));
    
      __out.push('\n\n\t');
    
      if (this.flag) {
        __out.push('\n\t\t<span class="glyphicon glyphicon-bookmark"></span>\n\t');
      }
    
      __out.push('\n\n</a>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}
},{}],12:[function(require,module,exports){
var fs = require("fs");

_3vot.el.innerHTML = "<!--Header-->\n  <header >\n    <div class=\"container\">\n      <div class=\"col-md-12 col-sm-12\">\n        <a href=\"\" class=\"logo\"></a>\n        <h1>La guía más completa de Costa Rica</h1>\n      </div>\n    </div>\n  </header>\n<!--/Header-->\n\n<!--Main Section-->\n<section class=\"main-section\">\n  <!--Container--> \n  \n  <div class=\"container\" id=\"mainMenu\">\n  \t\n\t \t<div class=\"col-md-12  tab-menu\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"list-group\">\n\n\t\t\t\t\t<a href=\"#\" class=\"list-group-item active text-center btn_zona\">\n\t\t      \t<span class=\"glyphicon glyphicon-map-marker\"></span>Buscar por Zona\n\t\t       </a>\n\n\t\t\t\t\t<a href=\"#\" class=\"list-group-item text-center btn_precio\">\n\t\t        <span class=\"glyphicon glyphicon-usd\"></span>Buscar por Precio\n\t\t      </a>\n\n\t\t\t\t</div><!--List Group-->\n\t\t\t</div><!--Row-->\n\t\t</div>\n\n  </div>\n\n  <div class=\"container\" id=\"mainMenu\">\n\t  <div class=\"col-md-12 col-sm-12 subsections\">\n\t      <div class=\"row\">\n\t        <!--Main Menu Tab List-->\n\n\t          <!-- Price Content -->\n\t          <div class=\"viva-tab-content\" id=\"price\">\n\t              <div class=\"tab-submenu col-md-2 col-sm-2\">\n\t                  <div class=\"row\">\n\n\t                      <div class=\"list-group\" id=\"sideMenu\">\n\t                       \n\t                      </div><!--List Group-->\n\n\t                  </div><!--/Row-->  \n\t              </div><!--/Column Submenu-->\n\t    \n\t              <div class=\"subtab-list col-md-10 col-sm-10\" id=\"mainContent\">\n\n\t              </div><!--/ Column Subtab -->            \n\t          </div><!--/ Price Content -->\n\n\t        </div>\n\t        <!--/ Main Menu Tab List -->\n\n\t      </div><!--/ Row -->\n\t    </div>\n\t\t</div>\n</section>\n\n";

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

},{"./controllers/mainContent":6,"./controllers/mainMenu":8,"./controllers/sideMenu":10,"./managers/loadManager":13,"fs":1}],13:[function(require,module,exports){

Category = require("../model/category")

function init(){
	
	var allCategories = Category.findAllByAttribute("type","zona")
	var firstCategory = allCategories[allCategories.length - 1]


	Category.trigger("SELECTED_TYPE_CHANGED", firstCategory.type)


	//IF IN URL THERE IS NO #/restaurant/ID
	Category.trigger("SELECTED", firstCategory )	

}

module.exports = init();
},{"../model/category":14}],14:[function(require,module,exports){
var _3Model = require("3vot-model/lib/ajaxless")


var fields = ["name", "flag", "type"]; 

Category = _3Model.Model.setup("Category", fields);


Category.create( { name: "Escazu" , type: "zona", flag: false  } )
Category.create( { name: "Heredia" , type: "zona", flag: false  } )
Category.create( { name: "San Jose" , type: "zona", flag: false  } )
Category.create( { name: "San Pedro" , type: "zona", flag: false  } )




Category.create( { name: "Más de $30" , type: "price", flag: true  } )
Category.create( { name: "De $20 a $30" , type: "price", flag: false  } )
Category.create( { name: "De $12 a $20" , type: "price", flag: false  } )
Category.create( { name: "Hasta $12" , type: "price", flag: false  } )



Category.selectedType;

module.exports = Category;
},{"3vot-model/lib/ajaxless":16}],15:[function(require,module,exports){
var _3Model = require("3vot-model/lib/ajaxless")


var fields = ["name", "thumb", "description", "zona", "price","address", "phone", "pics", "schedule"]; 

Restaurant = _3Model.Model.setup("Restaurant", fields);

Restaurant.create( { 
	name: "La Fabbrica", 
	address: "San Pedro",
	description: "La razón de ser de nuestra marca es ofrecer en Costa Rica y posteriormente Centroamérica.",
	phone: "2234-7209",
	pics: ["http://vivaelmenu.com/wp-content/uploads/2013/03/lf7.jpg", "http://vivaelmenu.com/wp-content/uploads/2013/03/lfspedro.jpg","http://vivaelmenu.com/wp-content/uploads/2013/03/lf7.jpg"],
	price: "De $12 a $20",
	schedule: "De Lunes a Domingo, de 12 md - 10 pm", 
	thumb: "http://vivaelmenu.com/wp-content/uploads/2013/03/lfspedro-150x105.jpg" ,
	zona: "San Pedro",
} )
Restaurant.create( { 
	name: "La Oliva Verde" , 
	address: "San Pedro",
	description :"Acércate al Mediterráneo",
	phone: "2280-2908",
	pics: ["http://vivaelmenu.com/wp-content/uploads/2013/03/983581_10151717162743454_794602047_n.png", 
			"http://vivaelmenu.com/wp-content/uploads/2013/03/1003128_10151704860443454_1163806011_n.png",
			"http://vivaelmenu.com/wp-content/uploads/2013/03/1011776_10151718772488454_830129345_n.png"],
	price: "Hasta $12",
	schedule: "De Lunes a Viernes, 11 am - 8 pm; Viernes y Sábado, 11 am - 6 pm", 
	thumb: "http://vivaelmenu.com/wp-content/uploads/2013/03/554057_10150769914303454_207681160_n-150x105.jpg" ,
	zona: "San Pedro"
} )
Restaurant.create( { 
	name: "Château 1525" , 
	address: "San Jose",
	description :"Cada instante una inspiración!",
	phone: "2248-9337",
	pics: ["http://vivaelmenu.com/wp-content/uploads/2013/04/cha2.jpg", 
			"http://vivaelmenu.com/wp-content/uploads/2013/04/cha3.jpg",
			"http://vivaelmenu.com/wp-content/uploads/2013/04/cha4.jpg"],
	price: "De $20 a $30",
	schedule: "Horario: Lunes, 11 am - 3 pm; Martes a Sábado, 11 am - 3 pm y 6 pm- 10 pm", 
	thumb: "http://vivaelmenu.com/wp-content/uploads/2013/04/chalogo-150x105.jpg" ,
	zona: "San Jose"
} )
Restaurant.create( { 
	name: "Tin Jo" , 
	address: "San Jose",
	description :"Tin Jo es el restaurante asiático de mayor tradición en Costa Rica.",
	phone: "2221-7605",
	pics: ["http://vivaelmenu.com/wp-content/uploads/2013/03/tj5.jpg", 
			"http://vivaelmenu.com/wp-content/uploads/2013/03/tj1.jpg",
			"http://vivaelmenu.com/wp-content/uploads/2013/03/tj2.jpg"],
	price: "De $20 a $30",
	schedule: "De Lunes a Jueves, 11 am - 3pm y 5 pm - 10 pm; Viernes y Sábado, 11 am - 3 pm y 5 pm - 11 pm; Domingos, 11 am - 9 pm", 
	thumb: "http://vivaelmenu.com/wp-content/uploads/2013/03/tjlogo-150x105.jpg" ,
	zona: "San Jose"
} )
Restaurant.create( { 
	name: "Teriyaki" , 
	address: "Plaza Real Cariari",
	description :"Vive la experiencia Teriyaki",
	phone: "2221-7605",
	pics: ["http://vivaelmenu.com/wp-content/uploads/2013/02/teriyaki4.jpg", 
			"http://vivaelmenu.com/wp-content/uploads/2013/02/teriyaki3.jpg",
			"http://vivaelmenu.com/wp-content/uploads/2013/02/969388_10151436631663157_2137316138_n.jpg"],
	price: "Hasta $12",
	schedule: "---", 
	thumb: "http://vivaelmenu.com/wp-content/uploads/2013/02/969388_10151436631663157_2137316138_n1-150x105.jpg" ,
	zona: "Heredia"
} )
Restaurant.create( { 
	name: "Carl's Jr" , 
	address: "Plaza Real Cariari",
	description :"En Carl's Jr. te ofrecemos sólo los mejores productos.",
	phone: "2221-7605",
	pics: ["http://vivaelmenu.com/wp-content/uploads/2013/02/ce4d6257e2649086c3c79a01a59bb768_w395_h269_cp3.jpg", 
			"http://vivaelmenu.com/wp-content/uploads/2013/02/27a15e7a373376058acf887d0299dfe3_w395_h269_cp2.jpg",
			"http://vivaelmenu.com/wp-content/uploads/2013/02/3991142c3d2f653a2bae612e8f010d46_w395_h269_cp3.jpg"],
	price: "Hasta $12",
	schedule: "De Domingo a Jueves, 10am - 9pm; Viernes y Sábados, 10am - 10pm.", 
	thumb: "http://vivaelmenu.com/wp-content/uploads/2013/02/carls-jr13-150x105.jpg" ,
	zona: "Heredia"
} )
Restaurant.create( { 
	name: "Le Monastère" , 
	address: "Escazu",
	description :"Una experiencia mística.",
	phone: "2228-8515",
	pics: ["http://vivaelmenu.com/wp-content/uploads/2013/03/im5.jpg", 
			"http://vivaelmenu.com/wp-content/uploads/2013/03/im7.jpg",
			"http://vivaelmenu.com/wp-content/uploads/2013/03/im6.jpg"],
	price: "De $20 a $30",
	schedule: "De Lunes a Sábado, 6 pm - 11 pm", 
	thumb: "http://vivaelmenu.com/wp-content/uploads/2013/03/imlogo-150x105.jpg" ,
	zona: "Escazu"
} )
Restaurant.create( { 
	name: "Mekong Asia Fusion" , 
	address: "Escazu",
	description :"Sabores auténticos del río Mekong con una presentación moderna.",
	phone: "2208-8998",
	pics: ["http://vivaelmenu.com/wp-content/uploads/2013/02/one-of-our-appetizers-FILEminimizer.jpg", 
			"http://vivaelmenu.com/wp-content/uploads/2013/02/one-of-our-appetizers-FILEminimizer.jpg",
			"http://vivaelmenu.com/wp-content/uploads/2013/02/one-of-our-appetizers-FILEminimizer.jpg"],
	price: "De $20 a $30",
	schedule: "Lunes a Viernes, 12pm - 3pm; 6pm - 11pm, Sábado, 12pm - 11pm, Domingo, 12pm - 6pm", 
	thumb: "http://vivaelmenu.com/wp-content/uploads/2013/02/mekong-asia-fusion-FILEminimizer-150x105.jpg" ,
	zona: "Escazu"
} )
Restaurant.create( { 
	name: "Il Padrino" , 
	address: "Avenida Escazú",
	description :"Servicio personalizado, comida fresca y saludable... 'La comida e´cosa nostra'",
	phone: "2288-6057",
	pics: ["http://vivaelmenu.com/wp-content/uploads/2013/04/ip1.jpg", 
			"http://vivaelmenu.com/wp-content/uploads/2013/04/ip3.jpg",
			"http://vivaelmenu.com/wp-content/uploads/2013/04/ip4.jpg"],
	price: "De $12 a $20",
	schedule: "De Lunes a Domingo, 11am - 9pm", 
	thumb: "http://vivaelmenu.com/wp-content/uploads/2013/04/admin-ajax.php_-150x105.jpg" ,
	zona: "Escazu"
} )
Restaurant.create( { 
	name: "Andiamo La" , 
	address: "Curridabat",
	description :"¡Verdadera y auténtica comida italiana!",
	phone: "2272-1838",
	pics: ["http://vivaelmenu.com/wp-content/uploads/2014/02/33742323_nJsFFLd2OerswSJK-j0hDOHKkpohu-CWMb7SNgWUEh4.jpg", 
			"http://vivaelmenu.com/wp-content/uploads/2014/02/39036702_j13n48vh6Kzemg5cKekg2d_riLjcUNoTH5Pe4lRFIrw.jpg",
			"http://vivaelmenu.com/wp-content/uploads/2014/02/43993415_mIBq9xpqg7-yNzeDZRpHINKsRgtsPaWJm8St8WP6MYw.jpg"],
	price: "Más de $30",
	schedule: "De Lunes a Miercoles, 12md - 10pm; Jueves a Sabado, 12md - 11pm, Domingo 12md - 6pm", 
	thumb: "http://vivaelmenu.com/wp-content/uploads/2014/02/39036702_j13n48vh6Kzemg5cKekg2d_riLjcUNoTH5Pe4lRFIrw-150x105.jpg" ,
	zona: "Escazu"
} )
Restaurant.create( { 
	name: "L’ile de France" , 
	address: "Escazú",
	description :"Treinta años de tradición culinaria que se funden con el más cuidado ambiente contemporáneo, dan como resultado una experiencia única.",
	phone: "2272-1838",
	pics: ["http://vivaelmenu.com/wp-content/uploads/2013/06/255327_394423737262258_540968028_n.jpg", 
			"http://vivaelmenu.com/wp-content/uploads/2013/06/313816_519737671397530_1274505525_n.jpg",
			"http://vivaelmenu.com/wp-content/uploads/2013/06/314465_252958828075417_920518992_n.jpg"],
	price: "Más de $30",
	schedule: "De Lunes a Sábado de 12md - 11pm, Domingos de 12md - 5pm.", 
	thumb: "http://vivaelmenu.com/wp-content/uploads/2013/06/549145_352173244820641_1706104582_n-150x105.jpg" ,
	zona: "Escazu"
} )
Restaurant.create( { 
	name: "Olio" , 
	address: "Barrio Escalante",
	description : "Comida Mediterránea y Española.",
	phone: "2281-0541",
	pics: ["http://vivaelmenu.com/wp-content/uploads/2013/03/olio5a8599.jpg", 
			"http://vivaelmenu.com/wp-content/uploads/2013/03/olio2.jpg",
			"http://vivaelmenu.com/wp-content/uploads/2013/03/554712_498188626897302_1378464852_n.jpg"],
	price: "De $20 a $30",
	schedule: "De Lunes a Miércoles, 11 am - 11pm; Jueves y Viernes, 11 am - 12 md; Domingo, 5 pm - 12 am", 
	thumb: "http://vivaelmenu.com/wp-content/uploads/2013/03/filename-dscn0033-jpg-150x105.jpg" ,
	zona: "San Pedro"
} )


Restaurant.selected;

module.exports = Restaurant;
},{"3vot-model/lib/ajaxless":16}],16:[function(require,module,exports){
(function() {
  var Events, Model, Module, _3Model;

  Events = require("./events");

  Model = require("./model_ajaxless");

  Module = require("./module");

  _3Model = this._3Model = {};

  _3Model.Events = Events;

  _3Model.Module = Module;

  _3Model.Model = Model;

  _3Model.isBlank = Model.isBlank;

  Module.extend.call(_3Model, Events);

  _3Model.Class = Module;

  module.exports = _3Model;

}).call(this);

},{"./events":17,"./model_ajaxless":18,"./module":19}],17:[function(require,module,exports){
(function() {
  var Events, trim,
    __slice = [].slice;

  trim = function(text) {
    var rtrim, _ref;
    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        if ((_ref = text === null) != null) {
      _ref;
    } else {
      ({
        "": (text + "").replace(rtrim, "")
      });
    };
    return text;
  };

  Events = {
    bind: function(ev, callback) {
      var calls, evs, name, _i, _len;
      evs = ev.split(' ');
      if (this.hasOwnProperty('_callbacks') && this._callbacks) {
        calls = this._callbacks;
      } else {
        this._callbacks = {};
        calls = this._callbacks;
      }
      for (_i = 0, _len = evs.length; _i < _len; _i++) {
        name = evs[_i];
        calls[name] || (calls[name] = []);
        calls[name].push(callback);
      }
      return this;
    },
    one: function(ev, callback) {
      var handler;
      return this.bind(ev, handler = function() {
        this.unbind(ev, handler);
        return callback.apply(this, arguments);
      });
    },
    trigger: function() {
      var args, callback, ev, list, _i, _len, _ref;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      ev = args.shift();
      list = this.hasOwnProperty('_callbacks') && ((_ref = this._callbacks) != null ? _ref[ev] : void 0);
      if (!list) {
        return;
      }
      for (_i = 0, _len = list.length; _i < _len; _i++) {
        callback = list[_i];
        if (callback.apply(this, args) === false) {
          break;
        }
      }
      return true;
    },
    listenTo: function(obj, ev, callback) {
      obj.bind(ev, callback);
      this.listeningTo || (this.listeningTo = []);
      this.listeningTo.push({
        obj: obj,
        ev: ev,
        callback: callback
      });
      return this;
    },
    listenToOnce: function(obj, ev, callback) {
      var handler, listeningToOnce;
      listeningToOnce = this.listeningToOnce || (this.listeningToOnce = []);
      obj.bind(ev, handler = function() {
        var i, idx, lt, _i, _len;
        idx = -1;
        for (i = _i = 0, _len = listeningToOnce.length; _i < _len; i = ++_i) {
          lt = listeningToOnce[i];
          if (lt.obj === obj) {
            if (lt.ev === ev && lt.callback === callback) {
              idx = i;
            }
          }
        }
        obj.unbind(ev, handler);
        if (idx !== -1) {
          listeningToOnce.splice(idx, 1);
        }
        return callback.apply(this, arguments);
      });
      listeningToOnce.push({
        obj: obj,
        ev: ev,
        callback: callback,
        handler: handler
      });
      return this;
    },
    stopListening: function(obj, events, callback) {
      var ev, evts, i, idx, listeningTo, lt, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _results;
      if (arguments.length === 0) {
        _ref = [this.listeningTo, this.listeningToOnce];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          listeningTo = _ref[_i];
          if (!listeningTo) {
            continue;
          }
          for (_j = 0, _len1 = listeningTo.length; _j < _len1; _j++) {
            lt = listeningTo[_j];
            lt.obj.unbind(lt.ev, lt.handler || lt.callback);
          }
        }
        this.listeningTo = void 0;
        return this.listeningToOnce = void 0;
      } else if (obj) {
        _ref1 = [this.listeningTo, this.listeningToOnce];
        _results = [];
        for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
          listeningTo = _ref1[_k];
          if (!listeningTo) {
            continue;
          }
          events = events ? events.split(' ') : [void 0];
          _results.push((function() {
            var _l, _len3, _results1;
            _results1 = [];
            for (_l = 0, _len3 = events.length; _l < _len3; _l++) {
              ev = events[_l];
              _results1.push((function() {
                var _m, _ref2, _results2;
                _results2 = [];
                for (idx = _m = _ref2 = listeningTo.length - 1; _ref2 <= 0 ? _m <= 0 : _m >= 0; idx = _ref2 <= 0 ? ++_m : --_m) {
                  lt = listeningTo[idx];
                  if ((!ev) || (ev === lt.ev)) {
                    lt.obj.unbind(lt.ev, lt.handler || lt.callback);
                    if (idx !== -1) {
                      _results2.push(listeningTo.splice(idx, 1));
                    } else {
                      _results2.push(void 0);
                    }
                  } else if (ev) {
                    evts = lt.ev.split(' ');
                    if (~(i = evts.indexOf(ev))) {
                      evts.splice(i, 1);
                      lt.ev = trim(evts.join(' '));
                      _results2.push(lt.obj.unbind(ev, lt.handler || lt.callback));
                    } else {
                      _results2.push(void 0);
                    }
                  } else {
                    _results2.push(void 0);
                  }
                }
                return _results2;
              })());
            }
            return _results1;
          })());
        }
        return _results;
      }
    },
    unbind: function(ev, callback) {
      var cb, evs, i, list, name, _i, _j, _len, _len1, _ref;
      if (arguments.length === 0) {
        this._callbacks = {};
        return this;
      }
      if (!ev) {
        return this;
      }
      evs = ev.split(' ');
      for (_i = 0, _len = evs.length; _i < _len; _i++) {
        name = evs[_i];
        list = (_ref = this._callbacks) != null ? _ref[name] : void 0;
        if (!list) {
          continue;
        }
        if (!callback) {
          delete this._callbacks[name];
          continue;
        }
        for (i = _j = 0, _len1 = list.length; _j < _len1; i = ++_j) {
          cb = list[i];
          if (!(cb === callback)) {
            continue;
          }
          list = list.slice();
          list.splice(i, 1);
          this._callbacks[name] = list;
          break;
        }
      }
      return this;
    }
  };

  Events.on = Events.bind;

  Events.off = Events.unbind;

  module.exports = Events;

}).call(this);

},{}],18:[function(require,module,exports){
(function() {
  var Events, Model, Module, createObject, isArray, isBlank, makeArray,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  Events = require("./events");

  Module = require("./module");

  Model = (function(_super) {
    __extends(Model, _super);

    Model.extend(Events);

    Model.records = [];

    Model.irecords = {};

    Model.attributes = [];

    Model.host = "";

    Model.headers = [];

    Model.configure = function() {
      var attributes, name;
      name = arguments[0], attributes = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      this.className = name;
      this.deleteAll();
      if (attributes.length) {
        this.attributes = attributes;
      }
      this.attributes && (this.attributes = makeArray(this.attributes));
      this.attributes || (this.attributes = []);
      this.unbind();
      return this;
    };

    Model.toString = function() {
      return "" + this.className + "(" + (this.attributes.join(", ")) + ")";
    };

    Model.find = function(id) {
      var record;
      record = this.exists(id);
      if (!record) {
        throw new Error("\"" + this.className + "\" model could not find a record for the ID \"" + id + "\"");
      }
      return record;
    };

    Model.exists = function(id) {
      var _ref;
      return (_ref = this.irecords[id]) != null ? _ref.clone() : void 0;
    };

    Model.addRecord = function(record) {
      if (record.id && this.irecords[record.id]) {
        this.irecords[record.id].remove();
      }
      record.id || (record.id = record.cid);
      this.records.push(record);
      this.irecords[record.id] = record;
      return this.irecords[record.cid] = record;
    };

    Model.refresh = function(values, options) {
      var record, records, result, _i, _len;
      if (options == null) {
        options = {};
      }
      if (options.clear) {
        this.deleteAll();
      }
      records = this.fromJSON(values);
      if (!isArray(records)) {
        records = [records];
      }
      for (_i = 0, _len = records.length; _i < _len; _i++) {
        record = records[_i];
        this.addRecord(record);
      }
      this.sort();
      result = this.cloneArray(records);
      this.trigger('refresh', result, options);
      return result;
    };

    Model.select = function(callback) {
      var record, _i, _len, _ref, _results;
      _ref = this.records;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        record = _ref[_i];
        if (callback(record)) {
          _results.push(record.clone());
        }
      }
      return _results;
    };

    Model.findByAttribute = function(name, value) {
      var record, _i, _len, _ref;
      _ref = this.records;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        record = _ref[_i];
        if (record[name] === value) {
          return record.clone();
        }
      }
      return null;
    };

    Model.findAllByAttribute = function(name, value) {
      return this.select(function(item) {
        return item[name] === value;
      });
    };

    Model.each = function(callback) {
      var record, _i, _len, _ref, _results;
      _ref = this.records;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        record = _ref[_i];
        _results.push(callback(record.clone()));
      }
      return _results;
    };

    Model.all = function() {
      return this.cloneArray(this.records);
    };

    Model.first = function() {
      var _ref;
      return (_ref = this.records[0]) != null ? _ref.clone() : void 0;
    };

    Model.last = function() {
      var _ref;
      return (_ref = this.records[this.records.length - 1]) != null ? _ref.clone() : void 0;
    };

    Model.count = function() {
      return this.records.length;
    };

    Model.deleteAll = function() {
      this.records = [];
      return this.irecords = {};
    };

    Model.destroyAll = function(options) {
      var record, _i, _len, _ref, _results;
      _ref = this.records;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        record = _ref[_i];
        _results.push(record.destroy(options));
      }
      return _results;
    };

    Model.update = function(id, atts, options) {
      return this.find(id).updateAttributes(atts, options);
    };

    Model.create = function(atts, options) {
      var record;
      record = new this(atts);
      return record.save(options);
    };

    Model.destroy = function(id, options) {
      return this.find(id).destroy(options);
    };

    Model.change = function(callbackOrParams) {
      if (typeof callbackOrParams === 'function') {
        return this.bind('change', callbackOrParams);
      } else {
        return this.trigger.apply(this, ['change'].concat(__slice.call(arguments)));
      }
    };

    Model.fetch = function(callbackOrParams) {
      if (typeof callbackOrParams === 'function') {
        return this.bind('fetch', callbackOrParams);
      } else {
        return this.trigger.apply(this, ['fetch'].concat(__slice.call(arguments)));
      }
    };

    Model.toJSON = function() {
      return this.records;
    };

    Model.fromJSON = function(objects) {
      var value, _i, _len, _results;
      if (!objects) {
        return;
      }
      if (typeof objects === 'string') {
        objects.replace(/\Id/g, 'id');
        objects = JSON.parse(objects);
      }
      if (isArray(objects)) {
        _results = [];
        for (_i = 0, _len = objects.length; _i < _len; _i++) {
          value = objects[_i];
          if (value.Id) {
            value.id = value.Id;
          }
          _results.push(new this(value));
        }
        return _results;
      } else {
        if (objects.Id) {
          objects.id = objects.Id;
        }
        return new this(objects);
      }
    };

    Model.fromForm = function() {
      var _ref;
      return (_ref = new this).fromForm.apply(_ref, arguments);
    };

    Model.sort = function() {
      if (this.comparator) {
        this.records.sort(this.comparator);
      }
      return this;
    };

    Model.cloneArray = function(array) {
      var value, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        value = array[_i];
        _results.push(value.clone());
      }
      return _results;
    };

    Model.idCounter = 0;

    Model.uid = function(prefix) {
      var uid;
      if (prefix == null) {
        prefix = '';
      }
      uid = prefix + this.idCounter++;
      if (this.exists(uid)) {
        uid = this.uid(prefix);
      }
      return uid;
    };

    function Model(atts) {
      Model.__super__.constructor.apply(this, arguments);
      if (atts) {
        this.load(atts);
      }
      this.cid = (atts != null ? atts.cid : void 0) || this.constructor.uid('c-');
    }

    Model.prototype.isNew = function() {
      return !this.exists();
    };

    Model.prototype.isValid = function() {
      return !this.validate();
    };

    Model.prototype.validate = function() {};

    Model.prototype.load = function(atts) {
      var key, value;
      if (atts.id) {
        this.id = atts.id;
      }
      for (key in atts) {
        value = atts[key];
        if (atts.hasOwnProperty(key) && typeof this[key] === 'function') {
          this[key](value);
        } else {
          this[key] = value;
        }
      }
      return this;
    };

    Model.prototype.get = function(attr) {
      return this[attr];
    };

    Model.prototype.set = function(attr, value) {
      return this[attr] = value;
    };

    Model.prototype.attributes = function() {
      var key, result, _i, _len, _ref;
      result = {};
      _ref = this.constructor.attributes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        if (key in this) {
          if (typeof this[key] === 'function') {
            result[key] = this[key]();
          } else {
            result[key] = this[key];
          }
        }
      }
      if (this.id) {
        result.id = this.id;
      }
      return result;
    };

    Model.prototype.eql = function(rec) {
      return !!(rec && rec.constructor === this.constructor && (rec.cid === this.cid) || (rec.id && rec.id === this.id));
    };

    Model.prototype.save = function(options) {
      var error, record;
      if (options == null) {
        options = {};
      }
      if (options.validate !== false) {
        error = this.validate();
        if (error) {
          this.trigger('error', error);
          return false;
        }
      }
      this.trigger('beforeSave', options);
      record = this.isNew() ? this.create(options) : this.update(options);
      this.stripCloneAttrs();
      this.trigger('save', options);
      return record;
    };

    Model.prototype.stripCloneAttrs = function() {
      var key, value;
      if (this.hasOwnProperty('cid')) {
        return;
      }
      for (key in this) {
        if (!__hasProp.call(this, key)) continue;
        value = this[key];
        if (this.constructor.attributes.indexOf(key) > -1) {
          delete this[key];
        }
      }
      return this;
    };

    Model.prototype.updateAttribute = function(name, value, options) {
      var atts;
      atts = {};
      atts[name] = value;
      return this.updateAttributes(atts, options);
    };

    Model.prototype.updateAttributes = function(atts, options) {
      this.load(atts);
      return this.save(options);
    };

    Model.prototype.changeID = function(id) {
      var records;
      if (id === this.id) {
        return;
      }
      records = this.constructor.irecords;
      records[id] = records[this.id];
      delete records[this.id];
      this.id = id;
      return this.save();
    };

    Model.prototype.remove = function() {
      var i, record, records, _i, _len;
      records = this.constructor.records.slice(0);
      for (i = _i = 0, _len = records.length; _i < _len; i = ++_i) {
        record = records[i];
        if (!(this.eql(record))) {
          continue;
        }
        records.splice(i, 1);
        break;
      }
      this.constructor.records = records;
      delete this.constructor.irecords[this.id];
      return delete this.constructor.irecords[this.cid];
    };

    Model.prototype.destroy = function(options) {
      if (options == null) {
        options = {};
      }
      this.trigger('beforeDestroy', options);
      this.remove();
      this.destroyed = true;
      this.trigger('destroy', options);
      this.trigger('change', 'destroy', options);
      if (this.listeningTo) {
        this.stopListening();
      }
      this.unbind();
      return this;
    };

    Model.prototype.dup = function(newRecord) {
      var atts;
      if (newRecord == null) {
        newRecord = true;
      }
      atts = this.attributes();
      if (newRecord) {
        delete atts.id;
      } else {
        atts.cid = this.cid;
      }
      return new this.constructor(atts);
    };

    Model.prototype.clone = function() {
      return createObject(this);
    };

    Model.prototype.reload = function() {
      var original;
      if (this.isNew()) {
        return this;
      }
      original = this.constructor.find(this.id);
      this.load(original.attributes());
      return original;
    };

    Model.prototype.refresh = function(data) {
      var root;
      root = this.constructor.irecords[this.id];
      root.load(data);
      this.trigger('refresh');
      return this;
    };

    Model.prototype.toJSON = function() {
      return this.attributes();
    };

    Model.prototype.toString = function() {
      return "<" + this.constructor.className + " (" + (JSON.stringify(this)) + ")>";
    };

    Model.prototype.fromForm = function(form) {
      var result;
      result = {};

      /*      
      for checkbox in $(form).find('[type=checkbox]:not([value])')
        result[checkbox.name] = $(checkbox).prop('checked')
      
      for checkbox in $(form).find('[type=checkbox][name$="[]"]')
        name = checkbox.name.replace(/\[\]$/, '')
        result[name] or= []
        result[name].push checkbox.value if $(checkbox).prop('checked')
      
      for key in $(form).serializeArray()
        result[key.name] or= key.value
       */
      return this.load(result);
    };

    Model.prototype.exists = function() {
      return this.constructor.exists(this.id);
    };

    Model.prototype.update = function(options) {
      var clone, records;
      this.trigger('beforeUpdate', options);
      records = this.constructor.irecords;
      records[this.id].load(this.attributes());
      this.constructor.sort();
      clone = records[this.id].clone();
      clone.trigger('update', options);
      clone.trigger('change', 'update', options);
      return clone;
    };

    Model.prototype.create = function(options) {
      var clone, record;
      this.trigger('beforeCreate', options);
      this.id || (this.id = this.cid);
      record = this.dup(false);
      this.constructor.addRecord(record);
      this.constructor.sort();
      clone = record.clone();
      clone.trigger('create', options);
      clone.trigger('change', 'create', options);
      return clone;
    };

    Model.prototype.bind = function(events, callback) {
      var binder, singleEvent, _fn, _i, _len, _ref;
      this.constructor.bind(events, binder = (function(_this) {
        return function(record) {
          if (record && _this.eql(record)) {
            return callback.apply(_this, arguments);
          }
        };
      })(this));
      _ref = events.split(' ');
      _fn = (function(_this) {
        return function(singleEvent) {
          var unbinder;
          return _this.constructor.bind("unbind", unbinder = function(record, event, cb) {
            if (record && _this.eql(record)) {
              if (event && event !== singleEvent) {
                return;
              }
              if (cb && cb !== callback) {
                return;
              }
              _this.constructor.unbind(singleEvent, binder);
              return _this.constructor.unbind("unbind", unbinder);
            }
          });
        };
      })(this);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        singleEvent = _ref[_i];
        _fn(singleEvent);
      }
      return this;
    };

    Model.prototype.one = function(events, callback) {
      var handler;
      return this.bind(events, handler = (function(_this) {
        return function() {
          _this.unbind(events, handler);
          return callback.apply(_this, arguments);
        };
      })(this));
    };

    Model.prototype.trigger = function() {
      var args, _ref;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      args.splice(1, 0, this);
      return (_ref = this.constructor).trigger.apply(_ref, args);
    };

    Model.prototype.listenTo = function() {
      return Events.listenTo.apply(this, arguments);
    };

    Model.prototype.listenToOnce = function() {
      return Events.listenToOnce.apply(this, arguments);
    };

    Model.prototype.stopListening = function() {
      return Events.stopListening.apply(this, arguments);
    };

    Model.prototype.unbind = function(events, callback) {
      var event, _i, _len, _ref, _results;
      if (arguments.length === 0) {
        return this.trigger('unbind');
      } else if (events) {
        _ref = events.split(' ');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          event = _ref[_i];
          _results.push(this.trigger('unbind', event, callback));
        }
        return _results;
      }
    };

    return Model;

  })(Module);

  Model.prototype.on = Model.prototype.bind;

  Model.prototype.off = Model.prototype.unbind;

  createObject = Object.create || function(o) {
    var Func;
    Func = function() {};
    Func.prototype = o;
    return new Func();
  };

  isArray = function(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  };

  isBlank = function(value) {
    var key;
    if (!value) {
      return true;
    }
    for (key in value) {
      return false;
    }
    return true;
  };

  makeArray = function(args) {
    return Array.prototype.slice.call(args, 0);
  };

  Model.isBlank = isBlank;

  Model.sub = function(instances, statics) {
    var Result;
    Result = (function(_super) {
      __extends(Result, _super);

      function Result() {
        return Result.__super__.constructor.apply(this, arguments);
      }

      return Result;

    })(this);
    if (instances) {
      Result.include(instances);
    }
    if (statics) {
      Result.extend(statics);
    }
    if (typeof Result.unbind === "function") {
      Result.unbind();
    }
    return Result;
  };

  Model.setup = function(name, attributes) {
    var Instance;
    if (attributes == null) {
      attributes = [];
    }
    Instance = (function(_super) {
      __extends(Instance, _super);

      function Instance() {
        return Instance.__super__.constructor.apply(this, arguments);
      }

      return Instance;

    })(this);
    Instance.configure.apply(Instance, [name].concat(__slice.call(attributes)));
    return Instance;
  };

  Model.host = "";

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Model;
  }

}).call(this);

},{"./events":17,"./module":19}],19:[function(require,module,exports){
(function() {
  var Module, moduleKeywords,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  moduleKeywords = ['included', 'extended'];

  Module = (function() {
    Module.include = function(obj) {
      var key, value, _ref;
      if (!obj) {
        throw new Error('include(obj) requires obj');
      }
      for (key in obj) {
        value = obj[key];
        if (__indexOf.call(moduleKeywords, key) < 0) {
          this.prototype[key] = value;
        }
      }
      if ((_ref = obj.included) != null) {
        _ref.apply(this);
      }
      return this;
    };

    Module.extend = function(obj) {
      var key, value, _ref;
      if (!obj) {
        throw new Error('extend(obj) requires obj');
      }
      for (key in obj) {
        value = obj[key];
        if (__indexOf.call(moduleKeywords, key) < 0) {
          this[key] = value;
        }
      }
      if ((_ref = obj.extended) != null) {
        _ref.apply(this);
      }
      return this;
    };

    Module.proxy = function(func) {
      return (function(_this) {
        return function() {
          return func.apply(_this, arguments);
        };
      })(this);
    };

    Module.prototype.proxy = function(func) {
      return (function(_this) {
        return function() {
          return func.apply(_this, arguments);
        };
      })(this);
    };

    function Module() {
      if (typeof this.init === "function") {
        this.init.apply(this, arguments);
      }
    }

    return Module;

  })();

  Module.create = Module.sub = function(instances, statics) {
    var Result;
    Result = (function(_super) {
      __extends(Result, _super);

      function Result() {
        return Result.__super__.constructor.apply(this, arguments);
      }

      return Result;

    })(this);
    if (instances) {
      Result.include(instances);
    }
    if (statics) {
      Result.extend(statics);
    }
    if (typeof Result.unbind === "function") {
      Result.unbind();
    }
    return Result;
  };

  module.exports = Module;

}).call(this);

},{}]},{},[12])