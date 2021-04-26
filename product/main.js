var products = [
	new product({
		name: "Mascarillas",
		imgSrc: "images/4.jpg",
		price: 4,
		description:
`Un paquete de 15 mascarillas.

Proporciona una protección perfecta contra bacterias y virus.
Muy bueno para prevenir el coronavirus y otras enfermedades.

¡Si compras unas mascarillas junto con alcohol de mano, obtienes un 50% de descuento en ambos productos!`
	}),
	new product({
		name: "Ungüento antibiótico",
		imgSrc: "images/0.jpg",
		price: 7,
		description:
`El ungüento antibiótico es extremadamente efectivos y opera en solo 2 días.
Puede tratar todas las infecciones completamente sin efectos secundarios.`
	}),
	new product({
		name: "Spray nasal",
		imgSrc: "images/1.jpg",
		description:
`Este spray nasal es a partir de los 3 años.

Es muy fuerte, funciona en 5 minutos y no es adictivo.
Contiene 20 ml y es suficiente para 40 usos.`,
		price: 5
	}),
	new product({
		name: "Mascarilla facial",
		imgSrc: "images/2.jpg",
		price: 8,
		description:
`Una mascarilla facial con olor a pepino.
Te da una piel muy suave y hermosa.

Tiene muy alta calidad a bajo precio.

Úselo diariamente por hasta 2 semanas.`
	}),
	new product({
		name: "Apósitos adhesivos",
		price: 4,
		imgSrc: "images/3.jpg",
		description: 
`Contiene 20 piezas.

Solo cuesta 20 centavos por apósito adhesivo. ¡Son los más baratos apósitos adhesivos en España!

¡Ahora con súper fuerte adhesivo que dure todo el dia!

¡Compra ahora!`
	}),
	new product({
		name: "Pasta dental",
		imgSrc: "images/5.jpg",
		price: 2.5,
		description:
`Un tubo grande de pasta dental.

¡Dientes más blancos después de solo una semana!`
	}),
	new product({
		name: "Protector solar",
		imgSrc: "images/6.jpg",
		price: 4,
		description:
`Proporciona una protección eficaz contra la radiación UV. Es muy suave con la piel comparado con otras marcas.`
	}),
	new product({
		name: "Alcohol de mano",
		imgSrc: "images/7.jpg",
		price: 6,
		description:
`Esto alcohol de mano mata el 100% de las bacterias.

Es perfecto durante la pandemia de corona.`
	}),
	new product({
		name: "Marrón sin sol",
		imgSrc: "images/8.jpg",
		price: 6,
		description:
`Te da una piel más oscura en solo 2 minutos.`
	}),
	new product({
		name: "Cepillo de dientes",
		imgSrc: "images/9.jpg",
		price: 2,
		description:
`Si compras un cepillo de dientes junto con pasta dental, obtienes un 20% de descuento.`
	}),
	new product({
		name: "Crema para el acné",
		imgSrc: "images/10.jpg",
		price: 4,
		description: 
`Proporciona un tratamiento eficaz y de acción muy rápida del acné.`
	}),
	new product({
		name: "Gotas para los ojos",
		imgSrc: "images/11.jpg",
		price: 5,
		description: 
`Si siente cansancio en los ojos y le pica, puede ser porque están secos. 

Tenemos gotas para los ojos que pueden aliviar las molestias.`
	}),
	new product({
		name: "Lentes",
		imgSrc: "images/12.jpg",
		price: 10,
		description: 
`Estos lentes estan muy facil de usar y estan muy cómodo.

Ayudan con la miopía y con la hipermetropía.`
	}),
	new product({
		name: "Yeso",
		imgSrc: "images/13.jpg",
		price: 1.5,
		description: 
`Se solidifica muy rápidamente, solo en 5 minutos.

Es muy duradero y nunca se agrieta`
	}),
	new product({
		name: "Fortnite",
		imgSrc: "images/fortnite.jpg",
		description: 
`Fortnite pasa de batalla.`,
		price: "950 V-"
	})
];

function product(options) {
	this.name = options.name ?? "Product name";
	this.imgSrc = options.imgSrc ?? "temp.png";
	this.description = options.description ?? "El producto carece de descripción";
	this.price = options.price ?? 1;
	this.cleanName = this.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const queryStart = (window.location.origin + "/product/index.html?").length;
const query = window.location.href.substr(queryStart);
function getQuery(str) {
	return query.match(new RegExp(`${str}\=(.*?)(&|$)`))[1];
}

var prevButton = document.getElementById("prev-button");
prevButton.addEventListener("click", function() {
	window.location.href = window.location.origin;
});

{
	var productInfo = document.getElementById("product-info");

	var product = products[parseInt(getQuery("id"))];

	var productName = document.createElement("p");
	productName.innerHTML = product.name;
	productName.className = "name";
	productInfo.appendChild(productName);
	
	var div = document.createElement("div");
	
	var price = document.createElement("p");
	price.className = "price";
	price.innerHTML = product.price + "€";
	div.appendChild(price);
	
	var loop = null;
	var buyButton = document.createElement("button");
	buyButton.innerHTML = "Compra";
	buyButton.addEventListener("click", function() {
		var loading = document.getElementById("loading-bar");
		if(loading == undefined) {
			var loading = document.getElementById("loaded");
			if(loading == undefined) {
				loading = document.createElement("div");
				loading.id = "loading-bar";
				div.appendChild(loading);
			}
		}
		if(loop != null) {
			clearInterval(loop);
			loop = null;
		}
		var a = 0;
		var s = 0;
		var counter = 0;
		loop = setInterval(function() {
			if(counter % 10 == 0) {
				a = (Math.random() - 0.5) * 0.2 + counter / 60 + 0.2;
			}
			s = (s / 10 * 9) + a / 10;
			loading.style.setProperty("--percentage", Math.max(0, Math.min(1, s)));
			counter++;
			if(counter >= 75) {
				loading.style.setProperty("--percentage", 1);
				loading.id = "loaded";
				loading.innerHTML = "<p>¡Gracias por comprar!</p>";
				loading.
				clearInterval(loop);
				loop = null;
			}
		}, 30);
	});
	div.appendChild(buyButton);
	
	productInfo.appendChild(div);
	
	var br = document.createElement("br");
	productInfo.appendChild(br);
	
	var image = document.createElement("img");
	image.src = "/" + product.imgSrc;
	productInfo.appendChild(image);

	var p = document.createElement("p");
	productInfo.appendChild(p);
	p.innerHTML = product.description;
}

{
	var productsDiv = document.getElementById("products");
	for(var i = 0; i < products.length; i++) {
		if(i == parseInt(getQuery("id"))) continue;
		
		var product = products[i];

		var productDiv = document.createElement("div");
		productDiv.className = "product";
		(function() {
			var productId = i;
			productDiv.addEventListener("click", function() {
				window.location.href = window.location.origin + "/product/index.html?id=" + productId;
			});
		}())
		productsDiv.appendChild(productDiv);

		var productName = document.createElement("p");
		productName.innerHTML = product.name;
		productName.className = "name";
		productDiv.appendChild(productName);

		var price = document.createElement("p");
		price.className = "price";
		price.innerHTML = product.price + "€";
		productDiv.appendChild(price);

		var image = document.createElement("img");
		image.src = "/" + product.imgSrc;
		productDiv.appendChild(image);
	}
}