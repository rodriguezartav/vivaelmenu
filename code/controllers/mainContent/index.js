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