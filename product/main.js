var products = [
	new product({
		name: "Ungüento antibiótico triple",
		imgSrc: "images/0.png",
		price: 7,
		description:
`El ungüento antibiótico triple es extremadamente efectivos y opera en solo 2 días.`
	}),
	new product({
		name: "Antibioticos muy buen",
		price: 420
	}),
	new product({
		name: "Antibioticos de barato",
		price: 69
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
		name: "Nada mas",
		price: 0
	}),
	new product({
		name: "Nada mas"
	}),
	new product({
		name: "Nada mas"
	}),
	new product({
		name: "Nada mas"
	}),
	new product({
		name: "Nada mas"
	}),
	new product({
		name: "Nada mas"
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