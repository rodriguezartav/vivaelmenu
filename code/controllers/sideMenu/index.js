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