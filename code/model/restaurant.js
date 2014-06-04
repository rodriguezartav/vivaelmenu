var _3Model = require("3vot-model/lib/ajaxless")


var fields = ["name", "photo", "description", "zona", "precio","direccion"]; 

Restaurant = _3Model.Model.setup("Restaurant", fields);

Restaurant.create( { direccion: "Escazu 100 Este", name: "Rest1" , precio: "Hasta $12", zona: "San Jose", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/fabbrica-thumb.jpg"  } )
Restaurant.create( { name: "Rest2" , precio: "Hasta $12", zona: "Heredia", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/fabbrica-thumb.jpg"  } )
Restaurant.create( { name: "San2" , precio: "Hasta $12", zona: "Alajuela", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/fabbrica-thumb.jpg"  } )
Restaurant.create( { name: "Pedro5" , precio: "Hasta $12", zona: "Escazu", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/fabbrica-thumb.jpg"  } )
Restaurant.create( { name: "Pedro6" , precio: "Hasta $12", zona: "San Pedro", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/fabbrica-thumb.jpg"  } )
Restaurant.create( { name: "Pedro7" , precio: "Hasta $12", zona: "San Pedro", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/fabbrica-thumb.jpg"  } )
Restaurant.create( { name: "Pedro8" , precio: "$12 a $20", zona: "Escazu", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/fabbrica-thumb.jpg"  } )
Restaurant.create( { name: "Pedro9" , precio: "$12 a $20", zona: "Escazu", photo: "//daulau2emlz5i.cloudfront.net/3vot/vivaelmenu_5/assets/fabbrica-thumb.jpg"  } )


Restaurant.selected;

module.exports = Restaurant;