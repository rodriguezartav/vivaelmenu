var _3Model = require("3vot-model/lib/ajaxless")


var fields = ["name", "flag", "type"]; 

Category = _3Model.Model.setup("Category", fields);


Category.create( { name: "Escazu" , type: "zona", flag: false  } )
Category.create( { name: "Heredia" , type: "zona", flag: false  } )
Category.create( { name: "San Jose" , type: "zona", flag: false  } )
Category.create( { name: "San Pedro" , type: "zona", flag: false  } )




Category.create( { name: "Más de $30" , type: "precio", flag: true  } )
Category.create( { name: "De $20 a $30" , type: "precio", flag: false  } )
Category.create( { name: "De $12 a $20" , type: "precio", flag: false  } )
Category.create( { name: "Hasta $12" , type: "precio", flag: false  } )



Category.selectedType;

module.exports = Category;