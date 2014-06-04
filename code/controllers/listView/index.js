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