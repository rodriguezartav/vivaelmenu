var _3Model = require("3vot-model/lib/ajaxless")


var fields = ["name", "photo", "description", "zona", "precio","direccion"]; 

Restaurant = _3Model.Model.setup("Restaurant", fields);

Restaurant.create( { direccion: "Escazu 100 Este", name: "La Fabbrica" , precio: "Hasta $12", zona: "San Jose", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/fabbrica-thumb.jpg"  } )
Restaurant.create( { name: "Le Monastère" , precio: "Hasta $12", zona: "Escazu", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/monastere-thumb.jpg"  } )
Restaurant.create( { name: "Pizza Hut" , precio: "Hasta $12", zona: "Alajuela", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/pizzahut-thumb.jpg"  } )
Restaurant.create( { name: "Carl's Jr, Plaza Real Cariari" , precio: "Hasta $12", zona: "Heredia", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/carlsjr-thumb.jpg"  } )
Restaurant.create( { name: "Château 1525" , precio: "Hasta $12", zona: "San Pedro", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/chateau-thumb.jpg"  } )
Restaurant.create( { name: "Tin Jo" , precio: "Hasta $12", zona: "San Pedro", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/tinjo-thumb.jpg"  } )
Restaurant.create( { name: "Neo Gastrobar, San Pedro" , precio: "$12 a $20", zona: "Escazu", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/neogastro-thumb.jpg"  } )
Restaurant.create( { name: "Café Kracovia" , precio: "$12 a $20", zona: "San Pedro", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/kracovia-thumb.jpg"  } )


Restaurant.selected;

module.exports = Restaurant;