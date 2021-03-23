var searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keydown", function(e) {
	if(e.keyCode == 13) {
		search(searchBar.value);
	}
});

function search(str) {
	var p = document.createElement("p");
	p.innerHTML = "No hay resultados de búsqueda para \"" + str + "\"";
	document.body.appendChild(p);
}