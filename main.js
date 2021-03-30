var productsDiv = document.getElementById("products");
var searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keydown", function(e) {
	if(e.keyCode == 13) {
		search(searchBar.value);
	}
});

var products = [
	new product({
		name: "Antibioticos",
		imgSrc: "logo.png",
		price: 50
	}),
	new product({
		name: "Antibioticos",
		price: 40
	}),
	new product({
		name: "Antibioticos",
		price: 16
	}),
	new product({
		name: "Apósito adhesivo",
		price: 4
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

function search(str) {

var p = document.createElement("p");
	p.innerHTML = "No hay resultados de búsqueda para \"" + str + "\"";
	document.body.appendChild(p);
}

function product(options) {
	this.name = options.name ?? "Product name";
	this.imgSrc = options.imgSrc ?? "temp.png";
	this.price = options.price ?? 1;
}

for(var i = 0; i < products.length; i++) {
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
	buyButton.addEventListener("click", function() {
		productsDiv.style.display = "none";
	});
	productDiv.appendChild(buyButton);
	
	var price = document.createElement("p");
	price.className = "price";
	price.innerHTML = product.price + "€";
	productDiv.appendChild(price);
	
	var image = document.createElement("img");
	image.src = product.imgSrc;
	productDiv.appendChild(image);
}