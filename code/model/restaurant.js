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