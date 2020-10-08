const posts = document.querySelectorAll('#card-trigger li a');
posts.forEach(post => {
	post.addEventListener('click',(e) => {
		// console.log(post.dataset.sku);
		var dataSku = post.dataset.sku;

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


            var cardPresente = false;

            const cards = document.querySelectorAll('#cards-holder div');
            cards.forEach(card => {
            	var cardData = card.dataset.sku;
                if (cardData == dataSku) {
                    cardPresente = true;
                }
            })

            if (!cardPresente) {

                var divCard = document.createElement("div");
                divCard.setAttribute('data-sku', dataSku);
                divCard.setAttribute('class', 'card');

                var cardButton = document.createElement("button");
                cardButton.setAttribute('class', 'remove');
                var cardBtnText = document.createTextNode('X');
                cardButton.appendChild(cardBtnText);
                divCard.appendChild(cardButton);

                var cardH2 = document.createElement("h2");
                var cardTitle = document.createTextNode(post.title);
                cardH2.appendChild(cardTitle);
                divCard.appendChild(cardH2);

                var cardP = document.createElement("p");
                var cardBody = document.createTextNode(post.body);
                cardP.appendChild(cardBody);
                divCard.appendChild(cardP);

                var cardHolder = document.getElementById("cards-holder");
                cardHolder.appendChild(divCard);
            }

            const removeCards = document.querySelectorAll('.card');
            removeCards.forEach(removeCard => {
            	removeCard.addEventListener('click',(e) => {
                    removeCard.remove();
            	})
            })
        }
    };
}


function removeAllCards() {
    document.getElementById("cards-holder").innerHTML = "";
}
