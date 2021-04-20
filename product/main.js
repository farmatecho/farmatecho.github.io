var products = [
	new product({
		name: "Ungüento antibiótico",
		imgSrc: "images/0.png",
		price: 7,
		description:
`El ungüento antibiótico es extremadamente efectivos y opera en solo 2 días.
Puede tratar todas las infecciones completamente sin efectos secundarios.`
	}),
	new product({
		name: "Spray nasal",
		imgSrc: "images/1.png",
		description:
`Este spray nasal es a partir de los 3 años.

Es muy fuerte, funciona en 5 minutos y no es adictivo.
Contiene 20 ml y es suficiente para 40 usos.`,
		price: 5
	}),
	new product({
		name: "Mascarilla facial",
		imgSrc: "images/2.png",
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
		imgSrc: "images/3.png",
		description: 
`Contiene 20 piezas.

Solo cuesta 20 centavos por apósito adhesivo. ¡Son los más baratos apósitos adhesivos en España!

¡Ahora con súper fuerte adhesivo que dure todo el dia!

¡Compra ahora!`
	}),
	new product({
		name: "Mascarillas",
		imgSrc: "images/4.png",
		price: 4,
		description:
`Un paquete de 15 mascarillas.

Proporciona una protección perfecta contra bacterias y virus.
Muy bueno para prevenir el coronavirus y otras enfermedades.`
	}),
	new product({
		name: "Fortnite",
		imgSrc: "images/fortnite.png",
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

	var price = document.createElement("p");
	price.className = "price";
	price.innerHTML = product.price + "€";
	productInfo.appendChild(price);

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
		productsDiv.appendChild(productDiv);

		var productName = document.createElement("p");
		productName.innerHTML = product.name;
		productName.className = "name";
		productDiv.appendChild(productName);

		var buyButton = document.createElement("button");
		buyButton.innerHTML = "Compra";
		(function() {
			var productId = i;
			buyButton.addEventListener("click", function() {
				window.location.href = window.location.origin + "/product/index.html?id=" + productId;
			});
		}())
		productDiv.appendChild(buyButton);

		var price = document.createElement("p");
		price.className = "price";
		price.innerHTML = product.price + "€";
		productDiv.appendChild(price);

		var image = document.createElement("img");
		image.src = "/" + product.imgSrc;
		productDiv.appendChild(image);
	}
}