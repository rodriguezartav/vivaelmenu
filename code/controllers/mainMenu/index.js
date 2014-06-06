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