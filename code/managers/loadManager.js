
Category = require("../model/category")

function init(){
	
	var allCategories = Category.findAllByAttribute("type","zona")
	var firstCategory = allCategories[allCategories.length - 1]


	Category.trigger("SELECTED_TYPE_CHANGED", firstCategory.type)


	//IF IN URL THERE IS NO #/restaurant/ID
	Category.trigger("SELECTED", firstCategory )	

}

module.exports = init();