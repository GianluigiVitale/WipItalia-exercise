const posts = document.querySelectorAll('#card-trigger li a');
posts.forEach(post => {
	post.addEventListener('click',(e) => {
		// console.log(post.dataset.sku);
		var dataSku = post.dataset.sku;

        ajaxCall(dataSku);
	})
})

// per rimuovere tutte le cards
var cardsRemoverBtn = document.getElementById("remover");
cardsRemoverBtn.addEventListener("click", removeAllCards);



// funzioni



function ajaxCall(dataSku) {		// ajax che recupera le info della card, se non e' gia presente la inserisce
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", `https://jsonplaceholder.typicode.com/posts/${dataSku}`, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var post = JSON.parse(xhttp.responseText);


			// prima di inserire la card controllo che non sia gia' presente
            var cardPresente = false;

            const cards = document.querySelectorAll('#cards-holder div');
            cards.forEach(card => {
            	var cardData = card.dataset.sku;
                if (cardData == dataSku) {
                    cardPresente = true;
                }
            })

			// inserisco la card
            if (!cardPresente) {

                var divCard = document.createElement("div");
                divCard.setAttribute('data-sku', dataSku);
				bgAssign(divCard, dataSku);

                var cardButton = document.createElement("i");
                cardButton.setAttribute('class', 'fas fa-times delete-button');
                divCard.appendChild(cardButton);

				cardElement(divCard, "h2", post.title);
				cardElement(divCard, "p", post.body);

                var cardHolder = document.getElementById("cards-holder");
                cardHolder.appendChild(divCard);
            }

			// per la singola card
			const removeCards = document.querySelectorAll('.delete-button');
			removeCards.forEach(removeCard => {
				removeCard.addEventListener('click',(e) => {
					removeCard.parentElement.remove();
				})
			})
        }
    };
}


function cardElement(divCard, tag, titleBody) {		// crea un tag con all'interno il testo e lo appende al div
	var cardTag = document.createElement(tag);
	var cardContent = document.createTextNode(titleBody);
	cardTag.appendChild(cardContent);
	divCard.appendChild(cardTag);
}


function removeAllCards() {		// rimuove tutte le cards
    document.getElementById("cards-holder").innerHTML = "";
}

function bgAssign(divCard, dataSku) {		// assegna la classe card e il colore di sfondo in base al numero
	switch (dataSku) {
		case '7':
		divCard.setAttribute('class', 'card red');
			break;
		case '3':
		divCard.setAttribute('class', 'card yellow');
			break;
		case '2':
		divCard.setAttribute('class', 'card green');
			break;
	}
}
