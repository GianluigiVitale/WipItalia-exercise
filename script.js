const items = document.querySelectorAll('a');
items.forEach(item => {
	item.addEventListener('click',(e) => {
		// console.log(item.dataset.sku);
		var dataSku = item.dataset.sku;

        ajaxCall(dataSku);

	})
})





function ajaxCall(dataSku) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", `https://jsonplaceholder.typicode.com/posts/${dataSku}`, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var post = JSON.parse(xhttp.responseText);

            var tag = document.createElement("p");
            tag.setAttribute('data-sku', dataSku);
            var text = document.createTextNode(`${post.title} ${post.body}`);
            tag.appendChild(text);
            var element = document.getElementById("cards-holder");
            element.appendChild(tag);
        }
    };
}
