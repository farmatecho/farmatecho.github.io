var productsDiv = document.getElementById("products");
var searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keydown", function(e) {
	if(e.keyCode == 13) {
		search(searchBar.value);
	}
});
var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function(e) {
	search(searchBar.value);
});


var products = [
	new product({
		name: "Los Antibioticos",
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

var productsDisplayed = new Array(products.length);
for(var i = 0; i < productsDisplayed.length; i++) {
	productsDisplayed[i] = i;
}

function search(str) {
	var cleanStr = str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	
	productsDisplayed = [];
	for(var i = 0; i < products.length; i++) {
		if(products[i].cleanName.search(cleanStr) != -1) {
			productsDisplayed.push(i);
		}
	}
	
	productsDisplayed.sort((a, b) => {
		return (
			products[a].cleanName.search(cleanStr) -
			products[b].cleanName.search(cleanStr)
		);
	});
	
	updateProducts();
	
	var p = document.getElementById("search-error");
	if(productsDisplayed.length == 0) {
		p.innerHTML = "No hay resultados de búsqueda para \"" + str + "\"";
		p.style.display = "block";
	} else {
		p.style.display = "none";
	}
}

function product(options) {
	this.name = options.name ?? "Product name";
	this.imgSrc = options.imgSrc ?? "temp.png";
	this.price = options.price ?? 1;
	this.cleanName = this.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

updateProducts();
function updateProducts() {
	while(productsDiv.lastChild) {
		productsDiv.removeChild(productsDiv.lastChild);
	}
	
	for(var i = 0; i < productsDisplayed.length; i++) {
		var product = products[productsDisplayed[i]];

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
}