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
		name: "Mascarillas",
		imgSrc: "images/4.jpg",
		price: 4
	}),
	new product({
		name: "Ungüento antibiótico",
		imgSrc: "images/0.jpg",
		price: 7
	}),
	new product({
		name: "Spray nasal",
		imgSrc: "images/1.jpg",
		price: 5
	}),
	new product({
		name: "Mascarilla facial",
		imgSrc: "images/2.jpg",
		price: 8
	}),
	new product({
		name: "Apósitos adhesivos",
		imgSrc: "images/3.jpg",
		price: 4
	}),
	new product({
		name: "Pasta dental",
		imgSrc: "images/5.jpg",
		price: 2.5
	}),
	new product({
		name: "Protector solar",
		imgSrc: "images/6.jpg",
		price: 4
	}),
	new product({
		name: "Alcohol de mano",
		imgSrc: "images/7.jpg",
		price: 6
	}),
	new product({
		name: "Marrón sin sol",
		imgSrc: "images/8.jpg",
		price: 6
	}),
	new product({
		name: "Cepillo de dientes",
		imgSrc: "images/9.jpg",
		price: 2
	}),
	new product({
		name: "Crema para el acné",
		imgSrc: "images/10.jpg",
		price: 4
	}),
	new product({
		name: "Gotas para los ojos",
		imgSrc: "images/11.jpg",
		price: 5
	}),
	new product({
		name: "Lentes",
		imgSrc: "images/12.jpg",
		price: 10
	}),
	new product({
		name: "Yeso",
		imgSrc: "images/13.jpg",
		price: 1.5
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
		(function() {
			var productId = productsDisplayed[i];
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
		image.src = product.imgSrc;
		productDiv.appendChild(image);
	}
}