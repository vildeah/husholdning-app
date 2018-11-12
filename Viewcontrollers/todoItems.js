ViewControllers.TodoItems = (function() {

    function _fillAccordion (todoItems, accordion, includeButtons) {
        while (accordion.firstChild) {
            accordion.removeChild(accordion.firstChild);
        }

        for (let i = 0; i < todoItems.length; i++) {
            let id = Core.generateAutoNumber();
            let cardDiv = document.createElement('div');

            cardDiv.classList.add('card', 'coorgi-card-'+ todoItems[i].difficulty.get(), 'text-white');
            
            let cardHeader = document.createElement('div');
            cardHeader.classList.add('card-header');
            cardHeader.setAttribute('id', 'heading' + id);

            let h5 = document.createElement('h5');
            h5.classList.add('mb-0');

            let collapseBtn = document.createElement('button');
            collapseBtn.classList.add('btn', 'btn-link', 'collapse-header', 'todoItem-header');
            collapseBtn.setAttribute('data-toggle', 'collapse');
            collapseBtn.setAttribute('data-target', '#collapse' + id);
            collapseBtn.setAttribute('aria-expanded', false);
            collapseBtn.setAttribute('aria-controls', 'collapse'+ id);
            collapseBtn.innerHTML = todoItems[i].name.get();

            if (includeButtons) {
                let editBtn = document.createElement('i');
                editBtn.classList.add('fas', 'fa-pen', 'float-right', 'todoItem-editBtn');
                editBtn.setAttribute('value', todoItems[i].id.get());
    
                let deleteBtn = document.createElement('i');
                deleteBtn.classList.add('fas', 'fa-trash-alt', 'float-right', 'todoItem-deleteBtn');
                deleteBtn.setAttribute('value', todoItems[i].id.get());
    
                let checkBtn = document.createElement('i');
                checkBtn.classList.add('fas', 'fa-check', 'float-right', 'todoItem-checkBtn');
                checkBtn.setAttribute('value', todoItems[i].id.get());
    
                h5.appendChild(editBtn);
                h5.appendChild(deleteBtn);
                h5.appendChild(checkBtn);
            }

            h5.appendChild(collapseBtn);
            cardHeader.appendChild(h5);

            let collapseDiv = document.createElement('div');
            collapseDiv.classList.add('collapse');
            collapseDiv.setAttribute('id', 'collapse' + id);
            collapseDiv.setAttribute('aria-labelledby', 'heading' + id);

            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            cardBody.innerHTML = todoItems[i].description.get();

            collapseDiv.appendChild(cardBody);
            cardDiv.appendChild(cardHeader);
            cardDiv.appendChild(collapseDiv);
            accordion.appendChild(cardDiv);
        }

        let editBtns = document.getElementsByClassName('todoItem-editBtn');
        for (let i = 0; i < editBtns.length; i++) {
            editBtns[i].onclick = function () {
                let todoItemId = parseInt(editBtns[i].getAttribute('value'));
                ViewControllers.TodoItems.renderEditTodoItemModal(ModelControllers.TodoItems.getById(todoItemId));
            }
        }

        let deleteBtns = document.getElementsByClassName('todoItem-deleteBtn');
        for (let i = 0; i < deleteBtns.length; i++) {
            deleteBtns[i].onclick = function () {
                let modal = document.getElementById('deleteItem__modal');
                $(modal).modal('show');
                
                document.getElementById('confirm__deletion__button').onclick = function() {
                    ViewControllers.TodoItems.deleteTodoItem(parseInt(deleteBtns[i].getAttribute('value')));
                    $(modal).modal('hide');
                }
            }
        }

        let checkBtns = document.getElementsByClassName('todoItem-checkBtn');
        for (let i = 0; i < checkBtns.length; i++) {
            checkBtns[i].onclick = function () {
                let todoItemId = parseInt(checkBtns[i].getAttribute('value'));
                ViewControllers.TodoItems.completeTodoItem(todoItemId);
            }
        }
    }

    return {
        renderCards: function() {
            let todoItems = ModelControllers.TodoItems.getNotDoneItems();
            let accordion = document.getElementById('accordion');
            _fillAccordion(todoItems, accordion, true);

            let signedInMember = ModelControllers.Members.getSignedInMember();
            let doneTodoItems = signedInMember.doneTodoItems.get();
            let doneAccordion = document.getElementById('doneTodoItems--accordion');
            _fillAccordion(doneTodoItems, doneAccordion, false);

        },

        completeTodoItem: function (todoItemId) {
            let signedInMember = ModelControllers.Members.getSignedInMember();
            let todoItem = ModelControllers.TodoItems.getById(todoItemId);
            let todoItempoints = todoItem.points.get();
            let memberPoints = signedInMember.points.get();
            signedInMember.points.set(memberPoints + todoItempoints);
            ModelControllers.Members.todoItemRemoved(todoItemId);
            signedInMember.doneTodoItems.set(signedInMember.doneTodoItems.get().concat([todoItem]));
            todoItem.status.set(1);
            ViewControllers.TodoItems.renderCards();
        },

        deleteTodoItem: function (todoItemId) {
            ModelControllers.TodoItems.remove(todoItemId);
            ViewControllers.TodoItems.renderCards();
        },

        renderEditTodoItemModal: function (todoItem) {
            let modal = document.getElementById('todoItem__modal');
            modal.querySelector('#todoItem__modal--title').innerText = 'Redigér gjøremål';
            modal.querySelector('#todoItem__modal--name').value = todoItem.name.get();
            modal.querySelector('#todoItem__modal--description').value = todoItem.description.get();

            for (let i = 1; i < 6; i++) {
                modal.querySelector('#todoItem__modal--difficultyBtn-' + i).classList.remove('active');
            }
            modal.querySelector('#todoItem__modal--difficultyBtn-' + (todoItem.difficulty.get() + 1)).classList.add('active');

            let selectElement = modal.querySelector('#todoItem__modal--selectAssigned');
            while(selectElement.firstChild) {
                selectElement.removeChild(selectElement.firstChild);
            }
            let blankOption = document.createElement('option');
            blankOption.innerText = '(ingen)';
            blankOption.value = 'noMember';
            selectElement.appendChild(blankOption);
            let members = ModelControllers.Members.getAll();
            for (let i = 0; i < members.length; i++) {
                let option = document.createElement('option');
                option.innerText = members[i].name.get();
                option.value = members[i].id.get();
                selectElement.appendChild(option);
            }

            modal.querySelector('#todoItem__modal--saveBtn').onclick = function () {
                ViewControllers.TodoItems.saveTodoItem(modal, todoItem);
            }

            $(modal).modal('show');
        },

        renderAddTodoItemModal: function () {
            let modal = document.getElementById('todoItem__modal');
            modal.querySelector('#todoItem__modal--title').innerText = 'Legg til gjøremål';
           
            let forms = modal.getElementsByClassName('form-control');
            for (let i = 0; i < forms.length; i++) {
                forms[i].value = '';
                forms[i].classList.remove('is-invalid');
            }

            for (let i = 1; i < 6; i++) {
                modal.querySelector('#todoItem__modal--difficultyBtn-' + i).classList.remove('active');
            }

            modal.querySelector('#todoItem__modal--difficultyBtn-1').classList.add('active');

            
            let selectElement = modal.querySelector('#todoItem__modal--selectAssigned');
            while(selectElement.firstChild) {
                selectElement.removeChild(selectElement.firstChild);
            }
            let blankOption = document.createElement('option');
            blankOption.innerText = '(ingen)';
            blankOption.value = 'noMember';
            selectElement.appendChild(blankOption);
            let members = ModelControllers.Members.getAll();
            for (let i = 0; i < members.length; i++) {
                let option = document.createElement('option');
                option.innerText = members[i].name.get();
                option.value = members[i].id.get();
                selectElement.appendChild(option);
            }

            let saveButton = modal.querySelector('#todoItem__modal--saveBtn');
            saveButton.onclick = function () {
                ViewControllers.TodoItems.saveTodoItem(modal);
            }
            $(modal).modal('show');

        },

        

        shiftActiveDifficultyButton: function (buttonNumber) {
           for (let i = 1; i < 6; i++) {
               document.getElementById('todoItem__modal--difficultyBtn-' + i).classList.remove('active');
           }
           document.getElementById('todoItem__modal--difficultyBtn-' + buttonNumber).classList.add('active');
        },

        saveTodoItem: function (modal, todoItem) {
            let validated = true;
            let name = modal.querySelector('#todoItem__modal--name').value;
            if (name.length < 1) {
                validated = false;
                modal.querySelector('#todoItem__modal--name').classList.add('is-invalid');
            }
            let description = modal.querySelector('#todoItem__modal--description').value;
            let selectedDifficultyBtn;
            for (let i = 1; i < 6; i++) {
                let difficultyBtn = modal.querySelector('#todoItem__modal--difficultyBtn-' + i);
                if (difficultyBtn.classList.contains('active')) {
                    selectedDifficultyBtn = difficultyBtn;
                }
            }
            let difficulty = parseInt(selectedDifficultyBtn.innerText) - 1;
            let selectElement = modal.querySelector('#todoItem__modal--selectAssigned');
            let selectedMember = null;
            if (selectElement.value !== 'noMember') {
                selectedMember = ModelControllers.Members.getById(selectElement.value);
            }

            if (validated) {
                if (todoItem == undefined) {
                    let newItem = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: name, description: description, difficulty: difficulty});
                    if (selectedMember !== undefined) {
                        selectedMember.assignedTodoItems.set(selectedMember.assignedTodoItems.get().concat([newItem]));
                    }    
                } else {
                    todoItem.name.set(name);
                    todoItem.description.set(description);
                    todoItem.difficulty.set(difficulty);
                    if (selectedMember !== null) {
                        selectedMember.assignedTodoItems.set(selectedMember.assignedTodoItems.get().concat([todoItem]));
                    }             
                }
                ViewControllers.TodoItems.renderCards();

                $(modal).modal('hide');  
            }
        },


    }
    
})();