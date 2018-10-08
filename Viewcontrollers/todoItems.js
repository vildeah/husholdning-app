ViewControllers.TodoItems = (function() {
    return {
        renderCards: function() {
            let todoItems = ModelControllers.TodoItems.getAll();
            let cardsArea = document.getElementById('to-do__cards');
            while (cardsArea.firstChild) {
                cardsArea.removeChild(cardsArea.firstChild);
            }
           // console.log(cardsArea);
            for (let i = 0; i < todoItems.length; i++) {
                let cardDiv = document.createElement('div');
                cardDiv.classList.add('card', 'coorgi-bg-orange', 'text-white');
                
                let cardHeader = document.createElement('div');
                cardHeader.classList.add('card-header');
                cardHeader.innerHTML = todoItems[i].points.get().toString() + ' poeng';
                
                let cardBody = document.createElement('div');
                cardBody.classList.add('card-body');
        
                let cardTitle = document.createElement('h5');
                cardTitle.classList.add('card-title');
                cardTitle.innerHTML = todoItems[i].name.get();
        
                let cardSubtitle = document.createElement('h6');
                cardSubtitle.classList.add('card-subtitle', 'mb-1', 'text-muted');
                let subtitleText = '';
                switch (todoItems[i].importance.get()) {
                    case 0:
                        subtitleText = 'Veldig lav prioritet';
                        break;
                    case 1:
                        subtitleText = 'Lav prioritet';
                        break;
                    case 2:
                        subtitleText = 'Middels prioritet';
                        break;
                    case 3:
                        subtitleText = 'Høy prioritet';
                        break;
                    case 4:
                        subtitleText = 'Veldig høy prioritet';
                        break;
                    default:
                        subtitleText= 'Udefinert prioritet';
                }
                cardSubtitle.innerHTML = subtitleText;
        
                let cardText = document.createElement('p');
                cardText.classList.add('card-text');
                cardText.innerHTML = todoItems[i].description.get();
        
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardSubtitle);
                cardBody.appendChild(cardText);
                cardDiv.appendChild(cardHeader);
                cardDiv.appendChild(cardBody);
                cardsArea.appendChild(cardDiv);
            }
        }
    }
    
})();