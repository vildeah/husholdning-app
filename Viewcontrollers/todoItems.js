ViewControllers.TodoItems = (function() {
    return {
        renderCards: function() {          
            let todoItems = ModelControllers.TodoItems.getAll();
            let accordion = document.getElementById('accordion');
            while (accordion.firstChild) {
                accordion.removeChild(accordion.firstChild);
            }
            for (let i = 0; i < todoItems.length; i++) {
                let cardDiv = document.createElement('div');

                cardDiv.classList.add('card', 'coorgi-card-'+ todoItems[i].difficulty.get(), 'text-white');
                
                let cardHeader = document.createElement('div');
                cardHeader.classList.add('card-header');
                cardHeader.setAttribute('id', 'heading' + i);

                let h5 = document.createElement('h5');
                h5.classList.add('mb-0');

                let collapseBtn = document.createElement('button');
                collapseBtn.classList.add('btn', 'btn-link', 'collapse-header');
                collapseBtn.setAttribute('data-toggle', 'collapse');
                collapseBtn.setAttribute('data-target', '#collapse' + i);
                collapseBtn.setAttribute('aria-expanded', false);
                collapseBtn.setAttribute('aria-controls', 'collapse'+ i);
                collapseBtn.innerHTML = todoItems[i].name.get();
           /*     let pointSpan = document.createElement('span');
                pointSpan.innerHTML = todoItems[i].points.get().toString();
                pointSpan.classList.add('float-right');*/

               // collapseBtn.appendChild(pointSpan);
                h5.appendChild(collapseBtn);
                cardHeader.appendChild(h5);

                let collapseDiv = document.createElement('div');
                collapseDiv.classList.add('collapse');
                collapseDiv.setAttribute('id', 'collapse' + i);
                collapseDiv.setAttribute('aria-labelledby', 'heading' + i);
                collapseDiv.setAttribute('data-parent', '#accordion');

                let cardBody = document.createElement('div');
                cardBody.classList.add('card-body');
                cardBody.innerHTML = todoItems[i].description.get();

                collapseDiv.appendChild(cardBody);
                cardDiv.appendChild(cardHeader);
                cardDiv.appendChild(collapseDiv);
                accordion.appendChild(cardDiv);
            }
        },

        renderAddTodoItemModal: function () {
            let modal = document.getElementById('addTodoItemModal');
            $(modal).modal('show');
            let forms = modal.getElementsByClassName('form-control');
            for (let i = 0; i < forms.length; i++) {
                forms[i].value = '';
                forms[i].classList.remove('is-invalid');
            }

            for (let i = 1; i < 6; i++) {
                modal.querySelector('#addTodoItem__modal--difficultyBtn-' + i).classList.remove('active');
            }

            modal.querySelector('#addTodoItem__modal--difficultyBtn-1').classList.add('active');

            let saveButton = modal.querySelector('#addTodoItem__modal--saveBtn');
            saveButton.onclick = function () {
                ViewControllers.TodoItems.saveAddTodoItem(modal);
            }

        },

        shiftActiveDifficultyButton: function (buttonNumber) {
           for (let i = 1; i < 6; i++) {
               document.getElementById('addTodoItem__modal--difficultyBtn-' + i).classList.remove('active');
           }
           document.getElementById('addTodoItem__modal--difficultyBtn-' + buttonNumber).classList.add('active');
        },

        saveAddTodoItem: function (modal) {
            let validated = true;
            let name = modal.querySelector('#addTodoItem__modal--name').value;
            if (name.length < 1) {
                validated = false;
                modal.querySelector('#addTodoItem__modal--name').classList.add('is-invalid');
            }
            let description = modal.querySelector('#addTodoItem__modal--description').value;
            let selectedDifficultyBtn;
            for (let i = 1; i < 6; i++) {
                let difficultyBtn = modal.querySelector('#addTodoItem__modal--difficultyBtn-' + i);
                if (difficultyBtn.classList.contains('active')) {
                    selectedDifficultyBtn = difficultyBtn;
                }
            }
            let difficulty = parseInt(selectedDifficultyBtn.innerText) - 1;
            if (validated) {
                let newItem = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: name, description: description, difficulty: difficulty});
                ViewControllers.TodoItems.renderCards();
                $(modal).modal('hide');  
            }
        },


    }
    
})();