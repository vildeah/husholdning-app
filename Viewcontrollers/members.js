ViewControllers.Members = (function() {
    $(document).ready(function(){
        document.getElementById('main-navigation__member-dropdown').innerHTML = '<i class="fa fa-user"></i>&nbsp' + ModelControllers.Members.getSignedInMember().name.get();   
        document.getElementById('point-badge').innerText = ModelControllers.Members.getSignedInMember().points.get();
    });

    return {
        renderChangeUserModal: function () {
            let modal = document.getElementById('members__modal--changeUser');
            let listGroup = modal.querySelector('.list-group');
            while (listGroup.firstChild) {
                listGroup.removeChild(listGroup.firstChild);
            }
            let members = ModelControllers.Members.getAll();
            for (let i = 0; i < members.length; i++) {
                if (members[i].id.get() !== ModelControllers.Members.getSignedInMember().id.get()) {
                    let button = document.createElement('button');
                    button.classList.add('list-group-item', 'list-group-item-action');
                    button.setAttribute('type', 'button');
                    button.setAttribute('value', members[i].id.get());
                    button.innerText = members[i].name.get();
                    listGroup.appendChild(button);
                }
            }

            let userButtons = modal.querySelectorAll('.list-group-item');
            for (let i = 0; i < userButtons.length; i++) {
                userButtons[i].onclick = function() {
                    ModelControllers.Members.signInById(userButtons[i].value);
                    document.getElementById('main-navigation__member-dropdown').innerHTML = '<i class="fa fa-user"></i>&nbsp' + ModelControllers.Members.getSignedInMember().name.get();
                    ViewControllers.TodoItems.renderCards();
                    document.getElementById('point-badge').innerText = ModelControllers.Members.getSignedInMember().points.get();
                    $(modal).modal('hide');
                }
            }
            $(modal).modal('show');
        }
    }
})();