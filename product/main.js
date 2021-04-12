var products = [
	new product({
		name: "Los antibioticos de amarillo",
		imgSrc: "logo.png",
		price: 50
	}),
	new product({
		name: "Antibioticos muy buen",
		price: 40
	}),
	new product({
		name: "Antibioticos de barato",
		price: 16
	}),
	new product({
		name: "Paquete de 20 con apósito adhesivo",
		price: 4,
		description: `Solo cuesta 20 centavos por apósito adhesivo. ¡Son los más baratos apósitos adhesivos en España!`
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
	this.description = options.description ?? "El producto carece de descripción";
	this.price = options.price ?? 1;
	this.cleanName = this.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const queryStart = (window.location.origin + "/product/index.html?").length;
const query = window.location.href.substr(queryStart);
function getQuery(str) {
	return query.match(new RegExp(`${str}\=(.*?)(&|$)`))[1];
}

var p = document.createElement("p");
document.body.appendChild(p);

var product = products[parseInt(getQuery("id"))];
p.innerHTML = product.description;