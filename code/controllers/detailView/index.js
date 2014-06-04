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